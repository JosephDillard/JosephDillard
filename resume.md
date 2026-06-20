---
title: Resume
description: Resume highlights for Joseph C. Dillard, Enterprise GIS Architect, Cloud Solution Architect, and Full-Stack GIS Developer.
permalink: /resume/
body_class: resume-page
---

<section class="page-hero">
  <p class="eyebrow">Resume</p>
  <h1>Enterprise GIS Architect, Cloud Solution Architect, and Full-Stack GIS Developer.</h1>
  <p>Enterprise GIS Architect, cloud/hybrid solution architect, and full-stack GIS developer with 25+ years of geospatial experience, 20+ years designing and operating Enterprise GIS platforms, and 9+ years of Java/GIS web development.</p>
  <div class="hero__actions">
    <a class="button button--primary" href="{{ site.resume.pdf | relative_url }}">Download V7 PDF</a>
    <a class="button button--secondary" href="mailto:{{ site.author.email }}">Email me</a>
    <a class="button button--secondary" href="{{ '/projects/' | relative_url }}">View repo evidence</a>
  </div>
</section>

<section class="section section--no-top" aria-labelledby="summary-heading">
  <div class="resume-summary" id="summary-heading">
    <p>Deep background in ArcGIS Enterprise, ArcGIS Server, Portal for ArcGIS, ArcGIS Pro, ArcSDE, enterprise geodatabases, PostgreSQL/PostGIS, Oracle Spatial, data integration, mission systems, utility GIS, and high-availability geospatial services. Azure Solutions Architect Expert with AZ-305 and AZ-104 credentials, Security+ CE, AWS working knowledge, and hands-on experience across Windows, Linux, virtualized, containerized, and hybrid infrastructure.</p>
  </div>
</section>

<section class="section section--split" aria-labelledby="target-heading">
  <div>
    <p class="eyebrow">Target Role Positioning</p>
    <h2 id="target-heading">Best-fit roles</h2>
    <p>The strongest fit is a role where customer workflows, geospatial platforms, infrastructure, databases, applications, testing, and production support all have to be connected.</p>
  </div>
  <div class="focus-list">
    <span>Enterprise GIS / ArcGIS Enterprise architecture for defense, utility, and enterprise customers</span>
    <span>Open-source Enterprise GIS architecture with GeoServer, PostGIS, QGIS, and GIS server evaluation</span>
    <span>Cloud and hybrid infrastructure design with Azure certification and AWS working knowledge</span>
    <span>Full-stack GIS application delivery across backend APIs, web applications, spatial services, and databases</span>
    <span>Spatial database, geospatial ETL, and data readiness leadership</span>
  </div>
</section>

<section class="section section--split" aria-labelledby="diff-heading">
  <div>
    <p class="eyebrow">Differentiators</p>
    <h2 id="diff-heading">What I add to a team.</h2>
  </div>
  <div class="focus-list">
    <span>Utility GIS, ArcGIS Utility Network, mobile GIS workflows, field usability, testing, and customer enablement</span>
    <span>Mission systems, situational awareness, common operating picture dashboards, maps, and operational workflows</span>
    <span>Customer discovery, requirements shaping, MVP planning, release coordination, mentoring, and low-ego team execution</span>
    <span>GeoAI-aware architect/developer with enough AI exposure to identify use cases, prototype, and collaborate with ML specialists</span>
  </div>
</section>

<section class="section section--tight" aria-labelledby="cert-heading">
  <div class="section__header">
    <p class="eyebrow">Certifications</p>
    <h2 id="cert-heading">Current credentials and architecture focus.</h2>
  </div>
  <div class="focus-list focus-list--columns">
    <span>Microsoft Certified: Azure Solutions Architect Expert</span>
    <span>AZ-305 - Designing Microsoft Azure Infrastructure Solutions</span>
    <span>AZ-104 - Azure Administrator Associate</span>
    <span>CompTIA Security+ CE - current DoD 8570-aligned certification</span>
  </div>
</section>

<section class="section" aria-labelledby="skills-heading">
  <div class="section__header">
    <p class="eyebrow">Technical Skills / Keyword Matrix</p>
    <h2 id="skills-heading">Enterprise GIS, cloud, data, development, integration, and delivery.</h2>
    <p>This section mirrors the resume keyword matrix so the site is useful to both human reviewers and keyword-driven screening.</p>
  </div>
  <div class="skill-grid">
    {% for skill_group in site.data.skills %}
      <article class="skill-card">
        <h3>{{ skill_group.group }}</h3>
        <div class="tag-list">
          {% for item in skill_group.items %}
            <span>{{ item }}</span>
          {% endfor %}
        </div>
      </article>
    {% endfor %}
  </div>
</section>

<section class="section" aria-labelledby="experience-heading">
  <div class="section__header">
    <p class="eyebrow">Professional Experience</p>
    <h2 id="experience-heading">Resume experience details.</h2>
  </div>

  <div class="timeline">
    {% for job in site.data.experience %}
      <article class="timeline-item">
        <div class="timeline-item__meta">
          <span>{{ job.dates }}</span>
        </div>
        <div class="timeline-item__body">
          <h3>{{ job.title }}</h3>
          <p class="timeline-item__org">{{ job.organization }}{% if job.location %} - {{ job.location }}{% endif %}</p>
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

