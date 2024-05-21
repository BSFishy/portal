export interface Config {
	title?: string;
	pages?: Page[];
}

export interface Page {
	name: string;
	slug?: string;
	columns?: Column[];
}

export interface Column {
	name?: string;
	modules?: Module[];
}

export interface Module {
	name?: string;
	type?: string;
}
