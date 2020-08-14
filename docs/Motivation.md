# Motivation

In organizations that produce data, many APIs serve list or tabular data. Without standardization, the design of those APIs may be very similar but none-the-less different, creating a never ending pattern of integration, which in turn increases the overall integration complexity of using an organization's APIs. With standardization of list and tabular data, tooling can be created to facilitate development and automation can be created to ingest data.

Consider the following pattern of API development within an organization. In the beginning, only a few producers exist so the cost of integration to a consumer is low because there are only a few different models to integrate. Over time, new producers are created and every consumer of data that need data from that new producer has to integrate not just the producer's API but also the models produced by the new API. The latter is expensive and is a significant cost in time and resources.

Consider the following chart that visualizes the growth in data integration over time. Note that the red line is the worst case scenario; the yellow line is closer to reality since not every consumer consumes every producer.

![Growth in Data Integration](images/Motivation/growth_in_data_integration.png)

## Tooling

Tooling allows developers to be more effective since they don't have to create everything from scratch. They can use sophisticated building blocks to put together complex applications. A standardization of list and tabular data allows developers to immediately utilize new APIs via tooling.

Examples of tooling:

- Manipulation
   - Simple [CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete) operations on tables, columns, rows, cells, headers, and metadata 
   - Sophisticated operations like pivots, joins, and aggregations
- Rendering
   - Static and interactive tables and charts
   - Complex rendering such as PDF and Word documents
- Ingestion
   - Databases
   - Blob and other storage
   - SQL and other calculation engines

## Automation

Automation allows organizations both internal and external to connect more efficiently in an automated way. They can use pre-designed systems that understand the STACH format (or even something that STACH can be converted into like CSV, Excel, or other tabular formats). This allows a plug-and-play capability which reduces time and resources for integration within the organization as well as between organizations.

Examples of systems that would benefit from automation:

- AI
- Machine Learning
- Data Exploration
- Reporting