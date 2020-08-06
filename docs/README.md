<img src="images/logos/logo_450px.png" align="left">
<br/>
<h4>A <u>s</u>chema for <u>ta</u>bles and <u>ch</u>arts</h4>

This schema defines the format of tabular data, the relationships between columns, rows, headers, and metadata, and the binding of tables to charts. It is meant to standardize the format of tabular data between the service layer and the user interface layer.

## Overview

Tables can be more complex than a two-dimensional array of data. There are structural relationships that are important for understanding how data is related in order to facilitate human consumption. By retaining this information, it allows these relationships created in one application to be carried over to another application without having to redo this work. Once those relationships are defined, they can drive how tables are bound to charts.

## Motivation

To facilitate FactSet becoming data agnostic, increase the productivity of engineers, and decrease the time-to-market to build services and applications that generate and display tabular data and charts.

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

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the Apache License v2.0. See [LICENSE](LICENSE.txt ':ignore :target=_blank') for more information.