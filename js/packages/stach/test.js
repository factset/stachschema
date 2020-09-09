var assert = require('assert');
var stach = require('./index');

describe('STACH SDK', function () {
  it('Can deserialize Package from JSON', function () {
    let pkg = stach.Package.fromJSON(equitiesByRegionPackage);
    assert.equal(pkg.version, '2.0');
    assert.equal(pkg.primaryTableIds.length, 1);
    assert.equal(pkg.tables['main'].definition.columns.length, 13);
    assert.equal(pkg.tables['main'].definition.columns[1].name, 'region');
    assert.equal(pkg.tables['main'].data.columns['2'].values.values[2].stringValue, 'Developed Markets');
  });
});

describe('STACH SDK', function () {
  it('Can serialize Package to JSON', function () {
    let pkg = stach.Package.toJSON(stach.Package.fromJSON(equitiesByRegionPackage));
    assert.equal(pkg.version, '2.0');
    assert.equal(pkg.primaryTableIds.length, 1);
    assert.equal(pkg.tables['main'].definition.columns.length, 13);
    assert.equal(pkg.tables['main'].definition.columns[1].name, 'region');
    assert.equal(pkg.tables['main'].data.columns['2'].values[2], 'Developed Markets');
  });
});

describe('STACH SDK', function () {
  it('Can deserialize enum from string', function () {
    let row = stach.RowOrganizedPackage_Row.fromJSON({ rowType: 'Header' });
    assert.equal(row.rowType, stach.RowOrganizedPackage_Row_RowType.Header);
  });
});

describe('STACH SDK', function () {
  it('Can deserialize enum from number', function () {
    let row = stach.RowOrganizedPackage_Row.fromJSON({ rowType: 1 });
    assert.equal(row.rowType, stach.RowOrganizedPackage_Row_RowType.Header);
  });
});

describe('STACH SDK', function () {
  it('Can add rows from json with rowType as string', function () {
    let tableData = stach.RowOrganizedPackage_TableData.fromJSON({});
    tableData.rows.push(stach.RowOrganizedPackage_Row.fromJSON({ rowType: 'Header', cells: ['foo, bar'] }));
    tableData.rows.push(stach.RowOrganizedPackage_Row.fromJSON({ rowType: 'Body', cells: [ 'foo', 'bar' ] }));
    assert.equal(tableData.rows.length, 2);
    assert.equal(tableData.rows[0].rowType, stach.RowOrganizedPackage_Row_RowType.Header);
  });
});

// Google Well Known Types Deserialization

describe('STACH SDK', function () {
  it('Value correctly deserializes from null', function () {
    let value = stach.Value.fromJSON(null);
    assert.equal(value.nullValue, stach.NullValue.NULL_VALUE);
  });
});

describe('STACH SDK', function () {
  it('Value correctly deserializes from boolean', function () {
    let value = stach.Value.fromJSON(true);
    assert.equal(value.boolValue, true);
  });
});

describe('STACH SDK', function () {
  it('Value correctly deserializes from string', function () {
    let value = stach.Value.fromJSON('foo bar');
    assert.equal(value.stringValue, 'foo bar');
  });
});

describe('STACH SDK', function () {
  it('Value correctly deserializes from number', function () {
    let value = stach.Value.fromJSON(17.17);
    assert.equal(value.numberValue, 17.17);
  });
});

describe('STACH SDK', function () {
  it('Value correctly deserializes from object', function () {
    let value = stach.Value.fromJSON({ foo: true, bar: false });
    assert.equal(value.structValue.fields['foo'].boolValue, true);
  });
});

describe('STACH SDK', function () {
  it('Value correctly deserializes from array', function () {
    let value = stach.Value.fromJSON(['foo', 'bar']);
    assert.equal(value.listValue.values[1].stringValue, 'bar');
  });
});

describe('STACH SDK', function () {
  it('ListValue correctly deserializes from array', function () {
    let listValue = stach.ListValue.fromJSON(['foo', 'bar']);
    assert.equal(listValue.values[1].stringValue, 'bar');
  });
});

describe('STACH SDK', function () {
  it('Struct correctly deserializes from object', function () {
    let struct = stach.Struct.fromJSON({foo: 'bar'});
    assert.equal(struct.fields['foo'].stringValue, 'bar');
  });
});


// Google Well Known Types Serialization

describe('STACH SDK', function () {
  it('Value correctly serializes to null', function () {
    let value = stach.Value.toJSON(stach.Value.fromJSON(null));
    assert.equal(value, null);
  });
});

describe('STACH SDK', function () {
  it('Value correctly serializes to boolean', function () {
    let value = stach.Value.toJSON(stach.Value.fromJSON(true));
    assert.equal(value, true);
  });
});

describe('STACH SDK', function () {
  it('Value correctly serializes to string', function () {
    let value = stach.Value.toJSON(stach.Value.fromJSON('foo bar'));
    assert.equal(value, 'foo bar');
  });
});

