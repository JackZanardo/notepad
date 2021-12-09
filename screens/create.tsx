import React from "react";
import {View, Text} from "react-native";
import {Storage} from "../services";

export function Create() {
    const [notes, setNotes] = Storage.useAsyncStorage('notes', []);

    return (
      <View>
          <Text>Create</Text>
      </View>
    );
}
