import React, {useEffect, useState} from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

function useAsyncStorage(key: string, defaultValue: JSON[]) {
    const [value, setValue] = useState(() =>{
       let data: any;
       getData(key).then(result => data = result)
       if(data) {
           return JSON.parse(data);
       }
       return defaultValue;
    });

    useEffect(() => {
        storeData(key, JSON.stringify(value)).then();
    },[key, value]);
    return [value, setValue];
}

async function storeData(key: string, data: string){
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
        return null;
    } catch (e) {
        return new DOMException("Data not found", "read error");
    }
}

export const Storage = {useAsyncStorage};