<section class="section" aria-labelledby="highlights-heading">
  <div class="section__header">
    <p class="eyebrow">Selected Architecture, Development, And Delivery Highlights</p>
    <h2 id="highlights-heading">The through-line across the resume.</h2>
  </div>
  <div class="highlight-grid">
    <article class="callout">
      <h3>Enterprise GIS platform architecture</h3>
      <p>Designed, modernized, and operated ArcGIS-based and open-source GIS platforms that integrated infrastructure, GIS services, databases, custom applications, dashboards, maps, and support processes.</p>
    </article>
    <article class="callout">
      <h3>Full-stack GIS delivery</h3>
      <p>Able to move between requirements, data modeling, backend/API design, TypeScript/Angular front-end GIS behavior, service integration, testing, deployment, and production troubleshooting.</p>
    </article>
    <article class="callout">
      <h3>High-load operational reliability</h3>
      <p>Planned capacity and service resilience for major use events and sustained mission periods where outages would affect staff workflows and decision timelines.</p>
    </article>
    <article class="callout">
      <h3>Geospatial data integration</h3>
      <p>Built repeatable ingestion patterns across GeoJSON, Oracle Spatial, PostGIS, ArcGIS services, Apache NiFi, Apache Kafka, ArcGIS GeoEvent Server, GeoPandas, APIs, and automated pipeline tooling.</p>
    </article>
    <article class="callout">
      <h3>Open-source Enterprise GIS architecture</h3>
      <p>Evaluated and configured GeoServer/open-source GIS server patterns alongside Esri architecture for mission and research environments.</p>
    </article>
    <article class="callout">
      <h3>Utility/mobile GIS readiness</h3>
      <p>Assessed ArcGIS Enterprise services, Utility Network data, PostGIS environments, mobile consumption patterns, testing procedures, and customer workflow fit for field applications.</p>
    </article>
    <article class="callout">
      <h3>Cloud and hybrid architecture</h3>
      <p>Combines certified Azure architecture/admin knowledge, AWS working knowledge, virtualization, containerization, Windows/Linux server administration, and Enterprise GIS hosting experience.</p>
    </article>
    <article class="callout">
      <h3>GeoAI-aware engineering</h3>
      <p>Comfortable identifying practical GeoAI/AI use cases, preparing geospatial data for analytics, using AI-assisted development, and collaborating with ML/data specialists while keeping implementation grounded in proven GIS architecture.</p>
    </article>
    <article class="callout">
      <h3>Customer/stakeholder translation</h3>
      <p>Regularly converted vague operational goals into technical scope, workflow designs, MVPs, service patterns, training, and deployable software or GIS service capabilities.</p>
    </article>
  </div>
</section>

<section class="section section--split" aria-labelledby="education-heading">
  <div>
    <p class="eyebrow">Education And Professional Development</p>
    <h2 id="education-heading">Recent learning and geospatial foundation.</h2>
  </div>
  <div class="focus-list">
    <span>Microsoft AI Skills Fest - June 2026</span>
    <span>Esri Developer Summit - Palm Springs, California - March 2018</span>
    <span>Western Governors University - Web Development coursework - 2012-2013</span>
    <span>National Geospatial-Intelligence College - Geographic Information Sciences - 2000</span>
    <span>U.S. Army Veteran with GEOINT, imagery, terrain analysis, cartography, map production, QA, and operational geospatial support background</span>
  </div>
</section>

<section class="section section--tight" aria-labelledby="reference-heading">
  <div class="callout">
    <p class="eyebrow">Selected Public Reference</p>
    <h2 id="reference-heading">GeoBase Mission Command System</h2>
    <p>Public reference from earlier mission-focused geospatial work, alongside this GitHub Pages portfolio and companion repositories.</p>
    <div class="text-links">
      <a href="https://www.dvidshub.net/news/195988/pacaf-utilizes-geobase-program">Read the article</a>
      <a href="{{ '/projects/' | relative_url }}">View project evidence</a>
    </div>
  </div>
</section>

<section class="section section--tight" aria-labelledby="keyword-heading">
  <div class="section__header">
    <p class="eyebrow">ATS Keyword Index</p>
    <h2 id="keyword-heading">Primary resume keywords.</h2>
  </div>
  <p class="keyword-cloud">Enterprise GIS, GIS Architect, GIS Solutions Architect, GIS Developer, Geospatial Platform Architect, Solution Architect, Staff-Level Technical Leader, Open Source Enterprise GIS Architecture, ArcGIS Enterprise, ArcGIS Server, Portal for ArcGIS, ArcGIS Pro, ArcSDE, ArcIMS, ArcGIS JS API, ArcGIS GeoEvent Server, Utility Network, QGIS, GeoServer, GeoPandas, PostgreSQL, PostGIS, Oracle Spatial, MySQL, SQL, PL/SQL, GeoJSON, geospatial ETL, Apache NiFi, Apache Kafka, data pipelines, data readiness, mobile GIS, common operating picture, situational awareness, dashboards, mission planning, GEOINT, Azure, Azure Solutions Architect, AZ-305, AZ-104, AWS, Docker, Windows Server, Linux, VMware vSphere, Hyper-V, Apache Tomcat, Java, JavaScript, TypeScript, Angular, Node.js, Python, C#, Spring Boot, Spring Security, Grails, Hibernate, REST, SOAP, HTML, CSS, GitHub, Jira, Confluence, Agile, Scrum, CI/CD, JMeter, RMF, Security+ CE, DoD 8570, Azure AI, GeoAI, and AI-assisted development.</p>
</section>
