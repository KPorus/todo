import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import AddTodo from "./components/AddTodo";
import Todo from "./components/Todo";

export default function App() {
  const [todo, settodo] = useState([]);
  const [todoContent, settodoContent] = useState("");

  const handletodo = () => {
    if (!todo) {
      return;
    }

    settodo((prev) => [...prev, { id: prev.length + 1, text: todoContent }]);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ paddingTop: 40, paddingHorizontal: 20 }}>
        <Text style={{ fontSize: 20, fontWeight: "800", marginBottom: 10 }}>
          Todo
        </Text>
        <AddTodo
          handletodo={handletodo}
          settodoContent={settodoContent}
          todoContent={todoContent}></AddTodo>
        <View>
          {
            todo.map((todo, index)=><Todo key={index} number={index+1} text={todo.text} id={todo.id}/>)
          }
        </View>
      </View>
      <StatusBar style='auto' />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
