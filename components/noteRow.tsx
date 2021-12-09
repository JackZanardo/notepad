import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Note } from "./note";

type NoteRowProps = {
    note: Note;
}

export function NoteRow({note}: NoteRowProps) {

    return(
        <View>
            <Text>
                Title: {note.title}
            </Text>
            <Text>
                Date: {note.date}
            </Text>
        </View>
    );
}
