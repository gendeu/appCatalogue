import React from 'react';
import {View, SafeAreaView, Image, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';
import { data } from '../../consts/data';

export default class Detail extends React.Component {
  render() {
    return (  
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: COLORS.white,
        }}>
        <View style={styleDetail.header}>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}> Selected Item</Text>
          <Icon name="shopping-cart" size={28} />
        </View>
        <View style={styleDetail.imageContainer}>
          <Image source={require('../../assets/s1.jpg')} style={{resizeMode: 'contain', flex: 1}} />
        </View>
        <View style={styleDetail.detailsContainer}>
          <View
            style={{
              marginLeft: 20,
              flexDirection: 'row',
              alignItems: 'flex-end',
            }}>
            <View style={styleDetail.line} />
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Best choice</Text>
          </View>
          <View
            style={{
              marginLeft: 20,
              marginTop: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 22, fontWeight: 'bold'}}>{data.name}</Text>
            <View style={styleDetail.priceTag}>
              <Text
                style={{
                  marginLeft: 15,
                  color: COLORS.white,
                  fontWeight: 'bold',
                  fontSize: 16,
                }}>
                $1000
              </Text>
            </View>
          </View>
          <View style={{paddingHorizontal: 20, marginTop: 10}}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>About</Text>
            <Text
              style={{
                color: 'grey',
                fontSize: 16,
                lineHeight: 22,
                marginTop: 10,
              }}>
              {data.about}
            </Text>
            <View
              style={{
                marginTop: 20,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <View style={styleDetail.borderBtn}>
                  <Text style={styleDetail.borderBtnText}>-</Text>
                </View>
                <Text
                  style={{
                    fontSize: 20,
                    marginHorizontal: 10,
                    fontWeight: 'bold',
                  }}>
                  1
                </Text>
                <View style={styleDetail.borderBtn}>
                  <Text style={styleDetail.borderBtnText}>+</Text>
                </View>
              </View>

              <View style={styleDetail.buyBtn}>
                <Text
                  style={{color: COLORS.white, fontSize: 18, fontWeight: 'bold'}}>
                  Buy
                </Text>
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}


const styleDetail = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageContainer: {
    flex: 0.45,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailsContainer: {
    flex: 0.55,
    backgroundColor: COLORS.light,
    marginHorizontal: 7,
    marginBottom: 7,
    borderRadius: 20,
    marginTop: 30,
    paddingTop: 30,
  },
  line: {
    width: 25,
    height: 2,
    backgroundColor: COLORS.dark,
    marginBottom: 5,
    marginRight: 3,
  },
  borderBtn: {
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 40,
  },
  borderBtnText: {fontWeight: 'bold', fontSize: 28},
  buyBtn: {
    width: 130,
    height: 50,
    backgroundColor: COLORS.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  priceTag: {
    backgroundColor: COLORS.green,
    width: 80,
    height: 40,
    justifyContent: 'center',
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
  },
});

// export default Detail;
