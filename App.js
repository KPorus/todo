import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Todo from "./components/Todo";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ paddingTop: 40, paddingHorizontal: 20 }}>
        <Text style={{ fontSize: 20, fontWeight: "800", marginBottom: 10 }}>
          Todo
        </Text>
        <View>
          <Todo></Todo>
          <Todo></Todo>
          <Todo></Todo>
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
