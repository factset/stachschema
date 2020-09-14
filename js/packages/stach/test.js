var assert = require('assert');
var lib = require('./index');

const equitiesByRegionPackageJSON = require('../../../docs/v2/examples/ColumnOrganized/EquitiesByRegion/Default.json');

describe('STACH', function () {
  it('Can deserialize Package from JSON', function () {
    let pkg = lib.factset.protobuf.stach.Package.fromObject(equitiesByRegionPackageJSON);
    assert.strictEqual(pkg.version, '2.0');
    assert.strictEqual(pkg.primaryTableIds.length, 1);
    assert.strictEqual(pkg.tables['main'].definition.columns.length, 13);
    assert.strictEqual(pkg.tables['main'].definition.columns[1].name, 'region');
    assert.strictEqual(pkg.tables['main'].data.columns['2'].values.values[2].stringValue, 'Developed Markets');
  });
});

describe('STACH', function () {
  it('Can serialize Package to JSON', function () {
    let pkg = lib.factset.protobuf.stach.Package.toObject(lib.factset.protobuf.stach.Package.fromObject(equitiesByRegionPackageJSON));
    assert.strictEqual(pkg.version, '2.0');
    assert.strictEqual(pkg.primaryTableIds.length, 1);
    assert.strictEqual(pkg.tables['main'].definition.columns.length, 13);
    assert.strictEqual(pkg.tables['main'].definition.columns[1].name, 'region');
    assert.strictEqual(pkg.tables['main'].data.columns['2'].values[2], 'Developed Markets');
  });
});

describe('STACH', function () {
  it('Can deserialize enum from string', function () {
    let row = lib.factset.protobuf.stach.RowOrganizedPackage.Row.fromObject({ rowType: 'Header' });
    assert.strictEqual(row.rowType, lib.factset.protobuf.stach.RowOrganizedPackage.Row.RowType.Header);
  });
});

describe('STACH', function () {
  it('Can deserialize enum from number', function () {
    let row = lib.factset.protobuf.stach.RowOrganizedPackage.Row.fromObject({ rowType: 1 });
    assert.strictEqual(row.rowType, lib.factset.protobuf.stach.RowOrganizedPackage.Row.RowType.Header);
  });
});

describe('STACH', function () {
  it('Can add rows from json with rowType as string', function () {
    let tableData = lib.factset.protobuf.stach.RowOrganizedPackage.TableData.fromObject({});
    tableData.rows.push(lib.factset.protobuf.stach.RowOrganizedPackage.Row.fromObject({ rowType: 'Header', cells: ['foo, bar'] }));
    tableData.rows.push(lib.factset.protobuf.stach.RowOrganizedPackage.Row.fromObject({ rowType: 'Body', cells: ['foo', 'bar'] }));
    assert.strictEqual(tableData.rows.length, 2);
    assert.strictEqual(tableData.rows[0].rowType, lib.factset.protobuf.stach.RowOrganizedPackage.Row.RowType.Header);
  });
});

describe('STACH', function () {
  it('Unset properties are not serialized to JSON', function () {
    let pkg = lib.factset.protobuf.stach.Package.toObject(lib.factset.protobuf.stach.Package.fromObject({}));
    assert.strictEqual(pkg.version, undefined);
  });
});

describe('Google Well Known Types', function () {
  it('Value correctly deserializes from null', function () {
    let value = lib.google.protobuf.Value.fromObject(null);
    assert.strictEqual(value.nullValue, lib.google.protobuf.NullValue.NULL_VALUE);
  });
});

describe('Google Well Known Types', function () {
  it('Value correctly deserializes from boolean', function () {
    let value = lib.google.protobuf.Value.fromObject(true);
    assert.strictEqual(value.boolValue, true);
  });
});

describe('Google Well Known Types', function () {
  it('Value correctly deserializes from string', function () {
    let value = lib.google.protobuf.Value.fromObject('foo bar');
    assert.strictEqual(value.stringValue, 'foo bar');
  });
});

describe('Google Well Known Types', function () {
  it('Value correctly deserializes from number', function () {
    let value = lib.google.protobuf.Value.fromObject(17.17);
    assert.strictEqual(value.numberValue, 17.17);
  });
});

describe('Google Well Known Types', function () {
  it('Value correctly deserializes from object', function () {
    let value = lib.google.protobuf.Value.fromObject({ foo: true, bar: false });
    assert.strictEqual(value.structValue.fields['foo'].boolValue, true);
  });
});

describe('Google Well Known Types', function () {
  it('Value correctly deserializes from array', function () {
    let value = lib.google.protobuf.Value.fromObject(['foo', 'bar']);
    assert.strictEqual(value.listValue.values[1].stringValue, 'bar');
  });
});

describe('Google Well Known Types', function () {
  it('ListValue correctly deserializes from array', function () {
    let listValue = lib.google.protobuf.ListValue.fromObject(['foo', 'bar']);
    assert.strictEqual(listValue.values[1].stringValue, 'bar');
  });
});

describe('Google Well Known Types', function () {
  it('Struct correctly deserializes from object', function () {
    let struct = lib.google.protobuf.Struct.fromObject({foo: 'bar'});
    assert.strictEqual(struct.fields['foo'].stringValue, 'bar');
  });
});

describe('Google Well Known Types', function () {
  it('Value correctly serializes to null', function () {
    let value = lib.google.protobuf.Value.toObject(lib.google.protobuf.Value.fromObject(null));
    assert.strictEqual(value, null);
  });
});

