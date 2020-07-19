import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Icon1 from 'react-native-vector-icons/Ionicons';

const Header = (props) => {
  const [searchKey, setSearchKey] = useState('');

  const handletextInput = (e) => {
    setSearchKey(e);
    props.serachValue(e);
  };
  return (
    <View>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <SafeAreaView style={styles.safeAreaContainer}>
        {props.back === false ? (
          <View style={styles.mainContainer}>
            <View style={styles.menuContainer}>
              <Icon
                name="menu"
                size={25}
                onPress={() => props.navigation.toggleDrawer()}
              />
            </View>
            <View style={styles.searchContainer}>
              <View style={styles.searchInnerContainer}>
                <View style={styles.locationContainer}>
                  <Icon name="location-pin" size={20} color="gray" />
                </View>
                <View style={styles.inputContainer}>
                  <TextInput
                    placeholder="Search by name"
                    onChangeText={(e) => handletextInput(e)}
                    value={searchKey}
                    style={{height: 50}}
                  />
                </View>
              </View>
            </View>
            <View style={styles.notificationContainer}>
              <Icon1
                name="notifications-outline"
                size={25}
                onPress={() => props.navigation.navigate('Notification')}
              />
            </View>
          </View>
        ) : (
          <View style={{paddingLeft: '5%', paddingVertical: '2%'}}>
            <Icon1
              name="arrow-back-outline"
              size={35}
              onPress={() => props.navigation.goBack()}
            />
          </View>
        )}
      </SafeAreaView>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 0,
    backgroundColor: 'white',
  },
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: '2%',
  },
  menuContainer: {
    width: '20%',
    alignItems: 'center',
  },
  searchContainer: {
    width: '60%',
    alignItems: 'center',
    backgroundColor: '#e2e2e260',
    borderRadius: 30,
    justifyContent: 'center',
  },
  searchInnerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationContainer: {
    width: '20%',
    alignItems: 'center',
  },
  notificationContainer: {
    width: '20%',
    alignItems: 'center',
  },
  inputContainer: {
    width: '80%',
    height: 50,
  },
});
