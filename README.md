[Portfolio Home: Joseph C. Dillard Geospatial Project Stack](https://josephdillard.github.io/JosephDillard/)

This repository now includes a GitHub Pages / Jekyll portfolio site for job search visibility, with pages for resume sections, project/repo explanations, architecture diagrams, function screenshots, skills, and contact information. Existing resume files and profile README content remain in place.

Screenshot documentation: [Project screenshots](https://josephdillard.github.io/JosephDillard/screenshots/)

Architecture diagrams: [Development and Docker network views](https://josephdillard.github.io/JosephDillard/architecture/)

[Link to Download My Resume: GIS Solution Architect 2026](https://github.com/JosephDillard/JosephDillard/raw/refs/heads/main/Joseph_Dillard_Enterprise_GIS_Architect_Resume_V7.pdf)


## Geospatial / GeoAI Project Stack

I am building a connected geospatial and GeoAI project stack around a practical operational workflow: check incoming customer data, process imagery or vector data, load accepted layers into spatial services, refresh a live map, and let an analyst use map-aware assistant tools without hiding how the system works. Each repo can be used or extended by itself, but together they show a full path from data handoff to operational map use.

Plain-English flow: the ETL toolkit checks files before they are trusted, the GeoAI platform can turn imagery into GIS-ready detections, the data gateway moves accepted data into PostGIS and announces refresh events, the Status Board displays the operational map through GeoServer/MapLibre, and the MCP/incident analyst projects add explainable map commands and location context.

### GeoAI Asset Detection Platform

A Python-based GeoAI workflow platform for turning imagery into GIS-ready detection output. It is aimed at workflows such as road or asset detection, where a user or developer needs more than a model result: they need tiles, vectors, files, API status, and a path into PostGIS or a map.

How it works: FastAPI exposes workflow endpoints, Python handles raster/vector processing, model steps can run through PyTorch/ONNX-style inference, and GeoPandas-style output can be written as GeoPackage or loaded into PostGIS. The basic flow is imagery input, tile/chip preparation, model inference, vectorization, export, then optional database load.

How it fits: this repo produces or prepares spatial intelligence that can be loaded by the data gateway, published through PostGIS/GeoServer, and reviewed in the Status Board map.

Links: [Repo](https://github.com/JosephDillard/geoai-asset-detection-platform) · [README](https://github.com/JosephDillard/geoai-asset-detection-platform/blob/main/README.md)

Keywords: GeoAI, computer vision, semantic segmentation, PostGIS, GeoPackage, COG, PyTorch, ONNX, GeoPandas

### Geospatial Status Board

A Grails-based operational map and dashboard for incidents, infrastructure, GeoAI layers, response support, weather context, MGRS workflows, and assistant-driven map tasks. It is the place where the backend pieces become visible to an analyst, operator, or developer.

How it works: the app runs as a Grails web application, uses H2 for the simplest local development path, and can optionally connect to PostGIS and GeoServer. MapLibre renders the browser map, GeoServer can provide WFS/WMS layers, and the app includes tools for layer control, MGRS, drawing, incident plotting, GeoAI requests, Wiki/GeoNames lookup, OpenStreetMap response support, and a reviewed Map Assistant prompt flow.

How it fits: this is the visualization layer for the stack. It consumes spatial services, receives gateway refresh events, and hosts the shared map surface that can call GeoAI, incident, support, and assistant workflows.

Links: [Repo](https://github.com/JosephDillard/geospatial-status-board) · [README](https://github.com/JosephDillard/geospatial-status-board/blob/master/README.md) · [Architecture](https://github.com/JosephDillard/geospatial-status-board/blob/master/docs/geospatial-architecture.md) 

Keywords: Grails, MapLibre, GeoServer, PostGIS, WFS, dashboard, incident mapping, SignalR, MGRS, response support, map command assistant

### Geospatial Data Gateway

A .NET and Python data gateway for moving accepted geospatial data into a live mapping environment. It focuses on the part of the system that often gets hand-waved: registering datasets, tracking ingest jobs, loading spatial data, and telling map clients when a layer should refresh.

How it works: ASP.NET Core provides the API surface, Python worker logic handles file-oriented geospatial processing, PostGIS stores loaded spatial tables, and SignalR-style events notify browser clients that a layer changed. The basic flow is dataset registration, ingest job creation, file validation/load, PostGIS write, then a refresh event to the map.

How it fits: this repo acts as the ingestion and notification layer between validated handoff data and the Status Board map.

Links: [Repo](https://github.com/JosephDillard/geospatial-data-gateway) · [README](https://github.com/JosephDillard/geospatial-data-gateway/blob/master/README.md) 

Keywords: .NET, ASP.NET Core, SignalR, Python, PostGIS, GeoJSON, Shapefile, GeoPackage, CSV, real-time mapping

### Geospatial MCP Services

A Docker-ready Model Context Protocol services repo for geospatial assistant tools. It gives an AI client or MCP-aware host a controlled way to ask map-related questions without giving the model direct access to the whole application.

How it works: MCP servers expose named tools over stdio. One tool path enriches a latitude/longitude with GeoNames and Wikipedia context. Another incident-analysis path uses selected coordinates and incident data to return nearby incidents, risk context, recommended actions, summaries, and search links. MCP is the tool protocol; the tools can still call normal APIs internally.

How it fits: this repo adds the assistant/tool layer around the map experience while keeping the MCP transport and the internal API calls understandable.

Links: [Repo](https://github.com/JosephDillard/geospatial-mcp-services) · [README](https://github.com/JosephDillard/geospatial-mcp-services/blob/master/README.md) · [GeoNames/Wikipedia MCP](https://github.com/JosephDillard/geospatial-mcp-services/tree/master/servers/geonames_wikipedia) · [Incident Analyst MCP](https://github.com/JosephDillard/geospatial-mcp-services/tree/master/servers/incident_analyst)

Keywords: MCP, Docker, GeoNames, Wikipedia, incident analysis, map click, geospatial context, tool calling, LLM tools, stdio

### Geospatial ETL Validation Toolkit

Python validation toolkit for checking incoming geospatial files before they are loaded into PostGIS, published through GeoServer, or handed to an application team. The purpose is to catch bad CRS, missing fields, invalid values, geometry problems, and raster-readiness issues before they become map or database problems.

How it works: GeoPandas or Pyogrio can read vector formats such as GeoPackage and Shapefile, raster metadata checks inspect GeoTIFF/COG readiness, configurable rule files define required fields and allowed domain values, and report writers produce batch summaries for customer handoffs. The basic flow is read file, inspect schema/geometry/metadata, apply rules, summarize pass/fail status, then optionally load accepted data into PostGIS.

How it fits: this repo is the data-quality gate before the data gateway loads a layer or before the Status Board depends on it.

Links: [Repo](https://github.com/JosephDillard/geospatial-etl-validation-toolkit) · [README](https://github.com/JosephDillard/geospatial-etl-validation-toolkit/blob/main/README.md)

Keywords: Python, GeoPandas, Pyogrio, PostGIS, GeoPackage, Shapefile, GeoTIFF, COG readiness, data QA, batch reporting

### Map-to-AI Incident Analyst

A user-facing MapLibre incident review and bridge demo for northern New Mexico. It focuses on analyst workflows such as viewing incidents, understanding why an incident is high risk, searching response support, working with MGRS coordinates, and packaging map context for assistant analysis.

How it works: the map uses MapLibre for the browser view, incident data is scored with deterministic rules such as severity, significant-event flag, operational impact, and nearby critical assets, and support lookups use OpenStreetMap-style POI results with local fallback behavior. The assistant boundary is intentionally reviewed: natural-language prompts become structured, allow-listed actions before anything changes on the map.

How it fits: this is the focused incident-analysis workflow that can be folded into the Status Board shared map and supported by the MCP services.

Links: [Incident Analyst MCP](https://github.com/JosephDillard/geospatial-mcp-services/tree/master/servers/incident_analyst) · [Status Board Architecture](https://github.com/JosephDillard/geospatial-status-board/blob/master/docs/geospatial-architecture.md)

Publication note: the standalone bridge/demo repo is currently a local checkout without a public GitHub remote, so the public site links to the related MCP and status-board architecture until that repo is published.

Keywords: MapLibre, MCP bridge, incident review, MGRS, OpenStreetMap, response support, risk scoring, prompt-to-action roadmap

---
## GIS Architecture, Development & GeoAI References


## Esri Architecture / Enterprise GIS

| Link | Notes |
|---|---|
| [ArcGIS Architecture Center](https://architecture.arcgis.com/) | Esri’s main architecture reference for ArcGIS system patterns, deployment models, reliability, security, and performance planning. |
| [ArcGIS Well-Architected Framework Blog](https://www.esri.com/arcgis-blog/products/arcgis/announcements/arcgis-well-architected-framework-and-architecture-center) | Overview of Esri’s architecture framework and Architecture Center. |
| [ArcGIS Enterprise System Architecture Best Practices](https://doc.esri.com/en/arcgis-enterprise/latest/plan/best-practices-for-system-architecture.html) | Key planning guidance for ArcGIS Enterprise topology, colocation, load balancing, environment isolation, workload separation, and content delivery. |
| [ArcGIS Enterprise Documentation](https://enterprise.arcgis.com/en/documentation/) | Main documentation landing page for Enterprise administration, deployment, Portal, Server, Data Store, and Web Adaptors. |
| [ArcGIS Enterprise: Architecting Your Deployment PDF](https://www.esri.com/content/dam/esrisites/en-us/media/technical-papers/arcgis-enterprise-architecting-your-deployment.pdf) | Useful architecture whitepaper for planning Enterprise deployments, scaling, and component layout. |
| [ArcGIS Enterprise SDK](https://developers.arcgis.com/enterprise-sdk/) | SDK for extending ArcGIS Enterprise services using SOEs, SOIs, service interceptors, and custom data feeds. |
| [ArcGIS Enterprise Security Best Practices](https://enterprise.arcgis.com/en/server/latest/administer/linux/best-practices-for-configuring-a-secure-environment.htm) | Hardening reference for certificates, tokens, permissions, services directory, standardized queries, and access controls. |

---

## Esri Development / Automation

| Link | Notes |
|---|---|
| [Esri Developer Documentation](https://developers.arcgis.com/documentation/) | Main landing page for ArcGIS developer APIs, SDKs, services, and location platform documentation. |
| [ArcGIS Maps SDK for JavaScript](https://developers.arcgis.com/javascript/latest/) | Primary SDK for custom 2D/3D web mapping apps, feature layers, map services, widgets/components, and web GIS integration. |
| [ArcGIS API for Python](https://developers.arcgis.com/python/latest/) | Python automation for ArcGIS Online / Enterprise administration, content management, publishing, analysis, spatial data science, and notebooks. |
| [ArcGIS REST APIs](https://developers.arcgis.com/rest/) | Core reference for Feature Services, Map Services, Image Services, Portal, Server Admin, replicas, sync, tokens, and service automation. |
| [Feature Service REST API](https://developers.arcgis.com/rest/services-reference/enterprise/feature-service/) | Important for editing/querying feature layers, tables, sync workflows, replicas, hosted layers, and enterprise feature services. |
| [ArcGIS API for Python Samples](https://developers.arcgis.com/python/latest/samples/) | Notebook examples for administration, deep learning, content cloning, analysis, imagery, and automation workflows. |
| [Esri GitHub](https://github.com/Esri) | Esri sample code, SDK examples, open-source utilities, and developer resources. |
| [ArcGIS Python API GitHub](https://github.com/Esri/arcgis-python-api) | Source repository and samples for ArcGIS API for Python. |
| [ArcGIS Maps SDK for JavaScript Resources](https://github.com/Esri/jsapi-resources) | JavaScript SDK templates and examples for modern front-end frameworks. |

---

## Esri GeoAI / AI

| Link | Notes |
|---|---|
| [Esri GeoAI Overview](https://www.esri.com/en-us/capabilities/geoai/overview) | Esri overview of GeoAI for extracting, classifying, detecting, predicting, and analyzing spatial patterns. |
| [GeoAI in ArcGIS Pro](https://doc.esri.com/en/arcgis-pro/latest/help/analysis/ai/geoai.html) | ArcGIS Pro GeoAI concepts: imagery AI, feature/tabular ML, text analysis, prediction, classification, object detection, and spatial AI. |
| [ArcGIS Pro GeoAI Toolbox](https://doc.esri.com/en/arcgis-pro/latest/tool-reference/geoai/an-overview-of-the-geoai-toolbox.html) | Tool reference for using/training AI models against geospatial, tabular, imagery, text, and embedding data. |
| [ArcGIS API for Python Deep Learning Setup](https://developers.arcgis.com/python/latest/guide/install-and-set-up/deep-learning/) | Deep learning dependency setup for ArcGIS API for Python. |
| [Esri Deep Learning Frameworks](https://github.com/Esri/deep-learning-frameworks) | Esri deep learning framework installers for ArcGIS Pro / ArcGIS Python environments. |
| [ArcGIS Python Deep Learning Samples](https://developers.arcgis.com/python/latest/samples/) | Examples for object detection, feature extraction, imagery classification, and model deployment with ArcGIS. |
| [Use Third-Party Language Models with ArcGIS](https://developers.arcgis.com/python/latest/guide/use-third-party-language-models-with-arcgis/) | Reference for integrating third-party LLMs with ArcGIS GeoAI text analysis workflows. |
| [Agentic Mapping Apps with ArcGIS Maps SDK for JavaScript](https://developers.arcgis.com/javascript/latest/agentic-apps/ai-introduction/) | AI-driven / natural-language mapping application patterns using ArcGIS Maps SDK components. |

---

## Open Source GIS Foundations

| Link | Notes |
|---|---|
| [OSGeo](https://www.osgeo.org/) | Open Source Geospatial Foundation; major hub for open geospatial projects, standards, and community software. |
| [OSGeo Projects](https://www.osgeo.org/projects/) | Directory of OSGeo and community geospatial projects. |
| [QGIS](https://qgis.org/) | Open-source desktop GIS for cartography, editing, analysis, plugins, processing models, and spatial data workflows. |
| [QGIS Documentation](https://docs.qgis.org/latest/en/docs/) | Official QGIS user manual, training manual, server docs, and processing documentation. |
| [PyQGIS API](https://qgis.org/pyqgis/) | Python API for automating and extending QGIS. |
| [GeoServer](https://geoserver.org/) | Java-based open-source server for publishing geospatial data with OGC services such as WMS, WFS, WCS, WMTS, and OGC API support. |
| [GeoServer User Manual](https://docs.geoserver.org/main/en/user/) | GeoServer installation, data publishing, styling, REST API, security, GeoWebCache, and production configuration. |
| [PostGIS](https://postgis.net/) | Spatial extension for PostgreSQL; core open-source spatial database technology for storing, indexing, and querying geometry/geography data. |
| [PostGIS Documentation](https://postgis.net/documentation/) | Official PostGIS manuals, reference docs, tips, and training materials. |
| [GDAL](https://gdal.org/) | Core raster/vector translation and processing library used across much of the GIS ecosystem. |
| [PROJ](https://proj.org/) | Coordinate transformation and CRS engine used by many GIS tools. |

---

## Open Source Python GIS / Spatial Data Engineering

| Link | Notes |
|---|---|
| [GeoPandas](https://geopandas.org/) | Python library that extends pandas with geospatial data types and spatial operations. |
| [GeoPandas GitHub](https://github.com/geopandas/geopandas) | Source repository for GeoPandas. |
| [Shapely](https://shapely.readthedocs.io/) | Python geometry operations library built on GEOS; used heavily with GeoPandas. |
| [PyProj](https://pyproj4.github.io/pyproj/stable/) | Python interface to PROJ for coordinate transformations. |
| [Rasterio](https://rasterio.readthedocs.io/) | Python library for reading/writing raster data using GDAL concepts with a Pythonic API. |
| [Fiona](https://fiona.readthedocs.io/) | Python library for reading/writing vector data using GDAL/OGR. |
| [Pyogrio](https://pyogrio.readthedocs.io/) | Fast vector I/O library used by modern GeoPandas workflows. |
| [Xarray](https://docs.xarray.dev/) | Useful for multidimensional raster, climate, temporal, and array-based geospatial datasets. |
| [Dask](https://www.dask.org/) | Parallel/distributed Python compute; useful for large raster and GeoAI processing pipelines. |

---

## Open Source Web GIS / APIs

| Link | Notes |
|---|---|
| [MapLibre GL JS](https://maplibre.org/maplibre-gl-js/docs/) | Open-source WebGL vector tile mapping library for interactive browser maps. |
| [OpenLayers](https://openlayers.org/) | Feature-rich open-source JavaScript mapping library for web GIS applications. |
| [Leaflet](https://leafletjs.com/) | Lightweight open-source JavaScript library for mobile-friendly interactive maps. |
| [pygeoapi](https://pygeoapi.io/) | Python implementation of OGC API standards for publishing geospatial data through RESTful APIs. |
| [OGC API Standards](https://ogcapi.ogc.org/) | Modern REST-style standards for geospatial features, tiles, maps, records, processes, and coverages. |
| [OpenMapTiles](https://openmaptiles.org/) | Open-source tooling and schema for vector tiles and basemap generation. |
| [Martin Tile Server](https://maplibre.org/martin/) | Fast vector tile server for PostGIS, MBTiles, and PMTiles. |
| [PMTiles](https://docs.protomaps.com/pmtiles/) | Single-file cloud-friendly archive format for tiled map data. |

---

## Open Source GeoAI / Remote Sensing AI

| Link | Notes |
|---|---|
| [TorchGeo](https://docs.torchgeo.org/) | PyTorch domain library for geospatial datasets, samplers, transforms, and pretrained models. |
| [TorchGeo GitHub](https://github.com/torchgeo/torchgeo) | Source repository for TorchGeo. |
| [Raster Vision](https://rastervision.io/) | Open-source geospatial deep learning framework for chip classification, object detection, and semantic segmentation. |
| [Raster Vision GitHub](https://github.com/azavea/raster-vision) | Source repository for Raster Vision. |
| [Segment Anything Model - SAM](https://github.com/facebookresearch/segment-anything) | General segmentation model that can be adapted for geospatial imagery workflows. |
| [Prithvi Geospatial AI Foundation Model](https://huggingface.co/ibm-nasa-geospatial/Prithvi-100M) | NASA/IBM geospatial foundation model for Earth observation use cases. |
| [Hugging Face Geospatial Models](https://huggingface.co/models?pipeline_tag=image-segmentation&sort=trending&search=geospatial) | Searchable model hub for geospatial, imagery, segmentation, and remote sensing models. |
| [Microsoft Planetary Computer](https://planetarycomputer.microsoft.com/) | Cloud-hosted planetary-scale geospatial data catalog and APIs. |
| [Google Earth Engine](https://earthengine.google.com/) | Planetary-scale remote sensing analysis platform. |

---

## Cloud-Native Geospatial / Imagery Standards

| Link | Notes |
|---|---|
| [STAC Specification](https://stacspec.org/) | SpatioTemporal Asset Catalog standard for describing and indexing imagery, rasters, point clouds, and other spatiotemporal assets. |
| [STAC GitHub](https://github.com/radiantearth/stac-spec) | Source repository for the STAC specification. |
| [Cloud Optimized GeoTIFF](https://www.cogeo.org/) | Cloud-native GeoTIFF layout optimized for HTTP range requests and scalable raster access. |
| [TiTiler](https://developmentseed.org/titiler/) | FastAPI-based dynamic tile server for COG, STAC, MosaicJSON, and cloud-hosted raster data. |
| [COG Validator](https://github.com/rouault/cog_validator) | Utility for validating Cloud Optimized GeoTIFF structure. |
| [Zarr](https://zarr.dev/) | Chunked array storage format useful for multidimensional scientific and raster data. |
| [Kerchunk](https://fsspec.github.io/kerchunk/) | Reference-based access to large scientific datasets without converting entire files. |

---

## Topics I Track

- Enterprise GIS architecture and ArcGIS Enterprise deployment patterns
- ArcGIS Server, Portal, Data Store, Web Adaptors, load balancing, and high availability
- Feature services, map services, image services, replicas, sync, and offline workflows
- ArcGIS REST API automation and Python-based administration
- GeoAI for imagery classification, object detection, segmentation, feature extraction, and predictive analysis
- Open-source GIS stacks using QGIS, GeoServer, PostGIS, GDAL, GeoPandas, and MapLibre
- Cloud-native geospatial formats: COG, STAC, PMTiles, Zarr
- Utility GIS, mobile GIS, enterprise geodatabases, and spatial data engineering

<!---
JosephDillard/JosephDillard is a ✨ special ✨ repository because its `README.md` (this file) appears on your GitHub profile.
You can click the Preview link to take a look at your changes.
--->
