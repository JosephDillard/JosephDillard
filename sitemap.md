---
title: Site Map
description: Human-readable site map for Joseph C. Dillard's GitHub Pages portfolio.
permalink: /sitemap/
body_class: sitemap-page
---

<section class="page-hero">
  <p class="eyebrow">Site Map</p>
  <h1>Portfolio pages and project links.</h1>
  <p>This page collects the main GitHub Pages sections, project walkthroughs, repository links, and generated sitemap entry point in one place.</p>
</section>

<section class="section section--no-top" aria-labelledby="site-pages-heading">
  <div class="section__header">
    <p class="eyebrow">Pages</p>
    <h2 id="site-pages-heading">Main portfolio sections.</h2>
    <p>Use these links to move through the resume, skills, project documentation, architecture diagrams, screenshots, and contact page.</p>
  </div>

  <div class="project-list">
    <article class="project-row">
      <div>
        <h3><a href="{{ '/' | relative_url }}">Home</a></h3>
        <p>Summary of target positioning, resume snapshot, project stack, and architecture links.</p>
      </div>
    </article>
    <article class="project-row">
      <div>
        <h3><a href="{{ '/resume/' | relative_url }}">Resume</a></h3>
        <p>Resume highlights, current credentials, experience, technical strengths, and keyword matrix.</p>
      </div>
    </article>
    <article class="project-row">
      <div>
        <h3><a href="{{ '/skills/' | relative_url }}">Skills</a></h3>
        <p>Grouped skill matrix for Enterprise GIS, cloud, software delivery, spatial data, GeoAI, and operations.</p>
      </div>
    </article>
    <article class="project-row">
      <div>
        <h3><a href="{{ '/projects/' | relative_url }}">Projects</a></h3>
        <p>Plain-English explanation of each repository and how the portfolio stack fits together.</p>
      </div>
    </article>
    <article class="project-row">
      <div>
        <h3><a href="{{ '/architecture/' | relative_url }}">Architecture</a></h3>
        <p>Development, Docker, and Azure Kubernetes architecture diagrams for the geospatial project stack.</p>
      </div>
    </article>
    <article class="project-row">
      <div>
        <h3><a href="{{ '/screenshots/' | relative_url }}">Screenshots</a></h3>
        <p>Function-level screenshots for map tools, GeoAI workflows, data gateway APIs, MCP tools, and ETL validation.</p>
      </div>
    </article>
    <article class="project-row">
      <div>
        <h3><a href="{{ '/contact/' | relative_url }}">Contact</a></h3>
        <p>Contact details and role-fit context for geospatial architecture, GIS development, cloud, and data workflow opportunities.</p>
      </div>
    </article>
  </div>
</section>

<section class="section" aria-labelledby="repo-links-heading">
  <div class="section__header">
    <p class="eyebrow">Repositories</p>
    <h2 id="repo-links-heading">Project repositories and related docs.</h2>
    <p>These links come from the same project data used by the Projects page, so the sitemap follows the current portfolio structure.</p>
  </div>

  <div class="project-list">
    {% for project in site.data.projects %}
      <article class="project-row">
        <div>
          <p class="project-card__subtitle">{{ project.subtitle }}</p>
          <h3>{{ project.title }}</h3>
          <p>{{ project.summary }}</p>
        </div>
        <div class="project-row__meta">
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

<section class="section" aria-labelledby="technical-sitemap-heading">
  <div class="section__header">
    <p class="eyebrow">Search Engines</p>
    <h2 id="technical-sitemap-heading">Generated XML sitemap.</h2>
    <p>The site also publishes a machine-readable sitemap through the Jekyll sitemap plugin.</p>
  </div>

  <div class="text-links">
    <a href="{{ '/sitemap.xml' | relative_url }}">Open sitemap.xml</a>
  </div>
</section>
