/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';

import {View, Button, StyleSheet, TextInput} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';

export const Home = () => {
  const [todo, setTodo] = useState('');

  const store = useSelector(store => {
    return store;
  });

  const dispatch = useDispatch();

  return (
    <View>
      <TextInput
        style={styles.input}
        value={todo}
        onChangeText={text => {
          setTodo(text);
        }}
      />
      <Button
        style={styles.add}
        title="ADD"
        onPress={() => {
          dispatch({
            type: 'ADD',
            payload: {
              name: todo,
              status: false,
            },
          });
          setTodo('');
        }}
      />
      {store.map((item, index) => {
        return (
          <View
            style={{
              borderColor: item.status ? 'green' : 'red',
              borderRadius: 2,
              margin: 5,
              padding: 5,
              borderWidth: 2,
              height: 50,
              alignContent: 'space-around',
              justifyContent: 'space-between',
              flexDirection: 'row',
            }}>
            <Button
              // style={{alignSelf: 'flex-end'}}
              title={item.name}
              onPress={() => {
                dispatch({
                  type: 'MARK',
                  payload: index,
                });
              }}
            />
            <Button
              title="DELETE"
              onPress={() => {
                dispatch({
                  type: 'DELETE',
                  payload: {index},
                });
              }}
            />
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: 'blue',
    height: 50,
    margin: 20,
    padding: 10,
    borderWidth: 1,
  },

  add: {
    alignContent: 'space-around',
    justifyContent: 'space-around',
    backgroundColor: 'white',
  },

});
