# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: fds/protobuf/stach/table/VerticalAlignment.proto

import sys
_b=sys.version_info[0]<3 and (lambda x:x) or (lambda x:x.encode('latin1'))
from google.protobuf.internal import enum_type_wrapper
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()




DESCRIPTOR = _descriptor.FileDescriptor(
  name='fds/protobuf/stach/table/VerticalAlignment.proto',
  package='factset.protobuf.stach.table',
  syntax='proto3',
  serialized_options=_b('\n com.factset.protobuf.stach.tableB\026VerticalAlignmentProto\252\002\034FactSet.Protobuf.Stach.Table'),
  serialized_pb=_b('\n0fds/protobuf/stach/table/VerticalAlignment.proto\x12\x1c\x66\x61\x63tset.protobuf.stach.table*H\n\x11VerticalAlignment\x12\x12\n\x0eUNKNOWN_VALIGN\x10\x00\x12\x07\n\x03TOP\x10\x01\x12\n\n\x06MIDDLE\x10\x02\x12\n\n\x06\x42OTTOM\x10\x03\x42Y\n com.factset.protobuf.stach.tableB\x16VerticalAlignmentProto\xaa\x02\x1c\x46\x61\x63tSet.Protobuf.Stach.Tableb\x06proto3')
)

_VERTICALALIGNMENT = _descriptor.EnumDescriptor(
  name='VerticalAlignment',
  full_name='factset.protobuf.stach.table.VerticalAlignment',
  filename=None,
  file=DESCRIPTOR,
  values=[
    _descriptor.EnumValueDescriptor(
      name='UNKNOWN_VALIGN', index=0, number=0,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='TOP', index=1, number=1,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='MIDDLE', index=2, number=2,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='BOTTOM', index=3, number=3,
      serialized_options=None,
      type=None),
  ],
  containing_type=None,
  serialized_options=None,
  serialized_start=82,
  serialized_end=154,
)
_sym_db.RegisterEnumDescriptor(_VERTICALALIGNMENT)

VerticalAlignment = enum_type_wrapper.EnumTypeWrapper(_VERTICALALIGNMENT)
UNKNOWN_VALIGN = 0
TOP = 1
MIDDLE = 2
BOTTOM = 3


DESCRIPTOR.enum_types_by_name['VerticalAlignment'] = _VERTICALALIGNMENT
_sym_db.RegisterFileDescriptor(DESCRIPTOR)


DESCRIPTOR._options = None
# @@protoc_insertion_point(module_scope)