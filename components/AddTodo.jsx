import React from "react";
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  TextInput,
  Platform,
  Text,
  TouchableOpacity,
} from "react-native";

const AddTodo = (props) => {
    const { todoContent, settodoContent,handletodo } = props;
  return (
    <View>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 10,
          Width: "100%",
          marginTop:10,
        }}>
        <TextInput
          placeholder='Add a Task ....'
          value={todoContent}
          onChangeText={(text)=>settodoContent(text)}
          style={{
            paddingVertical: 15,
            paddingHorizontal: 40,
            Width: 250,
            backgroundColor: "#f7f7f7",
            fontWeight: "700",
            borderWidth: 1,
            borderColor: "#c0c0c0",
          }}></TextInput>
        <TouchableOpacity onPress={handletodo}>
          <View
            style={{
              paddingVertical: 15,
              paddingHorizontal: 30,
              backgroundColor: "#8e44ad",
              borderColor: "#C0C0C0",
              borderWidth: 1,
              borderRadius: 5,
            }}>
            <Text style={{ color: "#f7f7f7", fontWeight: "500" }}>Add</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({});

export default AddTodo;
