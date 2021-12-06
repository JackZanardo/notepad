import React from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

async function storeData(key: string, data: string) {
    try {
        await AsyncStorage.setItem(key, data);
    } catch (e) {
         return new DOMException("Data not saved", "save error");
    }
}

async function getData(key: string){
    try {
        const value = await AsyncStorage.getItem(key);
        if (value !== null) {
            return value;
        }
    } catch (e) {
        return new DOMException("Data not found", "read error");
    }
}

export {storeData, getData};
