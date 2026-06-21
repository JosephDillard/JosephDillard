---
title: Screenshots
description: Function-level screenshots for Joseph C. Dillard's public geospatial, GeoAI, data gateway, MCP, and validation projects.
permalink: /screenshots/
body_class: screenshots-page
---

<section class="page-hero">
  <p class="eyebrow">Screenshots</p>
  <h1>Function-level walkthrough of the geospatial project stack.</h1>
  <p>These screenshots show the companion project functions that matter most to a reviewer: operational map tools, GeoAI workflows, live data gateway events, MCP assistant tools, and ETL validation gates. Click any screenshot to open it full size in a new tab.</p>
</section>

{% for section in site.data.screenshots %}
  <section class="section screenshot-section{% if forloop.first %} section--no-top{% endif %}" aria-labelledby="screenshots-{{ forloop.index }}">
    <div class="screenshot-section__header">
      <p class="eyebrow">Screenshot Walkthrough</p>
      <h2 id="screenshots-{{ forloop.index }}">{{ section.title }}</h2>
      <p>{{ section.description }}</p>
    </div>

    <div class="screenshot-grid">
      {% for shot in section.items %}
        <article class="screenshot-card">
          <a class="screenshot-card__image" href="{{ shot.image | relative_url }}" target="_blank" rel="noopener" aria-label="Open {{ shot.title }} screenshot full size">
            <img src="{{ shot.image | relative_url }}" alt="{{ shot.alt }}">
          </a>
          <div class="screenshot-card__body">
            <p class="project-card__subtitle">{{ shot.subtitle }}</p>
            <h3>{{ shot.title }}</h3>
            <p>{{ shot.description }}</p>
          </div>
        </article>
      {% endfor %}
    </div>
  </section>
{% endfor %}
