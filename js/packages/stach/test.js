var assert = require('assert');
var stach = require('./index');

const equitiesByRegionPackage = require('../../../docs/v2/examples/ColumnOrganized/EquitiesByRegion/Default.json');

describe('STACH', function () {
  it('Can deserialize Package from JSON', function () {
    let pkg = stach.Package.fromJSON(equitiesByRegionPackage);
    assert.equal(pkg.version, '2.0');
    assert.equal(pkg.primaryTableIds.length, 1);
    assert.equal(pkg.tables['main'].definition.columns.length, 13);
    assert.equal(pkg.tables['main'].definition.columns[1].name, 'region');
    assert.equal(pkg.tables['main'].data.columns['2'].values.values[2].stringValue, 'Developed Markets');
  });
});

describe('STACH', function () {
  it('Can serialize Package to JSON', function () {
    let pkg = stach.Package.toJSON(stach.Package.fromJSON(equitiesByRegionPackage));
    assert.equal(pkg.version, '2.0');
    assert.equal(pkg.primaryTableIds.length, 1);
    assert.equal(pkg.tables['main'].definition.columns.length, 13);
    assert.equal(pkg.tables['main'].definition.columns[1].name, 'region');
    assert.equal(pkg.tables['main'].data.columns['2'].values[2], 'Developed Markets');
  });
});

describe('STACH', function () {
  it('Can deserialize enum from string', function () {
    let row = stach.RowOrganizedPackage_Row.fromJSON({ rowType: 'Header' });
    assert.equal(row.rowType, stach.RowOrganizedPackage_Row_RowType.Header);
  });
});

describe('STACH', function () {
  it('Can deserialize enum from number', function () {
    let row = stach.RowOrganizedPackage_Row.fromJSON({ rowType: 1 });
    assert.equal(row.rowType, stach.RowOrganizedPackage_Row_RowType.Header);
  });
});

describe('STACH', function () {
  it('Can add rows from json with rowType as string', function () {
    let tableData = stach.RowOrganizedPackage_TableData.fromJSON({});
    tableData.rows.push(stach.RowOrganizedPackage_Row.fromJSON({ rowType: 'Header', cells: ['foo, bar'] }));
    tableData.rows.push(stach.RowOrganizedPackage_Row.fromJSON({ rowType: 'Body', cells: [ 'foo', 'bar' ] }));
    assert.equal(tableData.rows.length, 2);
    assert.equal(tableData.rows[0].rowType, stach.RowOrganizedPackage_Row_RowType.Header);
  });
});

describe('Google Well Known Types', function () {
  it('Value correctly deserializes from null', function () {
    let value = stach.Value.fromJSON(null);
    assert.equal(value.nullValue, stach.NullValue.NULL_VALUE);
  });
});

describe('Google Well Known Types', function () {
  it('Value correctly deserializes from boolean', function () {
    let value = stach.Value.fromJSON(true);
    assert.equal(value.boolValue, true);
  });
});

describe('Google Well Known Types', function () {
  it('Value correctly deserializes from string', function () {
    let value = stach.Value.fromJSON('foo bar');
    assert.equal(value.stringValue, 'foo bar');
  });
});

describe('Google Well Known Types', function () {
  it('Value correctly deserializes from number', function () {
    let value = stach.Value.fromJSON(17.17);
    assert.equal(value.numberValue, 17.17);
  });
});

describe('Google Well Known Types', function () {
  it('Value correctly deserializes from object', function () {
    let value = stach.Value.fromJSON({ foo: true, bar: false });
    assert.equal(value.structValue.fields['foo'].boolValue, true);
  });
});

describe('Google Well Known Types', function () {
  it('Value correctly deserializes from array', function () {
    let value = stach.Value.fromJSON(['foo', 'bar']);
    assert.equal(value.listValue.values[1].stringValue, 'bar');
  });
});

describe('Google Well Known Types', function () {
  it('ListValue correctly deserializes from array', function () {
    let listValue = stach.ListValue.fromJSON(['foo', 'bar']);
    assert.equal(listValue.values[1].stringValue, 'bar');
  });
});

describe('Google Well Known Types', function () {
  it('Struct correctly deserializes from object', function () {
    let struct = stach.Struct.fromJSON({foo: 'bar'});
    assert.equal(struct.fields['foo'].stringValue, 'bar');
  });
});


// Google Well Known Types Serialization

describe('Google Well Known Types', function () {
  it('Value correctly serializes to null', function () {
    let value = stach.Value.toJSON(stach.Value.fromJSON(null));
    assert.equal(value, null);
  });
});

describe('Google Well Known Types', function () {
  it('Value correctly serializes to boolean', function () {
    let value = stach.Value.toJSON(stach.Value.fromJSON(true));
    assert.equal(value, true);
  });
});

describe('Google Well Known Types', function () {
  it('Value correctly serializes to string', function () {
    let value = stach.Value.toJSON(stach.Value.fromJSON('foo bar'));
    assert.equal(value, 'foo bar');
  });
});

describe('Google Well Known Types', function () {
  it('Value correctly serializes to number', function () {
    let value = stach.Value.toJSON(stach.Value.fromJSON(17.17));
    assert.equal(value, 17.17);
  });
});

describe('Google Well Known Types', function () {
  it('Value correctly serializes to object', function () {
    let value = stach.Value.toJSON(stach.Value.fromJSON({ foo: true, bar: false }));
    assert.equal(value['foo'], true);
  });
});

describe('Google Well Known Types', function () {
  it('Value correctly serializes to array', function () {
    let value = stach.Value.toJSON(stach.Value.fromJSON(['foo', 'bar']));
    assert.equal(value[1], 'bar');
  });
});

describe('Google Well Known Types', function () {
  it('ListValue correctly serializes to array', function () {
    let listValue = stach.ListValue.toJSON(stach.ListValue.fromJSON(['foo', 'bar']));
    assert.equal(listValue[1], 'bar');
  });
});

describe('Google Well Known Types', function () {
  it('Struct correctly serializes to object', function () {
    let struct = stach.Struct.toJSON(stach.Struct.fromJSON({foo: 'bar'}));
    assert.equal(struct['foo'], 'bar');
  });
});