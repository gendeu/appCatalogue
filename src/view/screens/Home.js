// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  View,
  // SafeAreaView,
  Text,
  StyleSheet,
  // FlatList,
  Button,
  Image,
  ImageBackground,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Animated,
} from 'react-native';

// import 'react-native-gesture-handler';
// import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/MaterialIcons';
// import COLORS from '../../consts/colors';
import { catergories } from '../../consts/data';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
// import { StyleSheet, Text, View } from 'react-native';


export default class Home extends React.Component {
  state = {
    fadeAnimation: new Animated.Value(0)
  };
  componentDidMount(){
    Animated.timing(this.state.fadeAnimation, {
      toValue: 1,
      duration: 1300,
      useNativeDriver: true
    }).start();
  }

  render() {
    return (  
      
        <View style={styles.categoryContainer}>
            
              <View style={{
                height: '5%', 
                backgroundColor: 'black',
                }} 
              >
                <Image source={require('../../assets/menu.png')} style={{width, height}}/>
              </View>
            
            
            
            {catergories.map((catergories, key) => 
              <ImageBackground source={require('../../assets/main.png')} style={styles.ImageClassBg} key={key} >
                <TouchableOpacity style={styles.categories} 
                  onPress={ () => this.props.navigation.navigate( 'List' ) }
                >
                {/* <Image source={require('../../assets/main.png')} style = {styles.ImageClass}/> */}
                  {/* <ImageBackground source={require('../../assets/main.png')} style={styles.ImageClass}> */}
                  <Animated.View
                    style={[
                      styles.fadingContainer,
                      {
                        opacity: this.state.fadeAnimation
                      }
                    ]}
                  >
                  <View>
                    
                    <Image source={catergories.img} style = {styles.ImageClassBg}/>
                    <View style={{alignItems: 'flex-start'}}>
                      <View
                        style={{
                          width: 30,
                          height: 30,
                          borderRadius: 20,
                          justifyContent: 'center',
                          alignItems: 'center',
                          backgroundColor: "white",
                        }}>
                        <Icon
                          name="bookmark"
                          size={18}
                          color={"black"}
                        />
                      </View>
                    </View>
                    <View style={{alignItems: 'flex-start'}}>
                    
                      {/* <Text style={{fontWeight: 'bold', fontSize: 17, color: 'white'}}>
                        {catergories.name}
                      </Text> */}
                      {/* <Text style={{fontSize: 13,}}>
                        {catergories.about}
                      </Text> */}
                    </View>
                  </View>
                  
                </Animated.View>
                <View style={styles.bottomView}>
                  <Text style={styles.textStyle}>
                    {catergories.name}
                  </Text>
                </View>
                {/* </ImageBackground> */}
                </TouchableOpacity>
              </ImageBackground>
            )}
            
             
        </View>
      
    );
  }
}

const styles = StyleSheet.create({  
  categoryContainer: {  
    height: '100%', 
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    // borderRadius: 100/2,
    justifyContent: 'center',
    alignItems: 'center',
    // margin: 10,
  },
  categories: {  
    width: width / 2 - 10, 
    height: height / 2 - 70, 
    // backgroundColor: 'black',
    margin: 3,
  },
  ImageClass:
  {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    // opacity: 0.3,
    // margin: 10,
    width: width / 2 - 10, 
    height: height / 2 - 70, 
    // shadowColor: '#051934'
  },
  ImageClassBg:
  {
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    // opacity: 0.3,
    // margin: 10,
    width: width / 2 - 10, 
    height: height / 2 - 70, 
    // shadowColor: '#051934'
  },
  bottomView: {
    width: '100%', 
    height: 80, 
    backgroundColor: 'black', 
    // alignItems: 'flex-start',
    position: 'absolute',
    opacity: 0.6,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontWeight: 'bold', 
    color: 'white',
    fontSize: 18,
    padding: 10,
  },

});  