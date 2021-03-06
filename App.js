import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {

  const [courseGoals, setCourseGoals] = useState([]);
  const [ismodalVisable, setIsModalVisiable] = useState(false);

  const addUserGoalHandler = goalTitle => {
    setCourseGoals(currentGoals => [...courseGoals,
    { id: Math.random().toString(), value: goalTitle }])
    setIsModalVisiable(false)
  };


  const removeGoalHandler = goalId => {
    setCourseGoals(courseGoals => {
      return courseGoals.filter((goal) => goal.id !== goalId);
    });
  };




  return (
    <View style={styles.mainContainer}>
      <View style = {styles.buttonView}>
        <Button title="Add New Goal" onPress={() => setIsModalVisiable(true)} />
      </View>
      <GoalInput visible={ismodalVisable} onAddGoal={addUserGoalHandler} onCancel={()=>setIsModalVisiable(false)} />
      <FlatList
        style={styles.scrollContainer}
        data={courseGoals}
        keyExtractor={(item, index) => item.id}
        renderItem={itemData =>
          <GoalItem title={itemData.item.value} id={itemData.item.id} onDelete={removeGoalHandler} />}
      />
    </View >
  );
};

const styles = StyleSheet.create({

  scrollContainer: {
    paddingHorizontal: 20,
  },
  mainContainer: {
    paddingTop: 100
  },
  buttonView:{
    alignItems:'center'
    

  }

});
