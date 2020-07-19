import React, {useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import {AllImages} from '../../assests/index';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/SimpleLineIcons';
import StarRating from 'react-native-star-rating';

const MainCategory = (props) => {
  const _renderList = (item) => {
    return (
      <View style={styles.cardContainer}>
        <TouchableOpacity style={styles.cardWidth}>
          <View style={{height: 150}}>
            <Image source={item.image} style={styles.cardImage} />
          </View>
          <View style={styles.cardDataContainer}>
            <View style={styles.nameContainer}>
              <Text style={styles.name}>{item.name}</Text>
            </View>
            <View style={styles.locationConatiner}>
              <View>
                <Icon1 name="location-pin" size={12} color="#b20a84" />
              </View>
              <View>
                <Text style={styles.distanceReviewText}>
                  {item.distance + ' Away '}
                </Text>
              </View>
              <View>
                <Text style={styles.distanceReviewText}>
                  ({item.reviews + ' Reviews'})
                </Text>
              </View>
            </View>
            <View style={styles.ratingContainer}>
              <StarRating
                disabled={false}
                maxStars={5}
                rating={item.rating}
                starSize={12}
                fullStarColor="#fb4e08"
              />
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View>
      <FlatList
        data={props.mainCategoryData}
        renderItem={({item}) => _renderList(item)}
        numColumns={2}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default MainCategory;

const styles = StyleSheet.create({
  cardContainer: {
    elevation: 5,
    backgroundColor: 'white',
    marginVertical: hp('3%'),
    marginHorizontal: wp('2%'),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 5,
    shadowOpacity: 0.2,
  },
  cardWidth: {
    width: wp('45%'),
  },
  cardImage: {
    width: '100%',
    height: '100%',
  },
  cardDataContainer: {
    paddingHorizontal: wp('2%'),
  },
  name: {
    fontWeight: 'bold',
  },
  locationConatiner: {
    flexDirection: 'row',
    paddingBottom: hp('1%'),
  },
  distanceReviewText: {
    fontSize: hp('1.4%'),
    color: 'gray',
  },
  ratingContainer: {
    width: '50%',
    paddingBottom: hp('1%'),
  },
  nameContainer: {
    paddingVertical: hp('1%'),
  },
});
