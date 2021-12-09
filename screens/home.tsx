import React from "react";
import {View, Text} from "react-native";
import {Storage} from "../services";

export function Home() {
    const [notes, setNotes] = Storage.useAsyncStorage('notes', []);

    return (
        <View>
            <Text>Home</Text>
        </View>
    );
}
