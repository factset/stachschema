using System.Linq;
using FactSet.Protobuf.Stach;
using FactSet.Stach.Generator.Extensions;
using Google.Protobuf;

namespace FactSet.Stach.Generator.Builders {
    internal class GuidanceExamplesBuilder : MessageCollectionBuilder, IExamples {
        public string Path { get; }

        public GuidanceExamplesBuilder(string path) {
            this.Path = path;
        }

        protected override void DoBuild() {
            this.Add(this.RowOrganizedTableDataWithMaps);
            this.Add(this.RowOrganizedTableWithMaps);
            this.Add(this.RowOrganizedTableWithArrays);
            this.Add(this.RowOrganizedTableWithMapsAndHeaders);
            this.Add(this.RowOrganizedTableWithArraysAndHeaders);
            this.Add(this.RowOrganizedPackageWithMapsAndHeaders);
            this.Add(this.RowOrganizedPackageWithArraysAndHeaders);
            this.Add(this.ColumnOrganizedPackage);
            this.Add(this.ColumnOrganizedPackageWithCompression);
            this.Add(this.ColumnOrganizedPackageWithHeaders);
            this.Add(this.ColumnOrganizedPackageWithMetadata);
        }

        private IMessage RowOrganizedTableDataWithMaps() {
            var p = CreateRowOrganizedPackage(true);
            return p.Tables.First().Value.Data;
        }

        private IMessage RowOrganizedTableWithMaps() {
            var p = CreateRowOrganizedPackage(true, false);
            return p.Tables.First().Value;
        }

        private IMessage RowOrganizedTableWithArrays() {
            var p = CreateRowOrganizedPackage(false, false);
            return p.Tables.First().Value;
        }

        private IMessage RowOrganizedTableWithMapsAndHeaders() {
            var p = CreateRowOrganizedPackage(true, false, true, false);
            return p.Tables.First().Value;
        }

        private IMessage RowOrganizedTableWithArraysAndHeaders() {
            var p = CreateRowOrganizedPackage(false, false, true, false);
            return p.Tables.First().Value;
        }

        private IMessage RowOrganizedPackageWithMapsAndHeaders() {
            var p = CreateRowOrganizedPackage(true, false, true, false);
            return p;
        }

        private IMessage RowOrganizedPackageWithArraysAndHeaders() {
            var p = CreateRowOrganizedPackage(false, false, true, false);
            return p;
        }

        private IMessage ColumnOrganizedPackage() {
            var p = CreateColumnOrganizedPackage();
            return p;
        }

        private IMessage ColumnOrganizedPackageWithCompression() {
            var p = CreateColumnOrganizedPackage();
            p.Compress();
            return p;
        }

        private IMessage ColumnOrganizedPackageWithHeaders() {
            var p = CreateColumnOrganizedPackage(false);
            return p;
        }

        private IMessage ColumnOrganizedPackageWithMetadata() {
            var p = CreateColumnOrganizedPackage(true, false);
            return p;
        }

        private static Package CreateColumnOrganizedPackage(bool removeHeaders = true, bool removeMetadata = true) {
            var p = ColumnOrganizedEquitiesByRegion.Package.Clone();

            foreach (var tableId in p.PrimaryTableIds) {
                var t = p.Tables[tableId];

                if (removeHeaders) {
                    if (!string.IsNullOrWhiteSpace(t.Definition.HeaderTableId)) {
                        if (p.Tables.ContainsKey(t.Definition.HeaderTableId)) {
                            p.Tables.Remove(t.Definition.HeaderTableId);
                        }
                        t.Definition.HeaderTableId = "";
                    }
                }

                if (removeMetadata) {
                    t.Data.Metadata = null;
                }
            }

            return p;
        }

        private static RowOrganizedPackage CreateRowOrganizedPackage(bool maps, bool removeColumnDefinitions = true, bool simpleColumnDefinitions = true, bool removeHeaders = true, bool removeMetadata = true) {
            var p = (maps ? RowOrganizedEquitiesByRegionMaps.Package : RowOrganizedEquitiesByRegionArrays.Package).Clone();
            var t = p.Tables.First().Value;

            for (var i = t.Data.Rows.Count - 1; i >= 0; i--) {
                var row = t.Data.Rows[i];
                if (row.RowType == RowOrganizedPackage.Types.Row.Types.RowType.Header) {
                    if (removeHeaders) {
                        t.Data.Rows.RemoveAt(i);
                    }
                } else {
                    if (removeMetadata) {
                        row.RowMetadata.Clear();
                        row.CellDetails.Clear();
                    }
                }
            }

            if (removeMetadata) {
                t.Data.TableMetadata.Clear();
                t.Data.ColumnMetadata.Clear();
            }

            if (removeHeaders || removeColumnDefinitions) {
                t.HeadersDefinition = null;
            }

            if (removeColumnDefinitions) {
                t.Definition = null;
            } else if (simpleColumnDefinitions) {
                foreach (var cd in t.Definition.Columns) {
                    cd.Format = null;
                    cd.HeaderId = "";
                    cd.IsDimension = false;
                    cd.IsHidden = false;
                    cd.Name = "";
                    cd.NextSiblingId = "";
                    cd.ParentId = "";
                }

                if (t.HeadersDefinition != null) {
                    foreach (var cd in t.HeadersDefinition.Columns) {
                        cd.Format = null;
                        cd.HeaderId = "";
                        cd.IsDimension = false;
                        cd.IsHidden = false;
                        cd.Name = "";
                        cd.NextSiblingId = "";
                        cd.ParentId = "";
                    }
                }
            }

            return p;
        }
    }
}
