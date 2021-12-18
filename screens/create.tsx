import React from "react";
import {View, Text} from "react-native";
import {Storage} from "../services";
import { Note } from "../types";
import { NoteForm } from "../components";

export function Create({ navigation }: any) {
    const [notes, setNotes] = Storage.useAsyncStorage('notes', []);

    function handleSubmit(note: Note) {
      setNotes([note,...notes]);
      navigation.navigate('Home');
    }

    return (
      <View>
          <Text>Create</Text>
          <NoteForm note={null} handleSubmit={handleSubmit}/>
      </View>
    );
}
