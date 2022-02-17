# Terminology

## C

### Collapsed Column

A column that is derived from collapsing the set of dimension columns that are a member of the [collapsed column tree](#collapsed-column-tree).

### Collapsed Column Tree

The [tree](https://en.wikipedia.org/wiki/Tree_structure) composed of dimension columns that utilize the `SeriesDefinition.parent_id` and `SeriesDefinition.next_sibling_id` to build a hierarchy for rendering the [collapsed column](#collapsed-column) and forming row [groups](#group).

### Column

A series of data that is vertical.

## G

### Group

A set of rows that are children of a parent row.

### Group Level

The level of that group in the [collapsed column tree](#collapsed-column-tree). Value is zero-indexed.

## H

### Header Table

A table that contains only dimension columns that represent one or more levels of headers for a [primary table](#primary-table).

## P

### Primary Table

A table that contains columns of data. It can reference a header table to include additional levels of headers.

## R

### Row

A series of data that is horizontal.

## T

### Table

A physical table that contains columns and rows.