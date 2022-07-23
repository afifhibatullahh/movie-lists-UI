import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>New Moviess</Text>
        <TouchableOpacity>
          <Icon name="person" size={30} color="#C4C4C4" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    paddingHorizontal: 32,
  },
});