describe('Google Well Known Types', function () {
  it('Value correctly serializes null to binary', function () {
    let value = lib.google.protobuf.Value.fromObject(null);
    let valueBuffer = lib.google.protobuf.Value.encode(value).finish();
    let valueDecoded = lib.google.protobuf.Value.decode(valueBuffer);
    assert.strictEqual(valueDecoded.nullValue, lib.google.protobuf.NullValue.NULL_VALUE);
  });
});

describe('Google Well Known Types', function () {
  it('Value correctly serializes to boolean', function () {
    let value = lib.google.protobuf.Value.toObject(lib.google.protobuf.Value.fromObject(true));
    assert.strictEqual(value, true);
  });
});

describe('Google Well Known Types', function () {
  it('Value correctly serializes boolean to binary', function () {
    let value = lib.google.protobuf.Value.fromObject(true);
    let valueBuffer = lib.google.protobuf.Value.encode(value).finish();
    let valueDecoded = lib.google.protobuf.Value.decode(valueBuffer);
    assert.strictEqual(valueDecoded.boolValue, true);
  });
});

describe('Google Well Known Types', function () {
  it('Value correctly serializes to string', function () {
    let value = lib.google.protobuf.Value.toObject(lib.google.protobuf.Value.fromObject('foo bar'));
    assert.strictEqual(value, 'foo bar');
  });
});

describe('Google Well Known Types', function () {
  it('Value correctly serializes string to binary', function () {
    let value = lib.google.protobuf.Value.fromObject('foo bar');
    let valueBuffer = lib.google.protobuf.Value.encode(value).finish();
    let valueDecoded = lib.google.protobuf.Value.decode(valueBuffer);
    assert.strictEqual(valueDecoded.stringValue, 'foo bar');
  });
});

describe('Google Well Known Types', function () {
  it('Value correctly serializes to number', function () {
    let value = lib.google.protobuf.Value.toObject(lib.google.protobuf.Value.fromObject(17.17));
    assert.strictEqual(value, 17.17);
  });
});

describe('Google Well Known Types', function () {
  it('Value correctly serializes number to binary', function () {
    let value = lib.google.protobuf.Value.fromObject(17.17);
    let valueBuffer = lib.google.protobuf.Value.encode(value).finish();
    let valueDecoded = lib.google.protobuf.Value.decode(valueBuffer);
    assert.strictEqual(valueDecoded.numberValue, 17.17);
  });
});

describe('Google Well Known Types', function () {
  it('Value correctly serializes to object', function () {
    let value = lib.google.protobuf.Value.toObject(lib.google.protobuf.Value.fromObject({ foo: true, bar: false }));
    assert.strictEqual(value['foo'], true);
  });
});

describe('Google Well Known Types', function () {
  it('Value correctly serializes number to binary', function () {
    let value = lib.google.protobuf.Value.fromObject({ foo: true, bar: false });
    let valueBuffer = lib.google.protobuf.Value.encode(value).finish();
    let valueDecoded = lib.google.protobuf.Value.decode(valueBuffer);
    assert.strictEqual(valueDecoded.structValue.fields['foo'].boolValue, true);
  });
});

describe('Google Well Known Types', function () {
  it('Value correctly serializes to array', function () {
    let value = lib.google.protobuf.Value.toObject(lib.google.protobuf.Value.fromObject(['foo', 'bar']));
    assert.strictEqual(value[1], 'bar');
  });
});

describe('Google Well Known Types', function () {
  it('Value correctly serializes array to binary', function () {
    let value = lib.google.protobuf.Value.fromObject(['foo', 'bar']);
    let valueBuffer = lib.google.protobuf.Value.encode(value).finish();
    let valueDecoded = lib.google.protobuf.Value.decode(valueBuffer);
    assert.strictEqual(valueDecoded.listValue.values[1].stringValue, 'bar');
  });
});

describe('Google Well Known Types', function () {
  it('ListValue correctly serializes to array', function () {
    let listValue = lib.google.protobuf.ListValue.toObject(lib.google.protobuf.ListValue.fromObject(['foo', 'bar']));
    assert.strictEqual(listValue[1], 'bar');
  });
});

describe('Google Well Known Types', function () {
  it('ListValue correctly serializes array to binary', function () {
    let listValue = lib.google.protobuf.ListValue.fromObject(['foo', 'bar']);
    let listValueBuffer = lib.google.protobuf.ListValue.encode(listValue).finish();
    let listValueDecoded = lib.google.protobuf.ListValue.decode(listValueBuffer);
    assert.strictEqual(listValueDecoded.values[1].stringValue, 'bar');
  });
});

describe('Google Well Known Types', function () {
  it('Struct correctly serializes to object', function () {
    let struct = lib.google.protobuf.Struct.toObject(lib.google.protobuf.Struct.fromObject({foo: 'bar'}));
    assert.strictEqual(struct['foo'], 'bar');
  });
});

describe('Google Well Known Types', function () {
  it('Struct correctly serializes array to binary', function () {
    let struct = lib.google.protobuf.Struct.fromObject({foo: 'bar'});
    let structBuffer = lib.google.protobuf.Struct.encode(struct).finish();
    let structDecoded = lib.google.protobuf.Struct.decode(structBuffer);
    assert.strictEqual(structDecoded.fields['foo'].stringValue, 'bar');
  });
});