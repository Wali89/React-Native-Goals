import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Button} from 'react-native';



const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText)
    };


    return (
    <View style={styles.inputContainer}>

        <TextInput 
          placeholder="Course Goal" 
          style={styles.input} 
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        
        <Button title="Add" onPress={props.onAddGoal.bind(this, enteredGoal)} />

    </View> 
    );
};

const styles = StyleSheet.create({

    input: {
        width: '80%',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius:10,
        padding: 10
    },

    inputContainer: {
      flexDirection: 'row', 
      justifyContent: 'space-between',
      alignItems: 'center'
    }
})

export default GoalInput;