import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  FlatList,
  ImageBackground,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import Header from '../../components/header';
import {AllImages} from '../../assests/index';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/SimpleLineIcons';
import StarRating from 'react-native-star-rating';
import MainCategory from '../MainCtaegory';

const HomeScreen = (props) => {
  const [categoryData1, setCategory1] = useState([
    {
      image: AllImages.cake,
      categoryName: 'Cake',
      price: '$ 19',
      id: '1',
    },
    {
      image: AllImages.Kid,
      categoryName: 'Kids Dresses',
      price: '$ 19',
      id: '2',
    },
  ]);
  const [subCategories] = useState([
    {iconName: 'pizza-outline', type: 'Food'},
    {iconName: 'md-shirt-outline', type: 'Clothes'},
    {iconName: 'md-train-outline', type: 'Travel'},
    {iconName: 'woman', type: 'Beaty'},
    {iconName: 'md-gift-outline', type: 'Gifts'},
  ]);

  const [mainCategoryData, setMainCategoryData] = useState([
    {
      image: AllImages.Kid,
      name: 'Amrit Sweets',
      rating: 3,
      distance: '2Km',
      reviews: '562',
      id: '1',
    },
    {
      image: AllImages.Kid,
      name: 'Ratanlal Clothes',
      rating: 4,
      distance: '1Km',
      reviews: '562',
      id: '2',
    },
    {
      image: AllImages.Kid,
      name: 'Kid Fasion',
      rating: 3,
      distance: '2Km',
      reviews: '562',
      id: '3',
    },
    {
      image: AllImages.Kid,
      name: 'Laxmi Travels',
      rating: 4,
      distance: '1Km',
      reviews: '562',
      id: '4',
    },
  ]);
  const [data] = useState([
    {
      image: AllImages.Kid,
      name: 'Amrit Sweets',
      rating: 3,
      distance: '2Km',
      reviews: '562',
      id: '1',
    },
    {
      image: AllImages.Kid,
      name: 'Ratanlal Clothes',
      rating: 4,
      distance: '1Km',
      reviews: '562',
      id: '2',
    },
    {
      image: AllImages.Kid,
      name: 'Kid Fasion',
      rating: 3,
      distance: '2Km',
      reviews: '562',
      id: '3',
    },
    {
      image: AllImages.Kid,
      name: 'Laxmi Travels',
      rating: 4,
      distance: '1Km',
      reviews: '562',
      id: '4',
    },
  ]);

  const serachValue = (value) => {
    let newData =
      value != ''
        ? data.filter((item) => {
            let itemData = `${item.name.toUpperCase()}  `;
            let textData = value.toUpperCase();

            return itemData.indexOf(textData) > -1;
          })
        : data;
    setMainCategoryData(newData);
  };

  return (
    <View style={styles.mainContainer}>
      <View>
        <Header {...props} serachValue={serachValue} back={false} />
      </View>
      <View style={{flex: 1}}>
        <ScrollView>
          <View>
            <View style={styles.categoryContainer}>
              <SubCategory categoryData1={categoryData1} />
            </View>
            <View style={styles.subCategoryContainer}>
              {subCategories.map((item, index) => {
                return (
                  <View style={{alignItems: 'center'}} key={index}>
                    <View style={styles.subCategoryView}>
                      <Icon name={item.iconName} size={25} color="#b20a84" />
                    </View>
                    <View style={{paddingVertical: hp('2%')}}>
                      <Text style={{fontSize: hp('1.5%')}}>{item.type}</Text>
                    </View>
                  </View>
                );
              })}
            </View>
            <View style={{alignItems: 'center'}}>
              <MainCategory mainCategoryData={mainCategoryData} />
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default HomeScreen;

const SubCategory = (props) => {
  const _renderCategory1 = (item) => {
    return (
      <TouchableOpacity style={styles.categoryStyle}>
        <View>
          <View style={styles.innerCategoryView}>
            <View style={styles.categoryView}>
              <View style={styles.categoryNameContainer}>
                <Text style={styles.categoryNameText}>{item.categoryName}</Text>
              </View>
              <View style={styles.categoryPriceContainer}>
                <Text style={styles.categoryNameText}>{item.price}</Text>
              </View>
            </View>
          </View>

          <ImageBackground
            source={item.image}
            style={styles.categoryBackground}
            imageStyle={{opacity: 0.5, borderRadius: 30}}></ImageBackground>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View>
      <FlatList
        data={props.categoryData1}
        renderItem={({item}) => _renderCategory1(item)}
        horizontal
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  categoryContainer: {
    marginVertical: hp('5%'),
    marginLeft: wp('2%'),
  },
  subCategoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: wp('4%'),
  },
  subCategoryView: {
    alignItems: 'center',
    backgroundColor: 'white',
    elevation: 5,
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 5,
    shadowOpacity: 0.2,
  },
  categoryStyle: {
    width: wp('60%'),
    height: hp('20%'),
    marginHorizontal: wp('2%'),
    borderRadius: 30,
  },
  innerCategoryView: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: 3,
    backgroundColor: '#11111125',
    borderRadius: 30,
    alignItems: 'center',
    paddingBottom: hp('1.5%'),
  },
  categoryView: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    height: '100%',
    width: '90%',
  },
  categoryNameText: {
    fontWeight: 'bold',
    fontSize: hp('2.5%'),
    color: 'white',
  },
  categoryNameContainer: {
    width: '50%',
    alignItems: 'flex-start',
  },
  categoryPriceContainer: {
    width: '50%',
    alignItems: 'flex-end',
  },
  categoryBackground: {
    width: '100%',
    height: '100%',
  },
});
