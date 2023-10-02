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
const { width, height } = Dimensions.get('window');
import * as Animatable from 'react-native-animatable';
import { SharedElement } from 'react-navigation-shared-element';
import Feather from 'react-native-vector-icons/Feather';

const AnimationPartTwo = ({ route, navigation }) => {
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <Animatable.View
        style={{
          marginLeft: 10,
          flexDirection: 'row',
          position: 'absolute',
          zIndex: 1,
          marginTop: 10,
        }}
        animation={'fadeInRight'}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <SharedElement id={`arrow-left`}>
            <Feather name={'arrow-left'} color={'#000000'} size={20} />
          </SharedElement>
        </TouchableOpacity>
        <Text
          style={{
            color: '#000',
            fontWeight: 'bold',
            fontSize: 16,
            marginLeft: 10,
          }}>
          Event Details
        </Text>
      </Animatable.View>

      <View style={styles.fadeContainer}>
        <SharedElement id={`item.${item.id}.poster`}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Animated.Image
              source={{ uri: item.poster }}
              style={[
                styles.image,
                {
                  transform: [
                    {
                      scale: 1.2, // Adjust the initial scale for zoom
                    },
                  ],
                },
              ]}
              sharedTransitionTag="tag"
            />
          </TouchableOpacity>
        </SharedElement>
      </View>

      <Animatable.View style={styles.bg} animation={'fadeInUp'}>
        <Animatable.View animation={'fadeInUp'}>
          <SharedElement id={`item.${item.id}.title`}>
            <Text style={styles.title}>{item.title}</Text>
          </SharedElement>
        </Animatable.View>
        <Animatable.View animation={'fadeInUp'}>
          <SharedElement id={`item.${item.id}.location`}>
            <Text style={styles.location}>{item.location}</Text>
          </SharedElement>
        </Animatable.View>

        <Animatable.View animation={'fadeInUp'}>
          <SharedElement id={`item.${item.id}.date`}>
            <Text style={styles.date}>{item.date}</Text>
          </SharedElement>
        </Animatable.View>
      </Animatable.View>
    </View>
  );
};

const styles = StyleSheet.create({
  fadeContainer: {
    backgroundColor: 'white',
    opacity: 0.7,
    flexDirection: 'row',
    justifyContent: 'center', // Center the image horizontally
    alignItems: 'center', // Center the image vertically
  },
  bg: {
    bottom: 0,
    position: 'absolute',
    width: width,
    height: height * 0.2, // Adjust the height as needed
    backgroundColor: '#fff',
    transform: [{ translateY: 0 }], // Move the container to the bottom
    padding: 20,
  },
  container: {
    backgroundColor: '#fff',
    flex: 1, // Make the container take the full height
  },
  image: {
    width: width * 0.9, // Adjust the width as needed
    height: height * 0.8, // Adjust the height as needed
    resizeMode: 'contain', // You can adjust this based on your image aspect ratio
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

AnimationPartTwo.sharedElements = (route) => {
  const { item } = route.params;
  return [
    {
      id: `item.${item.id}.poster`,
      animation: 'fade',
      resize: 'clip',
    },
    {
      id: `item.${item.id}.title`,
      animation: 'fade',
      resize: 'clip',
    },
    {
      id: `item.${item.id}.location`,
      animation: 'fade',
      resize: 'clip',
    },
    {
      id: `item.${item.id}.date`,
      animation: 'fade',
      resize: 'clip',
    },
    {
      id: 'arrow-left',
      animation: 'scale',
      resize: 'clip',
    },
  ];
};

export default AnimationPartTwo;
