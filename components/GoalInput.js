import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';


const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState('');

  const userGoalInputHandler = enteredText => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal('');

  };


  return (
    <Modal visible={props.visible} animationType="slide" >
      <View style={styles.firstContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.textInputContainer}
          onChangeText={userGoalInputHandler}
          value={enteredGoal}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button color='red' title="Cancel" onPress={props.onCancel} />
          </View>
          <View style={styles.button}>
            <Button title="Add" onPress={addGoalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  textInputContainer: {
    borderBottomColor: 'black',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    width: '80%'
  },
  firstContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonContainer: {
    width: '60%',
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  button: {
    width: '40%'

  }
});

export default GoalInput;