import { ADD_ITEM, DELETE_ITEM, EDIT_ITEM, SET_ACTIVE_ITEM_UNDEFINED, UPDATE_ITEM } from "@actions/index";
import { Item } from "@models/types";
import { apiService } from "@services/apiService";
import { makeAutoObservable, runInAction } from "mobx";

export class TableStore {

    data: Item [] = [];
    activeItem: Item | undefined = undefined;

    constructor() {
        apiService.getItems().then(data => { this.data = data });
        makeAutoObservable(this); 
    }

    operationFunc = (action: string, item: Item) => {
        switch(action) {
            case ADD_ITEM:
                apiService.addItem(item).then(data =>
                    runInAction(() => {
                        this.data = data ? [...this.data, data] : this.data;
                    })
                );
                break;
            case DELETE_ITEM:
                apiService.deleteItem(item).then(() => 
                    runInAction(() => {
                        this.data = this.data.filter(i => i.id !== item.id);
                    })
                );
                break;
            case UPDATE_ITEM:
                apiService.updateItem(item).then(() => {
                    runInAction(() => {
                        this.data = this.data.map(i => i.id !== item.id ? i : { ...item });
                        this.activeItem = undefined;
                    });
                });   
                break;
            case EDIT_ITEM:
                this.activeItem = item;
                break;
            case SET_ACTIVE_ITEM_UNDEFINED:
                this.activeItem = undefined;
                break;    
        }
    }
}