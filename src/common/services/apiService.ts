import { Item } from "@models/types";
import axios from "axios";
import { url } from "@config/index";

class ApiService {
    public async addItem(item: Item): Promise<Item | null> {
        try {
            const { data } = await axios.post(url, {
                title: item.title,
                text: item.text,
                isChecked: item.isChecked
            });
            return data;
        } catch { return null }
    } 
    public async deleteItem(item: Item): Promise<void> {
        try { await axios.delete(url + `/${item.id}`) } catch {}
    }

    public async updateItem(item: Item): Promise<void> {
        try { await axios.put(url + `/${item.id}`, item) } catch {}
    }

    public async getItems(): Promise<Item[]> {
        try{
            const { data } = await axios.get(url);
            return data;
        } catch { return [] }  
    }
}

export const apiService = new ApiService();