---
layout: page
title: 内容维护约定
subtitle: 以后新增内容时，放在哪里，何时发布，什么不该进入公开仓库
---

<section class="chapter-section">
  <div class="section-heading">
    <span class="section-label">Workflow</span>
    <h2>最小维护规则</h2>
  </div>

  <div class="topic-path-grid">
    <div class="topic-path-card">
      <h3>已发布文章</h3>
      <p>放进 <code>_posts</code>，继续保持 Jekyll 的日期文件名，不为了整洁去批量挪动。</p>
    </div>
    <div class="topic-path-card">
      <h3>未发布草稿</h3>
      <p>放进 <code>_drafts</code>，不要再混进 <code>_posts</code>。公开前再决定是否进入正式发布流。</p>
    </div>
    <div class="topic-path-card">
      <h3>固定页面</h3>
      <p>像 About、Archive、Themes、Resources 这种长期入口页，留在根目录单独维护。</p>
    </div>
    <div class="topic-path-card">
      <h3>私人内容</h3>
      <p>不要进入这个公开仓库。半成品、敏感笔记、私人索引建议放到本地或私有仓库。</p>
    </div>
    <div class="topic-path-card">
      <h3>外部链接</h3>
      <p>统一进入 <a href="{{ '/resources' | relative_url }}">资源页</a>，不要再塞回导航栏下拉菜单。</p>
    </div>
    <div class="topic-path-card">
      <h3>主题入口</h3>
      <p>与自己内容直接相关的长期入口，统一整理到 <a href="{{ '/themes' | relative_url }}">主题地图</a>。</p>
    </div>
    <div class="topic-path-card">
      <h3>首页摘要</h3>
      <p>如果文章开头是引文、链接、代码块或别的“不能直接拿来做摘要”的内容，就在 front matter 里单独写 <code>summary</code>，让首页卡片优先显示它。</p>
    </div>
  </div>
</section>
