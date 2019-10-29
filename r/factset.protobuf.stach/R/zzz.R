.onAttach <- function(libname, pkgname) {
  proto_path = system.file("proto", package = "factset.protobuf.stach")
  readProtoFiles2(protoPath = proto_path,pattern = "\\.proto$", recursive = TRUE )
}
