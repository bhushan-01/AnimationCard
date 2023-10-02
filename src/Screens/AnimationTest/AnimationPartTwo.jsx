import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Animated,
  Image,
} from 'react-native';
const {width, height} = Dimensions.get('window');
import * as Animatable from 'react-native-animatable';
import {SharedElement} from 'react-navigation-shared-element';

const AnimationPartTwo = ({route}) => {
  const {item, index} = route.params;

  return (
    <Animated.View style={styles.container}>
     
      <SharedElement id={`item.${item.id}.poster`}>
        <Image
          source={{uri: item.poster}}
          style={styles.image}
          sharedTransitionTag="tag"
        />
      </SharedElement>

      <View style={styles.bg}>
        <Animatable.View
          animation={'fadeInUp'}
          delay={400 * 2 + index * 200}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.location}>{item.location}</Text>
          <Text style={styles.date}>{item.date}</Text>
        </Animatable.View>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  bg: {
    position: 'absolute',
    width: width,
    height: height * 0.3,
    backgroundColor: '#fff',
    transform: [{translateY: height / 1.42}],

    padding: 20,
  },

  backButton: {
    fontSize: 16,
    color: 'blue',
  },

  container: {
    // justifyContent: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: width,
    height: 650,
    resizeMode: 'stretch',
  },
  title: {
    fontSize: 28,
    fontWeight: '900',
    textTransform: 'uppercase',

    color: '#000000',
  },
  location: {
    fontSize: 16,
    color: '#000000',
  },
  date: {
    fontSize: 12,
    color: '#000000',
  },
});

AnimationPartTwo.sharedElements = route => {
  const {item} = route.params;
  return [
    {
      id: `item.${item.id}.poster`,
      animation: 'move',
      resize: 'clip',
    },
  ];
};

export default AnimationPartTwo;
