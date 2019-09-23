import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Button, Modal} from 'react-native';



const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText)
    };


    return (
    <Modal visible={props.visible} animationType="slide">
        <View style={styles.inputContainer}>

        <TextInput 
          placeholder="Course Goal" 
          style={styles.input} 
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        
        <Button title="Add" onPress={props.onAddGoal.bind(this, enteredGoal)} />

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
    }
})

export default GoalInput;