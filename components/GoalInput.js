import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    TextInput,
    Button,
    Modal,
} from 'react-native';

const GoalInput = props => {
    const [newGoal, setNewGoal] = useState('');

    const goalInputHandler = (value) => {
        setNewGoal(value);
    };

    const addGoalHandler = () => {
        props.onAddGoal(newGoal);
        setNewGoal('');
    };

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.addGoalsContainer}>
                <TextInput
                    placeholder="Your Goal"
                    onChangeText={goalInputHandler}
                    style={styles.textInput}
                    value={newGoal}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="CANCEL" color="red" onPress={props.onCancel}/>
                    </View>
                    <View style={styles.button}>
                        <Button title="ADD" onPress={addGoalHandler}/>
                    </View>
                </View>
            </View>
        </Modal>
    )
};


const styles = StyleSheet.create({
    addGoalsContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#b4b4b4',
        padding: 10,
        width: '80%',
        marginBottom: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '60%',
    },
    button: {
        width: '40%',
    }
});


export default GoalInput;