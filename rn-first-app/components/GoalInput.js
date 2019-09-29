import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Button, Modal} from 'react-native';



const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText)
    };


    //Clears the text input after adding a goal.
    const addGoalHandler = () => {
        props.onAddGoal(enteredGoal);
        setEnteredGoal('');
    }

    return (
    <Modal visible={props.visible} animationType="slide">
        <View style={styles.inputContainer}>

        <TextInput 
          placeholder="Course Goal" 
          style={styles.input} 
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
            <View style={styles.buttonContainer}>
                <View style={styles.button}><Button title="CANCEL" color="red" onPress={props.onCancel}/></View>
                <View style={styles.button}><Button title="ADD" onPress={addGoalHandler} /></View>
            </View>
        </View> 
    </Modal>
    );  
};

const styles = StyleSheet.create({

    input: {
        width: '80%',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius:10,
        padding: 10,
        margin: 10
    },

    inputContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },

    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '60%'
    },

    button: {
        width: "40%"
    }
})

export default GoalInput;