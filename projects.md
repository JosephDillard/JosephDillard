---
title: Projects
description: Public geospatial, GeoAI, PostGIS, and map operations projects by Joseph C. Dillard.
permalink: /projects/
body_class: projects-page
---

<section class="page-hero">
  <p class="eyebrow">Projects</p>
  <h1>Public geospatial systems, built as a connected stack.</h1>
  <p>These projects showcase the work I want employers to see first: architecture thinking, spatial data movement, open-source GIS, ArcGIS-adjacent workflows, live map operations, and practical AI-assistant extensions.</p>
</section>

<section class="section section--no-top" aria-label="Project list">
  <div class="project-list">
    {% for project in site.data.projects %}
      <article class="project-row">
        <div>
          <p class="project-card__subtitle">{{ project.subtitle }}</p>
          <h2>{{ project.title }}</h2>
          <p>{{ project.summary }}</p>
          <p class="project-card__impact">{{ project.impact }}</p>
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
