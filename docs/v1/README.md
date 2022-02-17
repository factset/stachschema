# STACH v1

This version focused on satisfying the most complex case for representing a table.

We needed to be able to generically describe tables with row groups, collapsed columns, multiple rows of headers, complex metadata, as well as be able to compress the data to achieve the smallest size possible when transferring the data.

The intent was to keep the schema as simple as possible while still be able to represent this complexity.

Please review the accompanying [documentation](v1/ColumnOrganized) to understand how to use this version STACH.

## Serialization

All JSON properties are serialized using [camel casing](https://en.wikipedia.org/wiki/Camel_case) even though the protobuf schema uses [snake casing](https://en.wikipedia.org/wiki/Snake_case) due to protobuf's [JSON Mapping](https://developers.google.com/protocol-buffers/docs/proto3#json). Therefore, message field names are mapped to lowerCamelCase and become JSON object keys.

## Get Started

### Install

The following SDKs facilitate serialization.

   | Framework | Repository |
   |-----------|------------|
   | DotNet    | https://www.nuget.org/packages/FactSet.Protobuf.Stach/    |
   | Java      | https://mvnrepository.com/artifact/com.factset.protobuf |
   | Python    | https://pypi.org/project/fds.protobuf.stach/ |
   | R         | https://cran.r-project.org/web/packages/factset.protobuf.stach/index.html |
   
### Build

#### Generating source code

Compile the `.proto` files into generated source code files to facilitate serialization by using the [protobuf compiler](https://github.com/protocolbuffers/protobuf/releases). Follow the [instructions](https://developers.google.com/protocol-buffers/docs/proto3#generating) for your preferred language.

#### Generating SDKs

Run the `Generate.bat` script.

The following dependencies need to be installed:
- [Protobuf](https://github.com/protocolbuffers/protobuf/releases) v3.12.4
- [Dotnet](https://dotnet.microsoft.com/download) latest
- [Go](https://golang.org/dl/) v1.14.3
- [Maven](https://maven.apache.org/download.cgi) v3.6.3
- [NodeJS](https://nodejs.org/en/download/) v12.18.2
- [Python](https://www.python.org/downloads/) v3.8
- [R](https://cran.r-project.org/mirrors.html) v3.6.1

!> Note: Work is being done to remove the need for all of these dependencies, and automate this process.
