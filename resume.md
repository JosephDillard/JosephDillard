---
title: Resume
description: Resume highlights for Joseph C. Dillard, Enterprise GIS and Azure Solution Architect.
permalink: /resume/
body_class: resume-page
---

<section class="page-hero">
  <p class="eyebrow">Resume</p>
  <h1>Enterprise GIS and Azure Solution Architect.</h1>
  <p>Solution Architect with 25+ years of GIS experience, including 20+ years designing, building, and maintaining Enterprise GIS systems and 9+ years of Java/GIS web development.</p>
  <div class="hero__actions">
    <a class="button button--primary" href="{{ site.resume.pdf | relative_url }}">Download PDF</a>
    <a class="button button--secondary" href="{{ site.resume.docx | relative_url }}">Download DOCX</a>
    <a class="button button--secondary" href="mailto:{{ site.author.email }}">Email me</a>
  </div>
</section>

<section class="section section--no-top" aria-labelledby="summary-heading">
  <div class="resume-summary" id="summary-heading">
    <p>Experienced in ArcGIS Enterprise, ArcGIS Server, Portal, ArcGIS Pro, enterprise geodatabases, PostgreSQL/PostGIS, Oracle Spatial, data pipelines, and cloud/hybrid infrastructure. Strong record translating customer workflows into scalable architecture, data services, mobile GIS enablement, testing plans, training, and production-ready systems for defense, utility, and enterprise customers. U.S. Army Veteran. Current Security+ CE.</p>
  </div>
</section>

<section class="section" aria-labelledby="experience-heading">
  <div class="section__header">
    <p class="eyebrow">Experience</p>
    <h2 id="experience-heading">Selected career highlights</h2>
  </div>

  <div class="timeline">
    {% for job in site.data.experience %}
      <article class="timeline-item">
        <div class="timeline-item__meta">
          <span>{{ job.dates }}</span>
        </div>
        <div class="timeline-item__body">
          <h3>{{ job.title }}</h3>
          <p class="timeline-item__org">{{ job.organization }}</p>
          <ul>
            {% for bullet in job.bullets %}
              <li>{{ bullet }}</li>
            {% endfor %}
          </ul>
        </div>
      </article>
    {% endfor %}
  </div>
</section>

<section class="section section--split" aria-labelledby="education-heading">
  <div>
    <p class="eyebrow">Education and Development</p>
    <h2 id="education-heading">Professional development</h2>
  </div>
  <div class="focus-list">
    <span>Microsoft AI Skills Fest - June 2026</span>
    <span>Esri Developer Summit - Palm Springs, California - March 2018</span>
    <span>Western Governors University - Web Development coursework - 2012-2013</span>
    <span>National Geospatial-Intelligence College - Geographic Information Sciences - 2000</span>
  </div>
</section>

<section class="section section--tight" aria-labelledby="reference-heading">
  <div class="callout">
    <p class="eyebrow">Public Reference</p>
    <h2 id="reference-heading">GeoBase Mission Command System</h2>
    <p>Selected public reference from earlier mission-focused geospatial work.</p>
    <a class="button button--secondary" href="https://www.dvidshub.net/news/195988/pacaf-utilizes-geobase-program">Read the article</a>
  </div>
</section>
