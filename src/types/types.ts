// В этом файле расписаны все типы

export type TSeminar = {
	id: number;
	title: string;
	description: string;
	date: string;
	time: string;
	photo: string;
};

export type TSeminars = TSeminar[];
