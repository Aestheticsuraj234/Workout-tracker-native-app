import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import ExerciseListItem from '../../src/components/ExerciseListItem';
import exercises from "../../assets/data/exercises.json";


export default function App() {


  return (
    <View style={styles.container}>


      <FlatList
        data={exercises}
        contentContainerStyle={{ gap: 5 }}
        keyExtractor={(item, index) => item.name + index}
        renderItem={({ item }) => <ExerciseListItem item={item} />
        }
      />
      <StatusBar style="auto" />
    </View>
  );
}


// Styling for our applicatiosn

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 10,
  },
});