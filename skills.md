---
title: Skills
description: Enterprise GIS, open-source GIS, cloud, spatial data, software delivery, GeoAI, and architecture skills for Joseph C. Dillard.
permalink: /skills/
body_class: skills-page
---

<section class="page-hero">
  <p class="eyebrow">Skills</p>
  <h1>Enterprise GIS, cloud, spatial data, development, integration, and GeoAI-aware delivery.</h1>
  <p>This skills matrix mirrors the V7 resume keyword matrix and groups the tools I use to connect customer workflows, geospatial platforms, infrastructure, databases, applications, and production support.</p>
</section>

<section class="section section--no-top" aria-label="Skill groups">
  <div class="skill-grid">
    {% for skill_group in site.data.skills %}
      <article class="skill-card">
        <h2>{{ skill_group.group }}</h2>
        <div class="tag-list">
          {% for item in skill_group.items %}
            <span>{{ item }}</span>
          {% endfor %}
        </div>
      </article>
    {% endfor %}
  </div>
</section>

<section class="section section--split" aria-labelledby="cert-heading">
  <div>
    <p class="eyebrow">Certifications</p>
    <h2 id="cert-heading">Cloud-aware Enterprise GIS architecture.</h2>
    <p>Certifications and recent learning support the same direction as the project work: Azure and hybrid infrastructure, production-ready GIS services, geospatial data movement, and AI-aware spatial workflows.</p>
  </div>
  <div class="focus-list">
    <span>Microsoft Certified: Azure Solutions Architect Expert</span>
    <span>AZ-305 - Designing Microsoft Azure Infrastructure Solutions</span>
    <span>AZ-104 - Azure Administrator Associate</span>
    <span>CompTIA Security+ CE - current DoD 8570 certification</span>
    <span>Microsoft AI Skills Fest - June 2026</span>
  </div>
</section>
