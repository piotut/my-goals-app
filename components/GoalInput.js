import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Button } from 'react-native';

const GoalInput = props => {
    const [newGoal, setNewGoal] = useState('');

    const goalInputHandler = (value) => {
        setNewGoal(value);
    };

    return (
        <View style={styles.addGoalsContainer}>
            <TextInput
                placeholder="Your Goal"
                onChangeText={goalInputHandler}
                style={styles.textInput}
                value={newGoal}
            />
            <Button title="ADD" onPress={() => props.onAddGoal(newGoal)}/>
        </View>
    )
};


const styles = StyleSheet.create({
    addGoalsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#b4b4b4',
        padding: 10,
        width: '80%',
    },
});


export default GoalInput;