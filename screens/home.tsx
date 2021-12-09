import React from "react";
import {View, Text, FlatList} from "react-native";
import {Storage} from "../services";
import { NoteRow } from "../components";


export function Home() {
    const [notes, setNotes] = Storage.useAsyncStorage('notes', []);

    function renderNoteRow({note}: any){
        return(
            <NoteRow note={note} />
        );
    }

    return (
        <View>
            <Text>Home</Text>
            <FlatList data={notes} renderItem={renderNoteRow} keyExtractor={note => note.id} />
        </View>
    );
}
