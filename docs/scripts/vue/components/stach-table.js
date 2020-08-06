Vue.component('stach-table', {
	props: {
		url: String,
		tableId: String,
		style: String
	},
	data() {
		return {
			package: null
		};
	},
	computed: {
		table() {
			if (!this.package) return null;
			var tableId = this.tableId || Object.keys(this.package.tables)[0];
			return this.package.tables[tableId];
		}
	},
	created() {
		this.loadPackage();
	},
	methods: {
		async loadPackage() {
	    	const res = await fetch(this.url);
	    	const data = await res.json();
	    	this.package = data;
		},
		cellDetails(row, colIndex) {
			return row.cellDetails ? row.cellDetails[colIndex] : null;
		},
		headerCellDetails(row, colIndex) {
			return row.headerCellDetails ? row.headerCellDetails[colIndex] : null;
		},
		headerColumnDefinition(row, colIndex) {
			var cd = this.headerCellDetails(row, colIndex);
			if (cd && cd.source === 'PRIMARY') {
				return this.table.definition.columns[cd.columnIndex || 0];
			} else if (cd && cd.source === 'HEADERS') {
				return this.table.headersDefinition.columns[cd.columnIndex || 0];
			}
			return null;
		},
		isHeader(row) {
			return row.rowType === 'Header';
		},
		isHidden(row, colIndex) {
			if (this.isHeader(row)) {
				var cd = this.headerColumnDefinition(row, colIndex);
				return cd ? cd.isHidden : false;
			} else {
				return this.table.definition.columns[colIndex].isHidden;
			}
		},
		rowspan(row, colIndex) {
			var cd = this.headerCellDetails(row, colIndex);
			return cd ? cd.rowspan : 1;
		},
		colspan(row, colIndex) {
			var cd = this.headerCellDetails(row, colIndex);
			return cd ? cd.colspan : 1;
		},
		groupLevel(row, colIndex) {
			var cd = this.cellDetails(row, colIndex);
			return cd ? cd.groupLevel : 0;
		},
		alignment(row, colIndex, orientation) {
			var propName = orientation === 'horizontal' ? 'halign' : 'valign';
			if (this.isHeader(row)) {
				var cd = this.headerColumnDefinition(row, colIndex);
				return cd && cd.format ? cd.format[propName] : 'center';
			} else {
				var format = this.table.definition.columns[colIndex].format;
				return format ? format[propName] : 'left';
			}
		}
	},
	template: `
	/// [demo]
	<table v-if="table" class="stach-table" v-bind:style="style">
		<tr v-for="(row, rowIndex) in table.data.rows"
			v-bind:class="{ header : isHeader(row) }">
			<td v-for="(value, colIndex) in row.cells"
			  v-if="!isHidden(row, colIndex)"
			  v-bind:rowspan="rowspan(row, colIndex)"
			  v-bind:colspan="colspan(row, colIndex)"
			  v-bind:style="{
			  	textAlign: alignment(row, colIndex, 'horizontal'),
			  	verticalAlign: alignment(row, colIndex, 'vertical')
			  }">
			  	<span v-bind:style="{ 'padding-left': groupLevel(row, colIndex) + 'em' }">{{value}}<span>
			</td>
		</tr>
	</table>
	/// [demo]`
});