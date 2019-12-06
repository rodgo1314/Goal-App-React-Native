import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';


const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState('');

  const userGoalInputHandler = enteredText => {
    setEnteredGoal(enteredText);
  };
  return (
    <Modal visible ={props.visible} animationType="slide" >
      <View style={styles.firstContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.textInputContainer}
          onChangeText={userGoalInputHandler}
          value={enteredGoal}
        />
        <Button title="Add" onPress={props.onAddGoal.bind(this, enteredGoal)} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  textInputContainer: {
    borderBottomColor: 'black',
    borderWidth: 1,
    padding: 10,
  },
  firstContainer: {
    justifyContent: 'center',
    alignContent: 'center',
    paddingHorizontal: 50,
    paddingTop: 50
  }
});

export default GoalInput;