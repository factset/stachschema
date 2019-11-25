// <auto-generated>
//     Generated by the protocol buffer compiler.  DO NOT EDIT!
//     source: fds/protobuf/stach/table/TableData.proto
// </auto-generated>
#pragma warning disable 1591, 0612, 3021
#region Designer generated code

using pb = global::Google.Protobuf;
using pbc = global::Google.Protobuf.Collections;
using pbr = global::Google.Protobuf.Reflection;
using scg = global::System.Collections.Generic;
namespace FactSet.Protobuf.Stach.Table {

  /// <summary>Holder for reflection information generated from fds/protobuf/stach/table/TableData.proto</summary>
  public static partial class TableDataReflection {

    #region Descriptor
    /// <summary>File descriptor for fds/protobuf/stach/table/TableData.proto</summary>
    public static pbr::FileDescriptor Descriptor {
      get { return descriptor; }
    }
    private static pbr::FileDescriptor descriptor;

    static TableDataReflection() {
      byte[] descriptorData = global::System.Convert.FromBase64String(
          string.Concat(
            "CihmZHMvcHJvdG9idWYvc3RhY2gvdGFibGUvVGFibGVEYXRhLnByb3RvEhxm",
            "YWN0c2V0LnByb3RvYnVmLnN0YWNoLnRhYmxlGjFmZHMvcHJvdG9idWYvc3Rh",
            "Y2gvdGFibGUvTWV0YWRhdGFDb2xsZWN0aW9uLnByb3RvGi9mZHMvcHJvdG9i",
            "dWYvc3RhY2gvdGFibGUvU2VyaWVzRGVmaW5pdGlvbi5wcm90bxopZmRzL3By",
            "b3RvYnVmL3N0YWNoL3RhYmxlL1Nlcmllc0RhdGEucHJvdG8irgIKCVRhYmxl",
            "RGF0YRI8CgRyb3dzGAEgAygLMi4uZmFjdHNldC5wcm90b2J1Zi5zdGFjaC50",
            "YWJsZS5TZXJpZXNEZWZpbml0aW9uEkUKB2NvbHVtbnMYAiADKAsyNC5mYWN0",
            "c2V0LnByb3RvYnVmLnN0YWNoLnRhYmxlLlRhYmxlRGF0YS5Db2x1bW5zRW50",
            "cnkSQgoIbWV0YWRhdGEYAyABKAsyMC5mYWN0c2V0LnByb3RvYnVmLnN0YWNo",
            "LnRhYmxlLk1ldGFkYXRhQ29sbGVjdGlvbhpYCgxDb2x1bW5zRW50cnkSCwoD",
            "a2V5GAEgASgJEjcKBXZhbHVlGAIgASgLMiguZmFjdHNldC5wcm90b2J1Zi5z",
            "dGFjaC50YWJsZS5TZXJpZXNEYXRhOgI4AUJRCiBjb20uZmFjdHNldC5wcm90",
            "b2J1Zi5zdGFjaC50YWJsZUIOVGFibGVEYXRhUHJvdG+qAhxGYWN0U2V0LlBy",
            "b3RvYnVmLlN0YWNoLlRhYmxlYgZwcm90bzM="));
      descriptor = pbr::FileDescriptor.FromGeneratedCode(descriptorData,
          new pbr::FileDescriptor[] { global::FactSet.Protobuf.Stach.Table.MetadataCollectionReflection.Descriptor, global::FactSet.Protobuf.Stach.Table.SeriesDefinitionReflection.Descriptor, global::FactSet.Protobuf.Stach.Table.SeriesDataReflection.Descriptor, },
          new pbr::GeneratedClrTypeInfo(null, new pbr::GeneratedClrTypeInfo[] {
            new pbr::GeneratedClrTypeInfo(typeof(global::FactSet.Protobuf.Stach.Table.TableData), global::FactSet.Protobuf.Stach.Table.TableData.Parser, new[]{ "Rows", "Columns", "Metadata" }, null, null, new pbr::GeneratedClrTypeInfo[] { null, })
          }));
    }
    #endregion

  }
  #region Messages
  public sealed partial class TableData : pb::IMessage<TableData> {
    private static readonly pb::MessageParser<TableData> _parser = new pb::MessageParser<TableData>(() => new TableData());
    private pb::UnknownFieldSet _unknownFields;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pb::MessageParser<TableData> Parser { get { return _parser; } }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pbr::MessageDescriptor Descriptor {
      get { return global::FactSet.Protobuf.Stach.Table.TableDataReflection.Descriptor.MessageTypes[0]; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    pbr::MessageDescriptor pb::IMessage.Descriptor {
      get { return Descriptor; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public TableData() {
      OnConstruction();
    }

    partial void OnConstruction();

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public TableData(TableData other) : this() {
      rows_ = other.rows_.Clone();
      columns_ = other.columns_.Clone();
      metadata_ = other.metadata_ != null ? other.metadata_.Clone() : null;
      _unknownFields = pb::UnknownFieldSet.Clone(other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public TableData Clone() {
      return new TableData(this);
    }

    /// <summary>Field number for the "rows" field.</summary>
    public const int RowsFieldNumber = 1;
    private static readonly pb::FieldCodec<global::FactSet.Protobuf.Stach.Table.SeriesDefinition> _repeated_rows_codec
        = pb::FieldCodec.ForMessage(10, global::FactSet.Protobuf.Stach.Table.SeriesDefinition.Parser);
    private readonly pbc::RepeatedField<global::FactSet.Protobuf.Stach.Table.SeriesDefinition> rows_ = new pbc::RepeatedField<global::FactSet.Protobuf.Stach.Table.SeriesDefinition>();
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public pbc::RepeatedField<global::FactSet.Protobuf.Stach.Table.SeriesDefinition> Rows {
      get { return rows_; }
    }

    /// <summary>Field number for the "columns" field.</summary>
    public const int ColumnsFieldNumber = 2;
    private static readonly pbc::MapField<string, global::FactSet.Protobuf.Stach.Table.SeriesData>.Codec _map_columns_codec
        = new pbc::MapField<string, global::FactSet.Protobuf.Stach.Table.SeriesData>.Codec(pb::FieldCodec.ForString(10), pb::FieldCodec.ForMessage(18, global::FactSet.Protobuf.Stach.Table.SeriesData.Parser), 18);
    private readonly pbc::MapField<string, global::FactSet.Protobuf.Stach.Table.SeriesData> columns_ = new pbc::MapField<string, global::FactSet.Protobuf.Stach.Table.SeriesData>();
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public pbc::MapField<string, global::FactSet.Protobuf.Stach.Table.SeriesData> Columns {
      get { return columns_; }
    }

    /// <summary>Field number for the "metadata" field.</summary>
    public const int MetadataFieldNumber = 3;
    private global::FactSet.Protobuf.Stach.Table.MetadataCollection metadata_;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public global::FactSet.Protobuf.Stach.Table.MetadataCollection Metadata {
      get { return metadata_; }
      set {
        metadata_ = value;
      }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override bool Equals(object other) {
      return Equals(other as TableData);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public bool Equals(TableData other) {
      if (ReferenceEquals(other, null)) {
        return false;
      }
      if (ReferenceEquals(other, this)) {
        return true;
      }
      if(!rows_.Equals(other.rows_)) return false;
      if (!Columns.Equals(other.Columns)) return false;
      if (!object.Equals(Metadata, other.Metadata)) return false;
      return Equals(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override int GetHashCode() {
      int hash = 1;
      hash ^= rows_.GetHashCode();
      hash ^= Columns.GetHashCode();
      if (metadata_ != null) hash ^= Metadata.GetHashCode();
      if (_unknownFields != null) {
        hash ^= _unknownFields.GetHashCode();
      }
      return hash;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override string ToString() {
      return pb::JsonFormatter.ToDiagnosticString(this);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void WriteTo(pb::CodedOutputStream output) {
      rows_.WriteTo(output, _repeated_rows_codec);
      columns_.WriteTo(output, _map_columns_codec);
      if (metadata_ != null) {
        output.WriteRawTag(26);
        output.WriteMessage(Metadata);
      }
      if (_unknownFields != null) {
        _unknownFields.WriteTo(output);
      }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public int CalculateSize() {
      int size = 0;
      size += rows_.CalculateSize(_repeated_rows_codec);
      size += columns_.CalculateSize(_map_columns_codec);
      if (metadata_ != null) {
        size += 1 + pb::CodedOutputStream.ComputeMessageSize(Metadata);
      }
      if (_unknownFields != null) {
        size += _unknownFields.CalculateSize();
      }
      return size;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void MergeFrom(TableData other) {
      if (other == null) {
        return;
      }
      rows_.Add(other.rows_);
      columns_.Add(other.columns_);
      if (other.metadata_ != null) {
        if (metadata_ == null) {
          metadata_ = new global::FactSet.Protobuf.Stach.Table.MetadataCollection();
        }
        Metadata.MergeFrom(other.Metadata);
      }
      _unknownFields = pb::UnknownFieldSet.MergeFrom(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void MergeFrom(pb::CodedInputStream input) {
      uint tag;
      while ((tag = input.ReadTag()) != 0) {
        switch(tag) {
          default:
            _unknownFields = pb::UnknownFieldSet.MergeFieldFrom(_unknownFields, input);
            break;
          case 10: {
            rows_.AddEntriesFrom(input, _repeated_rows_codec);
            break;
          }
          case 18: {
            columns_.AddEntriesFrom(input, _map_columns_codec);
            break;
          }
          case 26: {
            if (metadata_ == null) {
              metadata_ = new global::FactSet.Protobuf.Stach.Table.MetadataCollection();
            }
            input.ReadMessage(metadata_);
            break;
          }
        }
      }
    }

  }

  #endregion

}

#endregion Designer generated code