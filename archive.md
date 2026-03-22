---
layout: page
title: 时间归档
subtitle:
bigimg:
  - "/img/fractal.jpg"
---

<div class="archive-shell">
  <div class="archive-toolbar">
    <a class="archive-chip" href="{{ '/' | relative_url }}">首页</a>
    <a class="archive-chip" href="{{ '/tags' | relative_url }}">标签索引</a>
    <a class="archive-chip" href="{{ '/feed.xml' | relative_url }}">RSS</a>
  </div>

  <div class="archive-years-nav">
    {% assign last_year = "" %}
    {% for post in site.posts %}
      {% capture current_year %}{{ post.date | date: "%Y" }}{% endcapture %}
      {% if current_year != last_year %}
        <a href="#year-{{ current_year }}">{{ current_year }}</a>
        {% assign last_year = current_year %}
      {% endif %}
    {% endfor %}
  </div>

  <div class="archive-timeline">
    {% assign posts_by_year = site.posts | group_by_exp: "post", "post.date | date: '%Y'" %}
    {% for year in posts_by_year %}
      <section class="archive-year-block" id="year-{{ year.name }}">
        <div class="archive-year-label">{{ year.name }}</div>
        <div class="archive-year-content">
          {% assign posts_by_month = year.items | group_by_exp: "post", "post.date | date: '%m'" %}
          {% for month in posts_by_month %}
            {% assign month_post = month.items | first %}
            <div class="archive-month-group">
              <h2>{{ month_post.date | date: "%-m月" }}</h2>
              <ul class="archive-post-list">
                {% for post in month.items %}
                  <li class="archive-post-item">
                    <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%-m月%-d日" }}</time>
                    <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
                  </li>
                {% endfor %}
              </ul>
            </div>
          {% endfor %}
        </div>
      </section>
    {% endfor %}
  </div>
</div>
