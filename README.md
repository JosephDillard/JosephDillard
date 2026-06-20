
[Portfolio Site: Enterprise GIS & Azure Solution Architect](https://josephdillard.github.io/JosephDillard/)

This repository now includes a GitHub Pages / Jekyll portfolio site for job search visibility, with pages for projects, skills, resume highlights, and contact information. Existing resume files and profile README content remain in place.

Screenshot documentation: [Project screenshots](https://josephdillard.github.io/JosephDillard/screenshots/)

[Link to Download My Resume: GIS Solution Architect 2026](https://github.com/JosephDillard/JosephDillard/raw/refs/heads/main/Joseph_Dillard_Enterprise_GIS_Architect_Resume_V7.pdf)


## Geospatial / GeoAI Project Stack

I am building a connected geospatial and GeoAI project stack focused on map-based operations, PostGIS-backed data workflows, real-time map updates, data readiness, and AI-assisted spatial context. These repositories are designed to work together: the ETL toolkit validates incoming data, the GeoAI platform produces spatial intelligence, the data gateway loads and streams geospatial data, the status board visualizes it, and the MCP/incident analyst projects add map-aware assistant tools.

### GeoAI Asset Detection Platform

A Python-based GeoAI workflow platform for detecting and processing geospatial assets from imagery and vector data. It focuses on repeatable model workflows, REST execution, PostGIS loading, and geospatial output formats that can feed operational mapping systems.

How it fits: this repo can generate or prepare geospatial intelligence that flows into the data gateway, lands in PostGIS, and is visualized in the status board.

Links: [Repo](https://github.com/JosephDillard/geoai-asset-detection-platform) · [README](https://github.com/JosephDillard/geoai-asset-detection-platform/blob/main/README.md)

Keywords: GeoAI, computer vision, semantic segmentation, PostGIS, GeoPackage, COG, PyTorch, ONNX, GeoPandas

### Geospatial Status Board

A Grails-based operational map viewer for geospatial status, incidents, infrastructure, response support, and live map layers. It uses a local GIS stack with PostGIS, GeoServer, and MapLibre to provide a browser-based map experience.

How it fits: this is the visualization layer for the stack. It consumes spatial services from the local GIS environment, receives live refresh events from the data gateway, and hosts the shared map tools used by the Incident Analyst route.

Links: [Repo](https://github.com/JosephDillard/geospatial-status-board) · [README](https://github.com/JosephDillard/geospatial-status-board/blob/master/README.md) · [Architecture](https://github.com/JosephDillard/geospatial-status-board/blob/master/docs/geospatial-architecture.md) 

Keywords: Grails, MapLibre, GeoServer, PostGIS, WFS, dashboard, incident mapping, SignalR, MGRS, response support, map command assistant

### Geospatial Data Gateway

A .NET and Python data gateway for loading geospatial files into PostGIS and notifying downstream map clients when layers change. It is designed as the bridge between raw spatial data, database storage, and live web map refreshes.

How it fits: this repo acts as the ingestion and streaming layer. It can receive data, load it into PostGIS, and send SignalR events that the status board can use to refresh map layers.

Links: [Repo](https://github.com/JosephDillard/geospatial-data-gateway) · [README](https://github.com/JosephDillard/geospatial-data-gateway/blob/master/README.md) 

Keywords: .NET, ASP.NET Core, SignalR, Python, PostGIS, GeoJSON, Shapefile, GeoPackage, CSV, real-time mapping

### Geospatial MCP Services

A Docker-ready Model Context Protocol services repo for geospatial assistant tools. It includes GeoNames/Wikipedia point exploration and deterministic incident analysis for selected map coordinates.

How it fits: this repo adds AI-assistant tooling around the map experience. It defines MCP tools that can enrich locations with names, nearby places, incident context, risk scoring, recommended actions, summaries, and search links.

Links: [Repo](https://github.com/JosephDillard/geospatial-mcp-services) · [README](https://github.com/JosephDillard/geospatial-mcp-services/blob/master/README.md) · [GeoNames/Wikipedia MCP](https://github.com/JosephDillard/geospatial-mcp-services/tree/master/servers/geonames_wikipedia) · [Incident Analyst MCP](https://github.com/JosephDillard/geospatial-mcp-services/tree/master/servers/incident_analyst)

Keywords: MCP, Docker, GeoNames, Wikipedia, incident analysis, map click, geospatial context, tool calling, LLM tools, stdio

### Geospatial ETL Validation Toolkit

Python validation toolkit for incoming geospatial files before they are loaded into PostGIS, published through GeoServer, or handed to application teams. It validates GeoJSON, CSV, GeoPackage, Shapefile, and GeoTIFF inputs; applies required-field and domain checks; and generates readiness reports.

How it fits: this repo is the data-quality gate for the stack. It can validate customer handoff data before the data gateway loads it or before the status board depends on it.

Links: [Repo](https://github.com/JosephDillard/geospatial-etl-validation-toolkit) · [README](https://github.com/JosephDillard/geospatial-etl-validation-toolkit/blob/main/README.md)

Keywords: Python, GeoPandas, Pyogrio, PostGIS, GeoPackage, Shapefile, GeoTIFF, COG readiness, data QA, batch reporting

### Map-to-AI Incident Analyst

A reviewer-friendly MapLibre incident review and bridge demo for northern New Mexico. It shows risk scoring, MGRS tools, response-support lookup, and the boundary between operational map behavior and MCP-backed incident context.

How it fits: this repo proves the focused incident-analysis workflow that the status board can call from its shared map. It is also a stepping stone toward an OpenCLAW-style map command assistant where natural-language prompts become reviewed, allow-listed map actions.

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
