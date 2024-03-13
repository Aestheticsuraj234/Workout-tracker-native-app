import { Text, View , StyleSheet ,ScrollView} from "react-native";
import {useLocalSearchParams} from "expo-router"
import {Stack} from "expo-router";
import exercises from "../../assets/data/exercises.json"
export default function ExerciseDetailsScreen() {

    const params = useLocalSearchParams()

    const exercise = exercises.find((exercise) => exercise.name === params.name)

    if(!exercise) return (<Text>Exercise not found</Text>)

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Stack.Screen options={{title:exercise.name}} />
            <View style={styles.panel}>
            <Text  style={styles.exerciseName}>{exercise.name}</Text>
            <Text style={styles.exerciseSubtitle}>
                <Text style={styles.subValue}>  {exercise.muscle} </Text>| <Text style={styles.subValue}>{exercise.equipment}</Text>
            </Text>
            </View>
            <View style={styles.panel}>
            <Text style={styles.instructions}>
                {exercise.instructions}
            </Text>
            </View>
            
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    container:{
        padding:10,
        gap:10
    },
    exerciseContainer: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 10,
        gap: 5,
        marginHorizontal: 2,
        // Shadow
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,
    },
    panel:{
        backgroundColor:'white',
        padding:10,
        borderRadius:5
    },
    exerciseName: {
        fontSize: 20,
        fontWeight: '500',
    },
    exerciseSubtitle: {
        color: 'dimgray',
    },
    subValue: {
        textTransform: 'capitalize',
    },
    instructions:{
        fontSize:16,
        lineHeight:22,

    }
});
