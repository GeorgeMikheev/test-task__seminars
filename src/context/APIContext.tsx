import React, { createContext, useContext, useEffect, useState } from "react";
import { api } from "../api/api";
import { TSeminar, TSeminars } from "../types/types";

interface IAPIContext {
	seminars: TSeminars | null;
	getSeminars: () => Promise<void>;
	updateSeminar: (id: number, seminar: TSeminar) => Promise<void>;
	deleteSeminar: (id: number) => Promise<void>;
}

export const APIContext = createContext<IAPIContext | null>(null);

export const APIProvider = ({ children }: { children: React.ReactNode }) => {
	const [seminars, setSeminars] = useState<TSeminars | null>(null);

	useEffect(() => {
		getSeminars();
	}, []);

	async function getSeminars() {
		try {
			const data = await api.getData();
			setSeminars(data);
		} catch {
			console.error("seminars are not found");
		}
	}

	async function updateSeminar(id: number, updateData: TSeminar) {
		try {
			await api.editData(id, updateData);
			getSeminars();
		} catch (error) {
			console.error(error);
		}
	}

	async function deleteSeminar(id: number) {
		try {
			await api.deleteData(id);
			getSeminars();
		} catch (error) {
			console.error(error);
		}
	}

	return (
		<APIContext.Provider
			value={{
				seminars,
				getSeminars,
				updateSeminar,
				deleteSeminar,
			}}>
			{children}
		</APIContext.Provider>
	);
};

export const useAPI = () => {
	const context = useContext(APIContext);

	if (context) return context;
	else throw new Error("useAPI must be used within an APIProvider");
};
