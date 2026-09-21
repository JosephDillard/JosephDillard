---
title: Recent Projects
description: Four recent projects by Joseph C. Dillard covering ArcGIS capacity planning, OSINT sources, geospatial intelligence, and local knowledge retrieval.
permalink: /recent-projects/
body_class: recent-projects-page
---

<section class="page-hero">
  <p class="eyebrow">Recent Projects</p>
  <h1>Four new projects, from capacity planning to intelligence.</h1>
  <p>Practical tools for measuring GIS workloads, finding useful sources, reviewing geospatial observations, and retrieving technical knowledge.</p>
  <p>Two repositories are public and two are private. Each overview is available here; links marked <strong>access required</strong> open only for GitHub users with permission.</p>
  <div class="hero__actions">
    <a class="button button--secondary" href="{{ '/projects/' | relative_url }}">Explore the core geospatial stack</a>
  </div>
</section>

<section class="section section--no-top" aria-label="Recent project overviews">
  <div class="project-list">
    {% for project in site.data.recent_projects %}
      <article class="project-row" aria-labelledby="{{ project.id }}-heading">
        <div>
          <p class="project-card__subtitle">{{ project.subtitle }}</p>
          <h2 id="{{ project.id }}-heading">{{ project.title }}</h2>
          <p class="repo-status">{{ project.visibility }} repository · <code>{{ project.repo }}</code></p>
          <p>{{ project.summary }}</p>
          <p>{{ project.details }}</p>
          <p><strong>Current scope:</strong> {{ project.scope }}</p>
        </div>
        <div class="project-row__meta">
          <h3>What it does</h3>
          <ul>
            {% for capability in project.capabilities %}
              <li>{{ capability }}</li>
            {% endfor %}
          </ul>
          <div class="tag-list" aria-label="{{ project.title }} technologies and methods">
            {% for tag in project.tags %}
              <span>{{ tag }}</span>
            {% endfor %}
          </div>
          <div class="text-links">
            {% for link in project.links %}
              <a href="{{ link.url }}">{{ link.label }}</a>
            {% endfor %}
          </div>
        </div>
      </article>
    {% endfor %}
  </div>
</section>
