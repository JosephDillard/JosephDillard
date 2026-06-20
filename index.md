---
title: Enterprise GIS Architect and Cloud Solution Architect
description: Joseph C. Dillard designs Enterprise GIS, Azure, GeoAI, and operational geospatial systems for defense, utility, and enterprise teams.
permalink: /
body_class: home
---

<section class="hero" style="--hero-image: url('{{ '/Dillard_GeoBase_Github_Commits.png' | relative_url }}');">
  <div class="hero__content">
    <p class="eyebrow">Enterprise GIS Architect | Cloud Solution Architect | Full-Stack GIS Developer</p>
    <h1>Joseph C. Dillard</h1>
    <p class="hero__lead">I design and modernize geospatial systems that connect Enterprise GIS platforms, spatial databases, cloud and hybrid infrastructure, data pipelines, operational maps, and AI-aware decision-support workflows.</p>
    <div class="hero__actions" aria-label="Primary actions">
      <a class="button button--primary" href="{{ site.resume.pdf | relative_url }}">Download resume</a>
      <a class="button button--secondary" href="{{ '/architecture/' | relative_url }}">View architecture</a>
      <a class="button button--secondary" href="{{ '/projects/' | relative_url }}">Review repos</a>
      <a class="button button--secondary" href="mailto:{{ site.author.email }}">Contact me</a>
    </div>
  </div>
</section>

<section class="section section--tight" aria-labelledby="proof-heading">
  <div class="section__header">
    <p class="eyebrow">Resume Snapshot</p>
    <h2 id="proof-heading">Architecture depth with hands-on delivery.</h2>
    <p>My background spans ArcGIS Enterprise, open-source GIS, PostgreSQL/PostGIS, Oracle Spatial, utility GIS, mission systems, Azure, Docker, data integration, GeoAI-aware workflows, and full-stack GIS application delivery.</p>
  </div>

  <div class="metric-grid metric-grid--six">
    <article class="metric-card">
      <strong>25+ years</strong>
      <span>Geospatial and GIS operations experience</span>
    </article>
    <article class="metric-card">
      <strong>20+ years</strong>
      <span>Enterprise GIS architecture and administration</span>
    </article>
    <article class="metric-card">
      <strong>9+ years</strong>
      <span>Java and GIS web development</span>
    </article>
    <article class="metric-card">
      <strong>50+ apps</strong>
      <span>Custom applications, map views, and dashboards supported</span>
    </article>
    <article class="metric-card">
      <strong>2,900 users</strong>
      <span>Major operational use-event scale supported</span>
    </article>
    <article class="metric-card">
      <strong>20,000/min</strong>
      <span>Observed ArcGIS Server request load</span>
    </article>
  </div>
</section>

<section class="section section--split" aria-labelledby="fit-heading">
  <div>
    <p class="eyebrow">Target Role Positioning</p>
    <h2 id="fit-heading">Best fit roles</h2>
    <p>I am targeting teams that need a senior geospatial technologist who can bridge customer discovery, architecture, infrastructure, spatial data engineering, application teams, rollout, and production support.</p>
  </div>
  <div class="focus-list">
    <span>Enterprise GIS / ArcGIS Enterprise architecture for defense, utility, and enterprise customers</span>
    <span>Open-source Enterprise GIS architecture with GeoServer, PostGIS, QGIS, and GIS server evaluation</span>
    <span>Cloud and hybrid infrastructure design with Azure certification and AWS working knowledge</span>
    <span>Full-stack GIS application delivery across APIs, web applications, spatial services, and databases</span>
    <span>Spatial database, geospatial ETL, data readiness, and service reliability leadership</span>
  </div>
</section>

<section class="section" aria-labelledby="project-heading">
  <div class="section__header">
    <p class="eyebrow">Public Proof</p>
    <h2 id="project-heading">A connected geospatial project stack.</h2>
    <p>The public repos show the same system thinking as my resume: data readiness, PostGIS-backed services, operational maps, GeoAI outputs, live refresh events, and map-aware assistant tools.</p>
  </div>

  <div class="project-grid">
    {% for project in site.data.projects limit: 6 %}
      <article class="project-card">
        <p class="project-card__subtitle">{{ project.subtitle }}</p>
        <h3>{{ project.title }}</h3>
        <p>{{ project.summary }}</p>
        <p class="project-card__impact">{{ project.fit }}</p>
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
    <p class="eyebrow">Architecture Evidence</p>
    <h2 id="evidence-heading">Development and Docker views of the system.</h2>
    <p>The architecture page shows how the stack runs locally in development mode and how the Docker-backed services fit together when PostGIS, GeoServer, GeoAI, gateway, and MCP containers are enabled.</p>
    <div class="text-links">
      <a href="{{ '/architecture/' | relative_url }}">View architecture diagrams</a>
      <a href="{{ '/screenshots/' | relative_url }}">View function screenshots</a>
      <a href="{{ '/resume/' | relative_url }}">Read resume sections</a>
    </div>
  </div>
  <figure class="image-frame">
    <img src="{{ '/assets/images/diagrams/development-network.svg' | relative_url }}" alt="Development mode network diagram for the geospatial project stack.">
    <figcaption>Development-mode architecture showing host-run services and optional local GIS infrastructure.</figcaption>
  </figure>
</section>
