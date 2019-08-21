import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    FlatList,
    Button,
} from 'react-native';

import GoalItem from "./components/GoalItem";
import GaolInput from "./components/GoalInput";


export default function App() {

    const [myGoals, setMyGoals] = useState([]);
    const [isAddMode, setIsAddMode] = useState(false);

    const addGoalHandler = (goalTitle) => {
        setMyGoals(currentGoals => [
            ...currentGoals,
            {id: Math.random().toString(), value: goalTitle}
        ]);
        setIsAddMode(false);
    };

    const removeGoalHandler = (goalId) => {
        setMyGoals(currentGoals => {
            return currentGoals.filter((goal) => goal.id !== goalId);
        })
    };

    const cancelAddGoalHandler = () => {
        setIsAddMode(false);
    };

    return (
        <View style={styles.mainViewContainer}>
            <Button title="Add new goal" onPress={() => setIsAddMode(true)}/>
            <GaolInput visible={isAddMode} onCancel={cancelAddGoalHandler} onAddGoal={addGoalHandler}/>
            <FlatList
                keyExtractor={(item, index) => item.id}
                data={myGoals}
                renderItem={
                    itemData => <GoalItem onDelete={() => removeGoalHandler(itemData.item.id)} title={itemData.item.value}/>}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    mainViewContainer: {
        padding: 50,
    },
});
