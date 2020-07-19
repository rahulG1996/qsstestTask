import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Header from '../../components/header';

const Notification = (props) => {
  return (
    <View style={{flex: 1}}>
      <View>
        <Header {...props} back={true} />
      </View>
      <View style={styles.container}>
        <Text>Notification</Text>
      </View>
    </View>
  );
};

export default Notification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});
