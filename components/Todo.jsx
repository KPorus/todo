import React from 'react';
import {Text,View, StyleSheet, TouchableOpacity} from 'react-native';

const Todo = () => {
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
            <Text style={{ color: "#fff", padding: 4, fontSize: 15 }}>#1</Text>
          </View>

          <Text style={{ fontSize: 15, }}>Hello world</Text>

          <TouchableOpacity
            style={{
              backgroundColor: "#8e44ad",
              padding: 10,
              borderRadius: 5,
            }}>
            <Text style={{ color: "#fff" }}>Remove</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({})

export default Todo;
