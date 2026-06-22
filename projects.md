---
title: Projects
description: Public and local geospatial, GeoAI, PostGIS, MCP, data gateway, and portfolio repositories by Joseph C. Dillard.
permalink: /projects/
body_class: projects-page
---

<section class="page-hero">
  <p class="eyebrow">Projects</p>
  <h1>All portfolio repos, explained as one geospatial system.</h1>
  <p>These repositories are designed to be reviewed both individually and as a connected stack. The plain-English system flow is: validate data, process or enrich it, load accepted layers, refresh the operational map, and use assistant tools that explain their map actions.</p>
  <div class="hero__actions">
    <a class="button button--primary" href="{{ '/architecture/' | relative_url }}">View architecture diagrams</a>
    <a class="button button--secondary" href="{{ '/screenshots/' | relative_url }}">View screenshots</a>
  </div>
</section>

<section class="section section--no-top" aria-labelledby="stack-flow-heading">
  <div class="section__header">
    <p class="eyebrow">System Story</p>
    <h2 id="stack-flow-heading">From incoming data to operational map review.</h2>
    <p>The core stack is intentionally practical. Files are checked before load, GeoAI output becomes GIS data, the gateway tracks and notifies changes, the Status Board visualizes layers, and MCP/assistant tools add controlled context around map clicks and incidents.</p>
  </div>
  <div class="flow-strip" aria-label="Repository flow">
    <span>ETL validation</span>
    <span>GeoAI processing</span>
    <span>Data gateway</span>
    <span>PostGIS / GeoServer</span>
    <span>Status Board map</span>
    <span>MCP tools</span>
  </div>
</section>

<section class="section" aria-label="Repository list">
  <div class="project-list">
    {% for project in site.data.projects %}
      <article class="project-row">
        <div>
          <p class="project-card__subtitle">{{ project.subtitle }}</p>
          <h2>{{ project.title }}</h2>
          <p class="repo-status">{{ project.status }}{% if project.repo %} - <code>{{ project.repo }}</code>{% endif %}</p>
          <p>{{ project.summary }}</p>
          <p class="project-card__impact">{{ project.impact }}</p>
          <p><strong>How it fits:</strong> {{ project.fit }}</p>
        </div>
        <div class="project-row__meta">
          <div class="tag-list" aria-label="{{ project.title }} technologies">
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
