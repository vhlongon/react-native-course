import React from 'react';
import { Text, FlatList } from 'react-native';

const data = [
  { name: 'Person 1', age: 11 },
  { name: 'Person 2', age: 12 },
  { name: 'Person 3', age: 13 },
  { name: 'Person 4', age: 14 },
  { name: 'Person 5', age: 15 },
  { name: 'Person 6', age: 16 },
];
// some interesting props that make style and layout a lot easier, the FlatList is vertical by default
const List = () => (
  <FlatList
    // horizontal
    // showsHorizontalScrollIndicator={false}
    // showsVerticalScrollIndicator={false}
    data={data}
    // This one here gets the object itself
    keyExtractor={({ name }) => name}
    // while the render prop here get the object as `item` plus other stuff
    renderItem={({ item }) => (
      <Text style={{ marginVertical: 50, marginHorizontal: 50 }}>
        {`${item.name} - Age: ${item.age}`}
      </Text>
    )}
  />
);

export default List;
