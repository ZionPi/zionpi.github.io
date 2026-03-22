(function() {
  var sharedDocuments = null;
  var sharedIndexPromise = null;

  function normalizeText(value) {
    return (value || "").toString().toLowerCase().replace(/\s+/g, " ").trim();
  }

  function buildSnippet(text, query) {
    if (!text) {
      return "";
    }

    var normalizedText = text.replace(/\s+/g, " ").trim();
    var loweredText = normalizedText.toLowerCase();
    var loweredQuery = query.toLowerCase();
    var index = loweredText.indexOf(loweredQuery);

    if (index === -1) {
      return normalizedText.slice(0, 140) + (normalizedText.length > 140 ? "..." : "");
    }

    var start = Math.max(0, index - 50);
    var end = Math.min(normalizedText.length, index + loweredQuery.length + 90);
    var prefix = start > 0 ? "..." : "";
    var suffix = end < normalizedText.length ? "..." : "";
    return prefix + normalizedText.slice(start, end) + suffix;
  }

  function escapeHtml(value) {
    return value
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function highlightSnippet(text, query) {
    if (!text || !query) {
      return escapeHtml(text || "");
    }

    var escaped = escapeHtml(text);
    var escapedQuery = escapeHtml(query);
    var pattern = new RegExp("(" + escapedQuery.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ")", "ig");
    return escaped.replace(pattern, "<mark>$1</mark>");
  }

  function fetchIndex(indexUrl) {
    if (sharedDocuments) {
      return Promise.resolve(sharedDocuments);
    }

    if (!sharedIndexPromise) {
      sharedIndexPromise = fetch(indexUrl)
        .then(function(response) { return response.json(); })
        .then(function(payload) {
          sharedDocuments = payload || [];
          return sharedDocuments;
        });
    }

    return sharedIndexPromise;
  }

  function getEmptyHtml(mode) {
    if (mode === "compact") {
      return '<div class="search-mini-state">输入关键词开始搜索。</div>';
    }
    return '<div class="search-empty-card"><h3>先输入一个词。</h3><p>可以搜标题、标签，或正文中的概念词。</p></div>';
  }

  function getNoMatchHtml(mode) {
    if (mode === "compact") {
      return '<div class="search-mini-state">没有命中，试试更短的词。</div>';
    }
    return '<div class="search-empty-card"><h3>没有命中。</h3><p>试试更短的关键词，或者换一个标签词。</p></div>';
  }

  function renderMatches(results, matches, mode, query) {
    if (mode === "compact") {
      results.innerHTML = matches.slice(0, 8).map(function(match) {
        return (
          '<a class="search-mini-result" href="' + escapeHtml(match.url) + '">' +
            '<span class="search-mini-title">' + escapeHtml(match.title) + '</span>' +
            '<span class="search-mini-meta">' + escapeHtml(match.kind === "page" ? "页面" : "文章") + (match.date ? ' · ' + escapeHtml(match.date) : '') + '</span>' +
          '</a>'
        );
      }).join("");
      return;
    }

    results.innerHTML = matches.slice(0, 50).map(function(match) {
      var kindHtml = '<span>' + escapeHtml(match.kind === "page" ? "页面" : "文章") + '</span>';
      var dateHtml = match.date ? '<span>' + escapeHtml(match.date) + '</span>' : "";
      var tagsHtml = match.tags ? '<div class="search-result-tags">' + escapeHtml(match.tags) + '</div>' : "";
      var snippetHtml = match.snippet ? '<p>' + highlightSnippet(match.snippet, query) + '</p>' : "";
      return (
        '<article class="search-result-card">' +
          '<div class="search-result-meta">' + kindHtml + dateHtml + '</div>' +
          '<h3><a href="' + escapeHtml(match.url) + '">' + escapeHtml(match.title) + '</a></h3>' +
          tagsHtml +
          snippetHtml +
        '</article>'
      );
    }).join("");
  }

  function initSearchRoot(root) {
    var input = root.querySelector(".site-search-input");
    var clearButton = root.querySelector(".site-search-clear");
    var status = root.querySelector(".site-search-status");
    var results = root.querySelector(".site-search-results");
    var mode = root.dataset.searchMode || "page";
    var indexUrl = root.dataset.searchIndex || "/search.json";

    if (!input || !results) {
      return;
    }

    var documents = [];

    function renderState(message, html) {
      if (status) {
        status.textContent = message;
      }
      results.innerHTML = html;
    }

    function renderResults(query) {
      var normalizedQuery = normalizeText(query);

      if (!normalizedQuery) {
        renderState("输入关键词开始搜索。", getEmptyHtml(mode));
        if (mode === "compact") {
          results.classList.add("is-hidden");
        }
        return;
      }

      var matches = documents.map(function(doc) {
        var score = 0;
        var title = normalizeText(doc.title);
        var tags = normalizeText(doc.tags);
        var content = normalizeText(doc.content);

        if (title.indexOf(normalizedQuery) !== -1) {
          score += 12;
        }
        if (tags.indexOf(normalizedQuery) !== -1) {
          score += 8;
        }
        if (content.indexOf(normalizedQuery) !== -1) {
          score += 3;
        }

        if (!score) {
          return null;
        }

        return {
          title: doc.title,
          url: doc.url,
          date: doc.date,
          tags: doc.tags,
          kind: doc.kind || "post",
          snippet: buildSnippet(doc.content, normalizedQuery),
          score: score
        };
      }).filter(Boolean).sort(function(a, b) {
        return b.score - a.score;
      });

      if (!matches.length) {
        renderState('没有找到和 "' + query + '" 相关的内容。', getNoMatchHtml(mode));
        if (mode === "compact") {
          results.classList.remove("is-hidden");
        }
        return;
      }

      if (status) {
        status.textContent = '找到 ' + matches.length + ' 条相关结果。';
      }
      renderMatches(results, matches, mode, normalizedQuery);
      if (mode === "compact") {
        results.classList.remove("is-hidden");
      }
    }

    fetchIndex(indexUrl)
      .then(function(payload) {
        documents = payload;
        renderState("输入关键词开始搜索。", getEmptyHtml(mode));
      })
      .catch(function() {
        renderState("搜索索引加载失败。", mode === "compact" ? '<div class="search-mini-state">索引加载失败。</div>' : '<div class="search-empty-card"><h3>索引加载失败。</h3><p>请刷新页面，或者确认本地服务是否正常。</p></div>');
      });

    input.addEventListener("input", function(event) {
      renderResults(event.target.value);
    });

    clearButton.addEventListener("click", function() {
      input.value = "";
      input.focus();
      renderResults("");
    });

    if (mode === "compact") {
      document.addEventListener("click", function(event) {
        if (!root.contains(event.target)) {
          results.classList.add("is-hidden");
        }
      });

      input.addEventListener("focus", function() {
        if (input.value.trim()) {
          results.classList.remove("is-hidden");
        }
      });
    }
  }

  document.addEventListener("DOMContentLoaded", function() {
    Array.prototype.forEach.call(document.querySelectorAll(".site-search-root"), initSearchRoot);
  });
})();
