import React from "react";
import {View, Text} from "react-native";
import {Storage} from "../services";
import { Note } from "../types";

export function Create() {
    const [notes, setNotes] = Storage.useAsyncStorage('notes', []);

    function handleSubmit(note: Note) {

    }

    return (
      <View>
          <Text>Create</Text>
      </View>
    );
}
