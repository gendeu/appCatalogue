import React, { Component } from 'react'
import {
  View,
  // SafeAreaView,
  AppRegistry,
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

// import Page1 from './Page1.js';
// import Page2 from './MenuPages/Page2.js';
// import Page3 from './MenuPages/Page3.js';
import Swiper from 'react-native-swiper'
import Icon from 'react-native-vector-icons/MaterialIcons';
// import COLORS from '../../consts/colors';
import { catergories } from '../../consts/data';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },
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
    height: height / 2 - 33, 
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
    height: height / 2 - 33, 
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
    height: height / 2 - 33, 
    // shadowColor: '#051934'
  },

  categoriesWide: {  
    width: width - 10, 
    height: height / 2 - 33, 
    // backgroundColor: 'black',
    margin: 3,
  },
  ImageClassBgWide:
  {
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    // opacity: 0.3,
    // margin: 10,
    width: width - 10, 
    height: height / 2 - 33, 
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

})

export default class Menu extends React.Component {
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

    var categoriesHereP1 = [];
    var categoriesHereP2 = [];
    // var categoriesHereP3 = [];

    for(let i = 0; i <= 3; i++){
    
      categoriesHereP1.push(

        <ImageBackground key={catergories[i].id} source={require('../../assets/main.png')} style={styles.ImageClassBg} >
        <TouchableOpacity style={styles.categories} key={catergories[i].id} 
          onPress={ () => this.props.navigation.navigate('List') }
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
            
            <Image source={catergories[i].img} style = {styles.ImageClassBg}/>
            
            <View style={{alignItems: 'flex-start', position: 'absolute'}}>
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
          </View>
          
        </Animated.View>
        <View style={styles.bottomView}>
          <Text style={styles.textStyle}>
            {catergories[i].name}
          </Text>
        </View>
        {/* </ImageBackground> */}
        </TouchableOpacity>
      </ImageBackground>
        
      )
    };
    
    for(let i = 4; i <= 6; i++){
    
      if (i == 4) {
        categoriesHereP2.push(

            <ImageBackground key={catergories[i].id} source={require('../../assets/main.png')} style={styles.ImageClassBgWide} >
            <TouchableOpacity style={styles.categoriesWide} key={catergories[i].id} 
              onPress={ () => this.props.navigation.navigate('List') }
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
                
                <Image source={catergories[i].img} style = {styles.ImageClassBgWide}/>
                
                <View style={{alignItems: 'flex-start', position: 'absolute'}}>
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
              </View>
                
              </Animated.View>
              <View style={styles.bottomView}>
                <Text style={styles.textStyle}>
                  {catergories[i].name}
                </Text>
              </View>
              {/* </ImageBackground> */}
              </TouchableOpacity>
            </ImageBackground> 
      )

      } else {
        categoriesHereP2.push(

            <ImageBackground key={catergories[i].id} source={require('../../assets/main.png')} style={styles.ImageClassBg} >
            <TouchableOpacity style={styles.categories} key={catergories[i].id} 
              onPress={ () => this.props.navigation.navigate('List') }
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
                
                <Image source={catergories[i].img} style = {styles.ImageClassBg}/>
                
                <View style={{alignItems: 'flex-start', position: 'absolute'}}>
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
              </View>
                
              </Animated.View>
              <View style={styles.bottomView}>
                <Text style={styles.textStyle}>
                  {catergories[i].name}
                </Text>
              </View>
              {/* </ImageBackground> */}
              </TouchableOpacity>
            </ImageBackground> 
      )

      }
    };
    
    // for(let i = 6; i <= 6; i++){
    
    //   categoriesHereP3.push(

    //     <ImageBackground key={catergories[i].id} source={require('../../assets/main.png')} style={styles.ImageClassBg} >
    //     <TouchableOpacity style={styles.categories} key={catergories[i].id} 
    //       onPress={ () => this.props.navigation.navigate('List') }
    //     >
    //     {/* <Image source={require('../../assets/main.png')} style = {styles.ImageClass}/> */}
    //       {/* <ImageBackground source={require('../../assets/main.png')} style={styles.ImageClass}> */}
    //       <Animated.View
    //         style={[
    //           styles.fadingContainer,
    //           {
    //             opacity: this.state.fadeAnimation
    //           }
    //         ]}
    //       >
    //       <View>
            
    //         <Image source={catergories[i].img} style = {styles.ImageClassBg}/>
            
    //         <View style={{alignItems: 'flex-start', position: 'absolute'}}>
    //           <View
    //             style={{
    //               width: 30,
    //               height: 30,
    //               borderRadius: 20,
    //               justifyContent: 'center',
    //               alignItems: 'center',
    //               backgroundColor: "white",
    //             }}>
    //             <Icon
    //               name="bookmark"
    //               size={18}
    //               color={"black"}
    //             />
    //           </View>
    //         </View>
    //       </View>
          
    //     </Animated.View>
    //     <View style={styles.bottomView}>
    //       <Text style={styles.textStyle}>
    //         {catergories[i].name}
    //       </Text>
    //     </View>
    //     {/* </ImageBackground> */}
    //     </TouchableOpacity>
    //   </ImageBackground>
        
    //   )
    // }
    return (
      <Swiper style={styles.wrapper} buttonColor={'white'} showsButtons={true}>
        <View style={styles.slide1}>
            <View style={styles.categoryContainer}>
                
                <View style={{
                  height: '%', 
                  backgroundColor: 'black',
                  }} 
                >
                  <Image source={require('../../assets/menu.png')} style={{width, height}}/>
                </View>
            
              { categoriesHereP1 }

          </View>
        </View>

        <View style={styles.slide2}>
          <View style={styles.categoryContainer}>
                
                <View style={{
                  height: '%', 
                  backgroundColor: 'black',
                  }} 
                >
                  <Image source={require('../../assets/menu.png')} style={{width, height}}/>
                </View>
            
              { categoriesHereP2 }
          </View>
        </View>
{     
     /* <View style={styles.slide3}>
          <View style={styles.categoryContainer}>
                
                <View style={{
                  height: '%', 
                  backgroundColor: 'black',
                  }} 
                >
                  <Image source={require('../../assets/menu.png')} style={{width, height}}/>
                </View>
            
              { categoriesHereP3 }
          </View>
        </View> */}

      </Swiper>
    )
  }
}

AppRegistry.registerComponent('myproject', () => SwiperComponent)

