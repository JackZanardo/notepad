import React from "react";
import { Text, View, TouchableOpacity } from "react-native";

export function NoteRow({note}: any) {

    return(
        <View>
            <Text>
                Title: {note.Title}
            </Text>
            <Text>
                Date: {note.Date}
            </Text>
        </View>
    );
}