describe('STACH SDK', function () {
  it('Value correctly serializes to number', function () {
    let value = stach.Value.toJSON(stach.Value.fromJSON(17.17));
    assert.equal(value, 17.17);
  });
});

describe('STACH SDK', function () {
  it('Value correctly serializes to object', function () {
    let value = stach.Value.toJSON(stach.Value.fromJSON({ foo: true, bar: false }));
    assert.equal(value['foo'], true);
  });
});

describe('STACH SDK', function () {
  it('Value correctly serializes to array', function () {
    let value = stach.Value.toJSON(stach.Value.fromJSON(['foo', 'bar']));
    assert.equal(value[1], 'bar');
  });
});

describe('STACH SDK', function () {
  it('ListValue correctly serializes to array', function () {
    let listValue = stach.ListValue.toJSON(stach.ListValue.fromJSON(['foo', 'bar']));
    assert.equal(listValue[1], 'bar');
  });
});

describe('STACH SDK', function () {
  it('Struct correctly serializes to object', function () {
    let struct = stach.Struct.toJSON(stach.Struct.fromJSON({foo: 'bar'}));
    assert.equal(struct['foo'], 'bar');
  });
});

// Constants
var equitiesByRegionPackage = {
  "version": "2.0",
  "primaryTableIds": [
    "main"
  ],
  "tables": {
    "main": {
      "definition": {
        "headerTableId": "headers",
        "columns": [
          {
            "id": "1",
            "name": "function",
            "description": "Function",
            "type": "string",
            "isDimension": true,
            "nextSiblingId": "2"
          },
          {
            "id": "2",
            "name": "region",
            "description": "Region",
            "type": "string",
            "isDimension": true
          },
          {
            "id": "3",
            "name": "continent1",
            "description": "Continent 1",
            "type": "string",
            "isDimension": true,
            "parentId": "2"
          },
          {
            "id": "4",
            "name": "continent2",
            "description": "Continent 2",
            "type": "string",
            "isDimension": true,
            "parentId": "2"
          },
          {
            "id": "5",
            "name": "regionUrl",
            "description": "Region Url",
            "type": "string",
            "isDimension": true,
            "isHidden": true
          },
          {
            "id": "6",
            "name": "fund0",
            "description": "Fund 0",
            "type": "real",
            "headerId": "c_f0",
            "format": {
              "format": "{0:0.00}",
              "halign": "RIGHT"
            }
          },
          {
            "id": "7",
            "name": "bench0",
            "description": "Bench 0",
            "type": "real",
            "headerId": "c_b0",
            "format": {
              "format": "{0:0.00}",
              "halign": "RIGHT"
            }
          },
          {
            "id": "8",
            "name": "contAbbr",
            "description": "Abbr",
            "type": "string",
            "isDimension": true
          },
          {
            "id": "9",
            "name": "fund1",
            "description": "Fund 1",
            "type": "real",
            "headerId": "c_f1",
            "format": {
              "format": "{0:0.00}",
              "halign": "RIGHT"
            }
          },
          {
            "id": "10",
            "name": "bench1",
            "description": "Bench 1",
            "type": "real",
            "headerId": "c_b1",
            "format": {
              "format": "{0:0.00}",
              "halign": "RIGHT"
            }
          },
          {
            "id": "11",
            "name": "fund2",
            "description": "Fund 2",
            "type": "real",
            "headerId": "c_f2",
            "format": {
              "format": "{0:0.00}",
              "halign": "RIGHT"
            }
          },
          {
            "id": "12",
            "name": "fund0Url",
            "description": "Fund 0 Url",
            "type": "string",
            "isDimension": true,
            "isHidden": true
          },
          {
            "id": "13",
            "name": "bench2",
            "description": "Bench 2",
            "type": "real",
            "headerId": "c_b2",
            "format": {
              "format": "{0:0.00}",
              "halign": "RIGHT"
            }
          }
        ]
      },
      "data": {
        "columns": {
          "1": {
            "values": [
              "Max",
              "Total",
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null
            ]
          },
          "2": {
            "values": [
              null,
              null,
              "Developed Markets",
              "Developed Markets",
              "Developed Markets",
              "Developed Markets",
              "Developed Markets",
              "Emerging Markets",
              "Emerging Markets",
              "Emerging Markets",
              "Emerging Markets",
              "Emerging Markets",
              "Frontier Markets",
              "Other",
              "[Cash]"
            ]
          },
          "3": {
            "values": [
              null,
              null,
              null,
              "Americas",
              "Asia Pacific",
              "Europe",
              "Middle East and Africa",
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null
            ]
          },
          "4": {
            "values": [
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              "Americas",
              "Asia Pacific",
              "Europe",
              "Middle East and Africa",
              null,
              null,
              null
            ]
          },
          "5": {
            "values": [
              null,
              null,
              "https://www.google.com/search?q=developed+markets",
              "https://www.google.com/search?q=developed+markets",
              "https://www.google.com/search?q=developed+markets",
              "https://www.google.com/search?q=developed+markets",
              "https://www.google.com/search?q=developed+markets",
              "https://www.google.com/search?q=emerging+markets",
              "https://www.google.com/search?q=emerging+markets",
              "https://www.google.com/search?q=emerging+markets",
              "https://www.google.com/search?q=emerging+markets",
              "https://www.google.com/search?q=emerging+markets",
              "https://www.google.com/search?q=frontier+markets",
              "https://www.google.com/search?q=other",
              "https://www.google.com/search?q=cash"
            ]
          },
          "6": {
            "values": [
              88.3,
              100,
              88.3,
              46.03,
              9.09,
              33.15,
              null,
              8.71,
              0.3,
              8.41,
              null,
              null,
              0.36,
              null,
              0.15
            ]
          },
          "7": {
            "values": [
              89.62,
              100,
              89.62,
              54.98,
              12.48,
              21.95,
              0.21,
              7.76,
              1.12,
              5.41,
              0.33,
              0.89,
              null,
              0.53,
              null
            ]
          },
          "8": {
            "values": [
              null,
              null,
              null,
              "AM",
              "APac",
              "EU",
              "MEA",
              null,
              "AM",
              "APac",
              "EU",
              "MEA",
              null,
              null,
              null
            ]
          },
          "9": {
            "values": [
              17.17,
              8.6,
              8.51,
              10.21,
              11.94,
              8.71,
              null,
              14.12,
              22.7,
              14.22,
              null,
              null,
              17.17,
              null,
              8.45
            ]
          },
          "10": {
            "values": [
              15.67,
              8.38,
              8.39,
              9.63,
              10.06,
              8.28,
              13.58,
              10.65,
              15.44,
              11.02,
              12.78,
              14.92,
              null,
              15.67,
              null
            ]
          },
          "11": {
            "values": [
              86.07,
              100,
              86.07,
              50.74,
              7.37,
              27.96,
              null,
              10.48,
              0.36,
              10.12,
              null,
              null,
              0.19,
              null,
              -0.06
            ]
          },
          "12": {
            "values": [
              null,
              null,
              "https://www.google.com/search?q=x",
              "https://www.google.com/search?q=x",
              "https://www.google.com/search?q=x",
              "https://www.google.com/search?q=x",
              "https://www.google.com/search?q=x",
              "https://www.google.com/search?q=x",
              "https://www.google.com/search?q=x",
              "https://www.google.com/search?q=x",
              "https://www.google.com/search?q=x",
              "https://www.google.com/search?q=x",
              "https://www.google.com/search?q=x",
              "https://www.google.com/search?q=x",
              "https://www.google.com/search?q=x"
            ]
          },
          "13": {
            "values": [
              89.18,
              100,
              89.18,
              61.23,
              9.77,
              17.93,
              0.24,
              8.17,
              1.41,
              5.47,
              0.25,
              1.03,
              null,
              0.59,
              null
            ]
          }
        },
        "metadata": {
          "items": {
            "header": {
              "value": "Risk Analysis"
            },
            "fund0Url": {
              "reference": {
                "referenceType": "COLUMN",
                "tableId": "main",
                "columnId": "12"
              }
            },
            "regionUrl": {
              "reference": {
                "referenceType": "COLUMN",
                "tableId": "main",
                "columnId": "5"
              }
            },
            "riskModel": {
              "reference": {
                "referenceType": "TABLE",
                "tableId": "riskModel"
              }
            }
          },
          "locations": {
            "table": [
              "header"
            ],
            "columns": {
              "6": {
                "ids": [
                  "fund0Url"
                ]
              },
              "2": {
                "ids": [
                  "regionUrl",
                  "riskModel"
                ]
              }
            }
          }
        }
      }
    },
    "headers": {
      "definition": {
        "columns": [
          {
            "id": "c_year",
            "name": "year",
            "description": "Year",
            "type": "int32",
            "isDimension": true
          },
          {
            "id": "c_category",
            "name": "category",
            "description": "Category",
            "type": "string",
            "isDimension": true,
            "parentId": "c_year"
          },
          {
            "id": "c_portType",
            "name": "portType",
            "description": "Portfolio Type",
            "type": "string",
            "isDimension": true,
            "parentId": "c_category"
          }
        ]
      },
      "data": {
        "rows": [
          {
            "id": "c_f0"
          },
          {
            "id": "c_b0"
          },
          {
            "id": "c_f1"
          },
          {
            "id": "c_b1"
          },
          {
            "id": "c_f2"
          },
          {
            "id": "c_b2"
          }
        ],
        "columns": {
          "c_year": {
            "values": [
              2017,
              2017,
              2017,
              2017,
              2017,
              2017
            ]
          },
          "c_category": {
            "values": [
              "Exposure",
              "Exposure",
              "Total Risk",
              "Total Risk",
              "Contribution to Risk",
              "Contribution to Risk"
            ]
          },
          "c_portType": {
            "values": [
              "Fund",
              "Bench",
              "Fund",
              "Bench",
              "Fund",
              "Bench"
            ]
          }
        }
      }
    }
  }
};