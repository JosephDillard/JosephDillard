## MY RANDOM NOTES

1) ArcGIS System Design
* System Design Strategies - http://www.wiki.gis.com/wiki/index.php/System_Design_Strategies
* ArcGIS Capacity Planning Tool Updates - http://www.wiki.gis.com/wiki/index.php/Capacity_Planning_Tool_updates
* ArcGIS Capacity Planning Tool - Dave Peters has Retired - Unkown if anyone else will take up his efforts on this. 
* ArcGIS Architecture Series: Tools of an Architect - https://community.esri.com/t5/implementing-arcgis-questions/arcgis-architecture-series-tools-of-an-architect/td-p/22626

a. Questions before design
* What types of data? 
* How many records are in the vector data that will be stored in the database?
* Data pulled into the systems? GIS systems or non GIS data? ETL?
* What kind of users will use this system - ArcGIS Editors in Pro or Desktop? End user are mostly non-GIS users mostly consuming information? Both?
* What types of app or functions will be built to use the system. 
* How much downtime is acceptable? 
* High available? Active - Active or Active - Passive - Two duplicate systems can be use to also increase the amount of users servers but will require twice the license as Active Passive. 
* Geographically distributed system?



2) ArcGIS on AWS 
* ArcGIS Enterprise in the cloud - https://enterprise.arcgis.com/en/server/latest/cloud/amazon/what-is-arcgis-server-on-aws.htm
* Deploying ArcGIS Enterprise in Amazon Web Services - https://www.youtube.com/watch?v=oXJknnFuKeY&ab_channel=EsriEvents

3) Load Balancing
* Layer 4 - https://www.nginx.com/resources/glossary/layer-4-load-balancing/
* Layer 7 - https://www.nginx.com/resources/glossary/layer-7-load-balancing/
* Vertical and Horizontal Scaling Explained - https://www.ibm.com/blogs/cloud-computing/2014/04/09/explain-vertical-horizontal-scaling-cloud/

4) AWS Scaling
* AWS Auto Scaling - https://aws.amazon.com/autoscaling/






5) Latency numbers every programmer should know - https://en.wikipedia.org/wiki/Power_of_two

Latency Comparison Numbers
--------------------------
L1 cache reference                           0.5 ns
Branch mispredict                            5   ns
L2 cache reference                           7   ns                      14x L1 cache
Mutex lock/unlock                           25   ns
Main memory reference                      100   ns                      20x L2 cache, 200x L1 cache
Compress 1K bytes with Zippy            10,000   ns       10 us
Send 1 KB bytes over 1 Gbps network     10,000   ns       10 us
Read 4 KB randomly from SSD*           150,000   ns      150 us          ~1GB/sec SSD
Read 1 MB sequentially from memory     250,000   ns      250 us
Round trip within same datacenter      500,000   ns      500 us
Read 1 MB sequentially from SSD*     1,000,000   ns    1,000 us    1 ms  ~1GB/sec SSD, 4X memory
HDD seek                            10,000,000   ns   10,000 us   10 ms  20x datacenter roundtrip
Read 1 MB sequentially from 1 Gbps  10,000,000   ns   10,000 us   10 ms  40x memory, 10X SSD
Read 1 MB sequentially from HDD     30,000,000   ns   30,000 us   30 ms 120x memory, 30X SSD
Send packet CA->Netherlands->CA    150,000,000   ns  150,000 us  150 ms

Notes
-----
1 ns = 10^-9 seconds
1 us = 10^-6 seconds = 1,000 ns
1 ms = 10^-3 seconds = 1,000 us = 1,000,000 ns
Handy metrics based on numbers above:

Read sequentially from HDD at 30 MB/s
Read sequentially from 1 Gbps Ethernet at 100 MB/s
Read sequentially from SSD at 1 GB/s
Read sequentially from main memory at 4 GB/s
6-7 world-wide round trips per second
2,000 round trips per second within a data center



<!---
JosephDillard/JosephDillard is a ✨ special ✨ repository because its `README.md` (this file) appears on your GitHub profile.
You can click the Preview link to take a look at your changes.
--->
