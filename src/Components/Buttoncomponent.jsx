import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {FONTS} from '../assets/Fonts/Fonts';
import Entypo from 'react-native-vector-icons/Entypo';
const ButtonComponent = props => {
  return (
    <TouchableOpacity
      style={[
        {
          width: props.btnwidth,
       
          borderRadius: 25,
          backgroundColor: '#6231AD',
          padding: 13,
        flexDirection:'row',
        alignSelf:'center',
        justifyContent:'center',
        },
        props.BTNSTYLE,
      ]}
      onPress={props.BtnPress}
      disabled={props.Disabled}>
      <Entypo name={props.Name} size={20} color="#FFFFFF" />

      <Text style={[styles.ButtonTxt, props.BtnTxtStyle]}>
        {props.ButtonContent}
      </Text>
    </TouchableOpacity>
  );
};

export default ButtonComponent;

const styles = StyleSheet.create({
  ButtonTxt: {
    fontSize: 16,
    color: '#FFFFFF',
    alignSelf: 'center',
    textAlign: 'center',
    fontFamily: FONTS.SemiBold,
    fontWeight: '600',


  },
});
