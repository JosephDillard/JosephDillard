---
title: Architecture
description: Development and Docker network architecture for Joseph C. Dillard's geospatial portfolio stack.
permalink: /architecture/
body_class: architecture-page
---

<section class="page-hero">
  <p class="eyebrow">Architecture</p>
  <h1>How the geospatial portfolio stack runs together.</h1>
  <p>The repos are meant to tell one system story: validate incoming geospatial data, process or enrich it, load it into spatial services, refresh operational maps, and expose map-aware assistant tools with clear integration boundaries.</p>
  <div class="hero__actions">
    <a class="button button--primary" href="{{ '/projects/' | relative_url }}">Review repos</a>
    <a class="button button--secondary" href="{{ '/screenshots/' | relative_url }}">View screenshots</a>
  </div>
</section>

<section class="section section--no-top" aria-labelledby="dev-mode-heading">
  <div class="section__header">
    <p class="eyebrow">Development Mode</p>
    <h2 id="dev-mode-heading">Host-run services with optional GIS infrastructure.</h2>
    <p>This is the easiest review path. The Status Board can run from the Grails project with H2 by default, while GeoAI, the Data Gateway, the incident bridge, MCP tools, PostGIS, and GeoServer can be started only when their integration path is being tested.</p>
  </div>
  <figure class="diagram-card">
    <a href="{{ '/assets/images/diagrams/development-network.svg' | relative_url }}" target="_blank" rel="noopener">
      <img src="{{ '/assets/images/diagrams/development-network.svg' | relative_url }}" alt="Development mode network diagram for the geospatial project stack.">
    </a>
    <figcaption>Development mode keeps the first-run path simple and makes optional services visible instead of mandatory.</figcaption>
  </figure>
</section>

<section class="section" aria-labelledby="docker-mode-heading">
  <div class="section__header">
    <p class="eyebrow">Docker Mode</p>
    <h2 id="docker-mode-heading">Containerized service stacks with published local ports.</h2>
    <p>The Docker story is service-oriented: the Status Board compose stack owns PostGIS, GeoServer, and optional GeoAI; the Data Gateway compose stack owns its API, worker, and database; and MCP services run as Docker-ready stdio servers. This keeps each repo reviewable while showing how the pieces can be composed.</p>
  </div>
  <figure class="diagram-card">
    <a href="{{ '/assets/images/diagrams/docker-network.svg' | relative_url }}" target="_blank" rel="noopener">
      <img src="{{ '/assets/images/diagrams/docker-network.svg' | relative_url }}" alt="Docker mode network diagram for the geospatial project stack.">
    </a>
    <figcaption>Docker mode exposes the real compose boundaries and ports. Port 5432 can only be owned by one compose stack at a time unless the environment changes the published port.</figcaption>
  </figure>
</section>

<section class="section section--split" aria-labelledby="flow-heading">
  <div>
    <p class="eyebrow">System Flow</p>
    <h2 id="flow-heading">What the stack demonstrates.</h2>
    <p>The goal is not just to show isolated repos. The portfolio shows the engineering judgment needed to move from customer data to a functioning operational map with explainable assistant support.</p>
  </div>
  <div class="focus-list">
    <span>Validate and score incoming GeoJSON, CSV, GeoPackage, Shapefile, and GeoTIFF data.</span>
    <span>Load accepted spatial data into PostGIS and publish or refresh map layers.</span>
    <span>Run GeoAI workflows that produce GeoPackage/PostGIS-ready detections.</span>
    <span>Visualize incidents, assets, weather, GeoAI detections, and MGRS in a shared MapLibre map.</span>
    <span>Use MCP tools to enrich selected map coordinates with place context and incident risk analysis.</span>
  </div>
</section>
