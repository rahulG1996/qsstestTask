import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Entypo';

const CustomDrawer = (props) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <TouchableOpacity
        style={styles.menuItemContainer}
        onPress={() => props.navigation.closeDrawer()}>
        <View style={styles.menuIconContainer}>
          <Icon name="home" color={'black'} size={25} />
        </View>
        <View>
          <Text style={styles.menuItext} numberOfLines={1}>
            Home
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.menuItemContainer}
        onPress={() => props.navigation.closeDrawer()}>
        <View style={styles.menuIconContainer}>
          <Icon1 name="logout" color={'black'} size={25} />
        </View>
        <View>
          <Text style={styles.menuItext} numberOfLines={1}>
            Logout
          </Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  menuItemContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#e2e2e260',
    paddingVertical: '5%',
    flexDirection: 'row',
  },
  menuIconContainer: {
    width: '20%',
    alignItems: 'center',
  },

  menuItext: {
    color: '#000',
    fontSize: 15,
  },
});
