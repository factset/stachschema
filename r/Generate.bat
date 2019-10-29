@echo off
robocopy ../proto factset.protobuf.stach/inst/proto /s /XD chart
R CMD build factset.protobuf.stach