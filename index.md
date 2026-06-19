---
title: Enterprise GIS and Azure Solution Architect
description: Joseph C. Dillard designs Enterprise GIS, Azure, GeoAI, and operational geospatial systems for defense, utility, and enterprise teams.
permalink: /
body_class: home
---

<section class="hero" style="--hero-image: url('{{ '/Dillard_GeoBase_Github_Commits.png' | relative_url }}');">
  <div class="hero__content">
    <p class="eyebrow">Enterprise GIS and Azure Solution Architect</p>
    <h1>Joseph C. Dillard</h1>
    <p class="hero__lead">I design and modernize geospatial systems that turn enterprise data, map services, cloud infrastructure, and field workflows into dependable operational tools.</p>
    <div class="hero__actions" aria-label="Primary actions">
      <a class="button button--primary" href="{{ site.resume.pdf | relative_url }}">Download resume</a>
      <a class="button button--secondary" href="{{ '/projects/' | relative_url }}">View projects</a>
      <a class="button button--secondary" href="mailto:{{ site.author.email }}">Contact me</a>
    </div>
  </div>
</section>

<section class="section section--tight" aria-labelledby="proof-heading">
  <div class="section__header">
    <p class="eyebrow">What I Bring</p>
    <h2 id="proof-heading">Architecture depth with hands-on delivery.</h2>
    <p>My background spans mission systems, utility GIS, ArcGIS Enterprise, open-source GIS, Azure, database-backed spatial services, and the practical work of taking systems from requirements to production.</p>
  </div>

  <div class="metric-grid">
    <article class="metric-card">
      <strong>25+ years</strong>
      <span>GIS and geospatial operations experience</span>
    </article>
    <article class="metric-card">
      <strong>20+ years</strong>
      <span>Enterprise GIS architecture, administration, and delivery</span>
    </article>
    <article class="metric-card">
      <strong>50+ apps</strong>
      <span>Custom applications, map views, and dashboards supported in one major platform</span>
    </article>
    <article class="metric-card">
      <strong>20,000/min</strong>
      <span>Observed ArcGIS Server request load during major operational use events</span>
    </article>
  </div>
</section>

<section class="section section--split" aria-labelledby="fit-heading">
  <div>
    <p class="eyebrow">Role Fit</p>
    <h2 id="fit-heading">Best fit roles</h2>
    <p>I am targeting teams that need a senior geospatial technologist who can bridge customer discovery, architecture, cloud infrastructure, spatial data engineering, application teams, and operational rollout.</p>
  </div>
  <div class="focus-list">
    <span>Enterprise GIS / ArcGIS Enterprise solution architecture</span>
    <span>Azure cloud and hybrid infrastructure design</span>
    <span>Utility GIS, mobile GIS, and Utility Network enablement</span>
    <span>GeoAI, spatial data pipelines, and service performance</span>
    <span>Requirements discovery, training, testing, and production readiness</span>
  </div>
</section>

<section class="section" aria-labelledby="project-heading">
  <div class="section__header">
    <p class="eyebrow">Selected Work</p>
    <h2 id="project-heading">Geospatial project stack</h2>
    <p>A connected set of public projects focused on spatial intelligence, PostGIS-backed workflows, live map updates, and map-aware assistant tooling.</p>
  </div>

  <div class="project-grid">
    {% for project in site.data.projects limit: 4 %}
      <article class="project-card">
        <p class="project-card__subtitle">{{ project.subtitle }}</p>
        <h3>{{ project.title }}</h3>
        <p>{{ project.summary }}</p>
        <p class="project-card__impact">{{ project.impact }}</p>
        <div class="tag-list" aria-label="{{ project.title }} technologies">
          {% for tag in project.tags limit: 6 %}
            <span>{{ tag }}</span>
          {% endfor %}
        </div>
        <div class="text-links">
          {% for link in project.links limit: 2 %}
            <a href="{{ link.url }}">{{ link.label }}</a>
          {% endfor %}
        </div>
      </article>
    {% endfor %}
  </div>
</section>

<section class="section section--visual" aria-labelledby="evidence-heading">
  <div class="visual-copy">
    <p class="eyebrow">Public Proof</p>
    <h2 id="evidence-heading">A portfolio built around real systems.</h2>
    <p>The public work here is centered on geospatial architecture, local GIS stacks, browser map operations, data gateways, and emerging assistant workflows. The goal is not just to list technologies, but to show how they fit together.</p>
    <a class="button button--primary" href="{{ '/resume/' | relative_url }}">Read resume highlights</a>
  </div>
  <figure class="image-frame">
    <img src="{{ '/Dillard_GeoBase_Github_Commits.png' | relative_url }}" alt="Screenshot of geospatial project commit activity and public development work.">
    <figcaption>Project activity and geospatial development evidence from this public GitHub presence.</figcaption>
  </figure>
</section>
