import React, { useState } from "react";
import { Text, View, TextInput } from 'react-native';
import { Note } from '../types';

export function NoteForm(){
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    return(
        <View>
            <Text>Note Form</Text>
        </View>
    );
}