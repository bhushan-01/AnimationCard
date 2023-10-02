import { StyleSheet, Text, View ,SafeAreaView} from 'react-native'
import React from 'react'
import { FONTS } from '../assets/Fonts/Fonts'
import Ionicons from 'react-native-vector-icons/Ionicons'

const Screen2 = () => {
  return (
    <SafeAreaView>
      <View style={styles.HeaderPart}>
        <Ionicons name={'chatbox'} />
<Text style={styles.HeaderText}>
Profile
</Text>
        </View>
    
    </SafeAreaView>
  )
}

export default Screen2

const styles = StyleSheet.create({
  HeaderPart:{
paddingVertical:20,
paddingHorizontal:'3%',

  },HeaderText:{
    fontSize: 15,
    fontWeight: '500',
    color: '#727682',
    fontFamily: FONTS.Regular,
    textAlign: 'center',
  }

})