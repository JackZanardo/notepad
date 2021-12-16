import React, { useState } from "react";
import { Text, View, TextInput } from 'react-native';
import { Note } from '../types';
import uuid from 'react-native-uuid';

type NoteFormProps = {
    note?: Note;
    handleSubmit(note: Note): void;
}

//TODO: Refactor so a new note is not instantiated when edit
export function NoteForm(props: NoteFormProps){
    const note = props.note;

    const [title, setTitle] = useState(note ? note.title : "");
    const [content, setContent] = useState(note ? note.content : "");

    function handleSubmit(){
        const saveNote: Note = {
            id: uuid.v4(),
            title: title,
            content: content,
            date: new Date()
        }
        props.handleSubmit(saveNote)
    }

    return(
        <View>
            <Text>Note Form</Text>
            <TextInput onChangeText={setTitle} value={title} />
            <TextInput onChangeText={setContent} value={content} />
        </View>
    );
}