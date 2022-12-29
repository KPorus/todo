import React from 'react';
import {Text,View, StyleSheet, TouchableOpacity} from 'react-native';

const Todo = (props) => {
    const { text, number, id, handleremove } = props;
    return (
      <View
        style={{ backgroundColor: "#f7f7f7", padding: 15, marginBottom: 10 }}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}>
          <View
            style={{
              padding: 2,
              backgroundColor: "#8e44ad",
              opacity: 0.9,
              borderRadius: 5,
            }}>
            <Text style={{ color: "#fff", padding: 4, fontSize: 15 }}>
              {number}
            </Text>
          </View>

          <Text style={{ fontSize: 15, maxWidth: "88%" }}>{text}</Text>

          <TouchableOpacity
            style={{
              backgroundColor: "#8e44ad",
              padding: 10,
              borderRadius: 5,
            }}>
            <Text style={{ color: "#fff" }} onPress={() => handleremove(id)}>
              Remove
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({})

export default Todo;
