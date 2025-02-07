import { TSeminar, TSeminars } from "../types/types";

// Типы данный для класса API
interface IAPI {
	URL: string;
	getData(): Promise<TSeminars>;
	editData(id: number, updateData: TSeminar): Promise<void>;
	deleteData(id: number): Promise<void>;
}

// Класс API
export class API implements IAPI {
	URL: string;

	constructor(URl: string) {
		this.URL = URl;
	}

	// Метод получения данных с сервера:
	getData(): Promise<TSeminars> {
		return fetch(this.URL).then((res) => {
			if (res.ok) return res.json();
			else throw new Error("Error: Data is not obtained");
		});
	}

	// Редактирование данных:
	editData(id: number, updateData: TSeminar): Promise<void> {
		return fetch(`${this.URL}/${id}`, {
			method: "PATCH",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(updateData),
		}).then((res) => res.json());
	}

	// Удаление семинара:
	deleteData(id: number): Promise<void> {
		return fetch(`${this.URL}/${id}`, {
			method: "DELETE",
			headers: { "Content-Type": "application/json" },
		}).then((res) => res.json());
	}
}
