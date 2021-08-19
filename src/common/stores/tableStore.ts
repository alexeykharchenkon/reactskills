import { Item } from "@models/types";
import { makeAutoObservable } from "mobx";

export class TableStore {

    data: Item [] = [];

    constructor() { makeAutoObservable(this) }

    operationFunc = (action: string) => {
        switch(action) {
            
        }
    }
}