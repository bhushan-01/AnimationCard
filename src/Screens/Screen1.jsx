import {
  StyleSheet,
  Text,
  Image,
  View,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ButtonComponent from '../Components/Buttoncomponent';
import {FONTS} from '../assets/Fonts/Fonts';
import * as Progress from 'react-native-progress';
import {Picker, DatePicker} from 'react-native-wheel-pick';
import RBSheet from 'react-native-raw-bottom-sheet';

const {height, width} = Dimensions.get('window');

const Screen1 = props => {
  const [progress, setProgress] = useState(0);
  const [selectedItem, setSelectedItem] = useState(0);
  const numbersArray = [];

  for (let i = 1; i <= 100; i++) {
    numbersArray.push(i);
  }
  const onItemSelected = index => {
    setSelectedItem(index);
  };
  const refRBSheet = useRef();
  useEffect(() => {
    setSelectedItem('14');
    setProgress(0.7);
  }, [progress]);

  return (
    <SafeAreaView style={styles.Maincontainer}>
      <View>
        <Text style={styles.HeadingText}>Today’s Games</Text>
        <View style={styles.subHeader}>
          <View style={{padding: '4%'}}>
            <View style={styles.CommonStyle}>
              <View style={[styles.containerone, {width: width * 0.33}]}>
                <Text style={[styles.SubHeadingText, {color: '#D2BAF5'}]}>
                  UNDER OR OVER
                </Text>
                <Feather name={'info'} size={18} color={'#D2BAF5'} />
              </View>
              <View style={styles.containerone}>
                <Text style={[styles.SubHeadingText, {fontWeight: '500'}]}>
                  Starting in
                </Text>
                <AntDesign name={'clockcircle'} size={18} color={'#D2BAF5'} />
                <Text
                  style={[
                    styles.SubHeadingText,
                    {fontWeight: '500', fontSize: 16},
                  ]}>
                  03:23:12
                </Text>
              </View>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View style={{marginTop: '5%'}}>
                <Text
                  style={[
                    styles.HeadingText,
                    {color: '#D2BAF5', fontWeight: '500'},
                  ]}>
                  Bitcoin price will be under
                </Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text
                    style={[
                      styles.HeadingText,
                      {fontWeight: 'bold', color: '#ffff'},
                    ]}>
                    $24,524{' '}
                  </Text>
                  <Text
                    style={[
                      styles.HeadingText,
                      {fontWeight: '500', color: '#ffff'},
                    ]}>
                    at 7 a ET on 22nd Jan’21
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <Image
            source={require('../assets/DummyImg/BTClogo.png')}
            style={{
              height: 145,
              width: 145,
              resizeMode: 'contain',
              position: 'absolute',
              alignSelf: 'flex-end',
              top: 5,
            }}
          />
        </View>

        <View style={styles.subContainer}>
          <View style={styles.Substyle}>
            <Text style={[styles.normalText, {color: '#B5C0C8'}]}>
              Prize Pool
            </Text>
            <Text
              style={[styles.normalText, {fontWeight: '600', marginTop: 5}]}>
              $12,000
            </Text>
          </View>

          <View style={styles.Substyle}>
            <Text style={[styles.normalText, {color: '#B5C0C8'}]}>Under</Text>
            <Text
              style={[styles.normalText, {fontWeight: '600', marginTop: 5}]}>
              3.25x
            </Text>
          </View>
          <View style={styles.Substyle}>
            <Text style={[styles.normalText, {color: '#B5C0C8'}]}>Over</Text>
            <Text
              style={[styles.normalText, {fontWeight: '600', marginTop: 5}]}>
              1.25x
            </Text>
          </View>
          <View style={styles.Substyle}>
            <Text style={[styles.normalText, {color: '#B5C0C8'}]}>
              Entry Fees
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignContent: 'center',

                alignItems: 'center',
              }}>
              <Text
                style={[styles.normalText, {fontWeight: '600', marginTop: 5}]}>
                5
              </Text>
              <Image
                source={require('../assets/DummyImg/Coin.png')}
                style={{
                  height: 15,
                  width: 15,
                  resizeMode: 'contain',
                  marginLeft: 10,
                  marginTop: 7,
                }}
              />
            </View>
          </View>
        </View>
        <View>
          <Text
            style={[styles.HeadingText, {marginLeft: '3%', color: '#727682'}]}>
            What’s your prediction?
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: '3%',
              alignSelf: 'center',
            }}>
            <ButtonComponent
              ButtonContent={'Under'}
              btnwidth={'44%'}
              BTNSTYLE={{
                backgroundColor: '#452C55',
              }}
              Name={'arrow-down'}
              BtnPress={props.OnpressYess}
              BtnTxtStyle={styles.Text1}
            />
            <ButtonComponent
              ButtonContent={'Over'}
              BtnTxtStyle={[styles.Text1]}
              btnwidth={'44%'}
              Name={'arrow-up'}
              BTNSTYLE={{
                marginHorizontal: '3%',
              }}
              BtnPress={() => {
                refRBSheet.current.open();
              }}
            />
          </View>
        </View>
        <View
          style={[
            styles.CommonStyle,
            {width: width * 0.85, marginTop: 20, alignSelf: 'center'},
          ]}>
          <View style={[styles.CommonStyle, {width: width * 0.25}]}>
            <FontAwesome name={'user'} color={'#727682'} size={18} />
            <Text
              style={[
                styles.SubHeadingText,
                {color: '#727682', fontSize: 16, marginLeft: 5},
              ]}>
              355 Players
            </Text>
          </View>
          <View style={[styles.CommonStyle, {width: width * 0.25}]}>
            <FontAwesome name={'area-chart'} color={'#727682'} size={18} />
            <Text
              style={[
                styles.SubHeadingText,
                {color: '#727682', fontSize: 16, marginLeft: 5},
              ]}>
              View Chart
            </Text>
          </View>
        </View>
        <View style={styles.Progress}>
          <Progress.Bar
            progress={progress}
            width={width * 0.88} // Adjust the width as needed
            color="#FE4190" // Filled color
            unfilledColor="#2DABAD" // Unfilled color
            borderColor="transparent" // Hide the border
            borderRadius={10} // Adjust the border radius to control the ratio
            borderWidth={0} // No border
            height={12} // Adjust the height as needed
            useNativeDriver={true}
            animationType="timing"
          />
        </View>
        <View
          style={[
            styles.CommonStyle,
            {width: width * 0.9, marginTop: 15, alignSelf: 'center'},
          ]}>
          <View style={[styles.CommonStyle]}>
            <Text
              style={[
                styles.SubHeadingText,
                {color: '#B5C0C8', fontSize: 14, marginLeft: 10},
              ]}>
              232 predicted under
            </Text>
          </View>
          <View style={[styles.CommonStyle]}>
            <Text
              style={[styles.SubHeadingText, {color: '#B5C0C8', fontSize: 14}]}>
              123 predicted over
            </Text>
          </View>
        </View>
      </View>
      {/* Rbsheet code*/}
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}
        height={height * 0.6}
        customStyles={{
          wrapper: {
            backgroundColor: 'rgba(0,0,0,0.5)',
          },
          container: {
            borderTopLeftRadius: 35,
            borderTopRightRadius: 35,

            backgroundColor: '#fff',
          },
          draggableIcon: {
            backgroundColor: '#fff',
          },
        }}>
        <View
          style={{
            height: 8,
            width: width * 0.12,
            backgroundColor: '#B5C0C8',
            borderRadius: 24,
            alignSelf: 'center',
          }}></View>
        <View style={{padding: 16}}>
          <Text
            style={[
              styles.HeadingText,
              {fontSize: 17, fontFamily: FONTS.SemiBold},
            ]}>
            Your Prediction is Under
          </Text>

          <View style={styles.rbsheetstyle}>
            <Text
              style={[
                styles.SubHeadingText,
                {
                  fontSize: 15,
                  fontFamily: FONTS.SemiBold,
                  fontWeight: '600',
                  color: '#727682',
                },
              ]}>
              Entry tickets
            </Text>
          </View>
          <Picker
            style={{backgroundColor: 'white', width: width * 0.92, height: 215}}
            pickerData={numbersArray}
            selectedValue={selectedItem}
            onValueChange={value => {
              console.log(value);
            }}
          />

          <View style={styles.CommonStyle}>
            <View>
              <Text
                style={[
                  styles.SubHeadingText,
                  {color: '#B5C0C8', fontSize: 14},
                ]}>
                You can win{' '}
              </Text>
              <Text
                style={[
                  styles.SubHeadingText,
                  {color: '#03A67F', fontSize: 18, marginVertical: 5},
                ]}>
                $2000
              </Text>
            </View>
            <View style={[styles.CommonStyle, {alignItems: 'center'}]}>
              <Text
                style={[
                  styles.SubHeadingText,
                  {color: '#B5C0C8', fontSize: 14},
                ]}>
                Total
              </Text>
              <Image
                source={require('../assets/DummyImg/Coin.png')}
                style={{
                  height: 15,
                  width: 15,
                  resizeMode: 'contain',
                  marginHorizontal: 10,
                  marginTop: 2,
                }}
              />
              <Text
                style={[
                  styles.normalText,
                  {fontWeight: 'bold', color: '#000'},
                ]}>
                5
              </Text>
            </View>
          </View>

          <ButtonComponent
            ButtonContent={'Submit my prediction'}
            btnwidth={width * 0.9}
            BTNSTYLE={{marginTop: 20}}
            BtnPress={() => {
              props.navigation.navigate('Screen2');
            }}
            BtnTxtStyle={styles.Text1}
          />
        </View>
      </RBSheet>
    </SafeAreaView>
  );
};

export default Screen1;

const styles = StyleSheet.create({
  rbsheetstyle: {
    marginVertical: 20,
  },

  Progress: {
    alignSelf: 'center',
    marginTop: '4%',
  },
  CommonStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  HeaderBg: {
    height: 200,
    width: width * 0.95,
    resizeMode: 'contain',
  },
  Maincontainer: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: '3%',
  },
  Substyle: {},
  containerone: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: width * 0.4,
  },
  subHeader: {
    backgroundColor: '#743CC9',
    width: width * 0.95,
    marginVertical: '3%',
  },
  HeadingText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    fontFamily: FONTS.Bold,
  },
  SubHeadingText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#D2BAF5',
    fontFamily: FONTS.SemiBold,
  },
  subContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 15,
    marginHorizontal: 10,
  },
  normalText: {
    fontSize: 15,
    fontWeight: '500',
    color: '#000',
    fontFamily: FONTS.Regular,
    textAlign: 'center',
  },
});
