---
title: Architecture
description: Development and Docker network architecture for Joseph C. Dillard's geospatial portfolio stack.
permalink: /architecture/
body_class: architecture-page
---

<section class="page-hero">
  <p class="eyebrow">Architecture</p>
  <h1>How the geospatial portfolio stack runs together.</h1>
  <p>The repos tell one system story in plain English: incoming data is checked, imagery can be processed into GIS-ready detections, accepted layers are loaded into spatial services, map clients are refreshed, and assistant tools operate through reviewed, explainable map actions.</p>
  <div class="hero__actions">
    <a class="button button--primary" href="{{ '/projects/' | relative_url }}">Explore repos</a>
    <a class="button button--secondary" href="{{ '/screenshots/' | relative_url }}">View screenshots</a>
  </div>
</section>

<section class="section section--no-top" aria-labelledby="dev-mode-heading">
  <div class="section__header">
    <p class="eyebrow">Development Mode</p>
    <h2 id="dev-mode-heading">Host-run app with optional integration services.</h2>
    <p>This is the easiest local development path. The Status Board runs from the Grails project on the host and uses H2 by default. PostGIS, GeoServer, GeoAI, Data Gateway, OpenClaw, and MCP services are optional services that are started only when that part of the workflow is being tested.</p>
  </div>
  <figure class="diagram-card">
    <a href="{{ '/assets/images/diagrams/development-network.svg' | relative_url }}" target="_blank" rel="noopener">
      <img src="{{ '/assets/images/diagrams/development-network.svg' | relative_url }}" alt="Development mode network diagram for the geospatial project stack.">
    </a>
    <figcaption>Development mode separates the required first-run path from the optional services used for spatial publication, GeoAI processing, data refresh, and assistant tooling.</figcaption>
  </figure>
</section>

<section class="section" aria-labelledby="docker-mode-heading">
  <div class="section__header">
    <p class="eyebrow">Docker Mode</p>
    <h2 id="docker-mode-heading">Containerized service stacks with published local ports.</h2>
    <p>The Docker story is service-oriented: the Status Board compose stack owns PostGIS, GeoServer, optional GeoAI, and OpenClaw gateway services; the Data Gateway compose stack owns its API, worker, and database; and MCP services run as Docker-ready stdio tools. This keeps each repo independently runnable while showing how the pieces can be composed.</p>
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
    <h2 id="flow-heading">How the stack works.</h2>
    <p>The goal is not to show isolated repos. The portfolio explains the decisions needed to move from customer data to a functioning operational map: data checks first, spatial services second, live map review third, and assistant support only through clear action boundaries.</p>
  </div>
  <div class="focus-list">
    <span>Validate and score incoming GeoJSON, CSV, GeoPackage, Shapefile, and GeoTIFF data.</span>
    <span>Load accepted spatial data into PostGIS and publish or refresh map layers.</span>
    <span>Run GeoAI workflows that produce GeoPackage/PostGIS-ready detections.</span>
    <span>Visualize incidents, assets, weather, GeoAI detections, and MGRS in a shared MapLibre map.</span>
    <span>Use MCP tools to enrich selected map coordinates with place context and incident risk analysis.</span>
  </div>
</section>
