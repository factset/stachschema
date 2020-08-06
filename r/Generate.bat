@echo off
call robocopy ../proto factset.protobuf.stach/inst/proto /s /MIR /nfl /ndl /njh /njs
call R CMD build factset.protobuf.stach