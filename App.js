import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import GoalItem from "./components/GoalItem";
import GaolInput from "./components/GoalInput";


export default function App() {

    const [myGoals, setMyGoals] = useState([]);

    const addGoalHandler = (goalTitle) => {
        setMyGoals(currentGoals => [...currentGoals, {id: Math.random().toString(), value: goalTitle}]);
    };

    return (
        <View style={styles.mainViewContainer}>
            <GaolInput onAddGoal={addGoalHandler}/>
            <FlatList
                keyExtractor={(item, index) => item.id}
                data={myGoals}
                renderItem={
                    itemData => <GoalItem onDelete={() => console.log('works')} title={itemData.item.value}/>}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    mainViewContainer: {
        padding: 50,
    },
});
