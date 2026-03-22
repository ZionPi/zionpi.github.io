(function() {
  function pad(value) {
    return value < 10 ? "0" + value : String(value);
  }

  function toIsoDate(date) {
    return date.getUTCFullYear() + "-" + pad(date.getUTCMonth() + 1) + "-" + pad(date.getUTCDate());
  }

  function parseIsoDate(value) {
    var parts = (value || "").split("-").map(Number);
    return new Date(Date.UTC(parts[0], (parts[1] || 1) - 1, parts[2] || 1));
  }

  function startOfWeek(date) {
    var copy = new Date(date.getTime());
    var day = copy.getUTCDay();
    var offset = day === 0 ? -6 : 1 - day;
    copy.setUTCDate(copy.getUTCDate() + offset);
    return copy;
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function levelForCount(count) {
    if (count >= 4) return 4;
    if (count >= 3) return 3;
    if (count >= 2) return 2;
    if (count >= 1) return 1;
    return 0;
  }

  document.addEventListener("DOMContentLoaded", function() {
    var root = document.querySelector(".writing-shell");
    if (!root) return;

    fetch(root.dataset.writingIndex)
      .then(function(response) { return response.json(); })
      .then(function(posts) {
        posts = posts || [];

        var countsByDay = {};
        var tagCounts = {};
        var yearCounts = {};

        posts.forEach(function(post) {
          countsByDay[post.date] = (countsByDay[post.date] || 0) + 1;
          var year = post.date.slice(0, 4);
          yearCounts[year] = (yearCounts[year] || 0) + 1;
          (post.tags || []).forEach(function(tag) {
            tagCounts[tag] = (tagCounts[tag] || 0) + 1;
          });
        });

        var today = new Date();
        var end = new Date(Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate()));
        var start = new Date(end.getTime());
        start.setUTCDate(start.getUTCDate() - 364);
        var gridStart = startOfWeek(start);

        var total = 0;
        var currentStreak = 0;
        var maxStreak = 0;
        var days = [];

        for (var i = 0; i < 365; i += 1) {
          var day = new Date(start.getTime());
          day.setUTCDate(start.getUTCDate() + i);
          var iso = toIsoDate(day);
          var count = countsByDay[iso] || 0;
          total += count;
          if (count > 0) {
            currentStreak += 1;
            maxStreak = Math.max(maxStreak, currentStreak);
          } else {
            currentStreak = 0;
          }
          days.push({ date: day, iso: iso, count: count });
        }

        var heatmap = root.querySelector("[data-writing-heatmap]");
        var monthLabels = root.querySelector("[data-writing-months]");
        var firstMonthSeen = {};
        var monthHtml = [];
        var dayHtml = [];
        var weekIndex = 0;

        for (var cursor = new Date(gridStart.getTime()); cursor <= end; cursor.setUTCDate(cursor.getUTCDate() + 1)) {
          var cellDate = new Date(cursor.getTime());
          var isoKey = toIsoDate(cellDate);
          var countValue = countsByDay[isoKey] || 0;
          var isBeforeRange = cellDate < start;
          var title = isoKey + " · " + countValue + " 篇";
          var monthKey = cellDate.getUTCFullYear() + "-" + cellDate.getUTCMonth();

          if (cellDate.getUTCDay() === 1) {
            if (!firstMonthSeen[monthKey] && cellDate >= start) {
              firstMonthSeen[monthKey] = true;
              monthHtml.push('<span style="grid-column:' + (weekIndex + 1) + ';">' + (cellDate.getUTCMonth() + 1) + '月</span>');
            }
            weekIndex += 1;
          }

          dayHtml.push(
            '<span class="writing-day level-' + levelForCount(countValue) + (isBeforeRange ? ' is-pad' : '') + '"' +
            ' title="' + escapeHtml(title) + '"' +
            '></span>'
          );
        }

        heatmap.innerHTML = dayHtml.join("");
        monthLabels.innerHTML = monthHtml.join("");

        var totalNode = root.querySelector("[data-writing-total]");
        var streakNode = root.querySelector("[data-writing-streak]");
        var latestNode = root.querySelector("[data-writing-latest]");

        if (totalNode) totalNode.textContent = total;
        if (streakNode) streakNode.textContent = maxStreak;
        if (latestNode) latestNode.textContent = posts.length ? posts[0].date.replace(/-/g, ".") : "--";

        var yearsNode = document.querySelector("[data-writing-years]");
        yearsNode.innerHTML = Object.keys(yearCounts).sort(function(a, b) {
          return Number(b) - Number(a);
        }).map(function(year) {
          return (
            '<article class="writing-year-card">' +
              '<span class="writing-year-label">' + year + '</span>' +
              '<strong class="writing-year-value">' + yearCounts[year] + '</strong>' +
              '<span class="writing-year-meta">篇文章</span>' +
              '<a class="writing-year-link" href="/archive/#year-' + year + '">查看归档</a>' +
            '</article>'
          );
        }).join("");

        var tagsNode = document.querySelector("[data-writing-tags]");
        tagsNode.innerHTML = Object.keys(tagCounts).sort(function(a, b) {
          return tagCounts[b] - tagCounts[a];
        }).slice(0, 18).map(function(tag) {
          return (
            '<a class="writing-tag-chip" href="/tags/#' + encodeURIComponent(tag) + '">' +
              '<span>' + escapeHtml(tag) + '</span>' +
              '<strong>' + tagCounts[tag] + '</strong>' +
            '</a>'
          );
        }).join("");
      });
  });
})();
