import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import MaterialDesignIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const GenderScreen = () => {
  const [gender, setGender] = useState('');
  const navigation = useNavigation();
  const handleNext = () => {
    navigation.navigate("Type");
  }

  return (
    <SafeAreaView
      style={{
        paddingTop: Platform.OS === 'android' ? 35 : 0,
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
      }}
    >
      <View style={{ marginTop: 30, marginHorizontal: 20 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View
            style={{
              width: 44,
              height: 44,
              borderRadius: 22,
              borderWidth: 2,
              borderColor: 'black',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <MaterialDesignIcons name="gender-male" size={23} color="black" />
          </View>
          <Image
            style={{ width: 100, height: 40 }}
            source={{
              url: 'https://cdn-icons-png.flaticon.com/128/10613/10613685.png',
            }}
          />
        </View>

        <Text
          style={{
            fontSize: 25,
            fontWeight: 'bold',
            fontFamily: 'GeezaPro-Bold',
            marginTop: 15,
          }}
        >
          Which gender descripbes you the best?
        </Text>
        <Text style={{ fontSize: 15, marginTop: 20, color: 'gray' }}>
          Hinge users are matched based on these gender groups. You can add more
          about gender after registring
        </Text>

        <View style={{ marginTop: 30 }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Text style={{ fontSize: 15, fontWeight: '500' }}>Men</Text>
            <Pressable onPress={() => setGender('Men')}>
              <FontAwesome name="circle" size={26} color={gender=="Men" ? "#581845" : '#f0f0f0'} />
            </Pressable>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginVertical: 12,
            }}
          >
            <Text style={{ fontSize: 15, fontWeight: '500' }}>Women</Text>
            <Pressable onPress={() => setGender('Wonmen')}>
              <FontAwesome name="circle" size={26} color={gender=="Women" ? "#581845" : '#f0f0f0'} />
            </Pressable>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Text style={{ fontSize: 15, fontWeight: '500' }}>Non Binary</Text>
            <Pressable onPress={() => setGender('Non Binary')}>
              <FontAwesome name="circle" size={26} color={gender=="Non Binary" ? "#581845" : '#f0f0f0'} />
            </Pressable>
          </View>
        </View>

        <TouchableOpacity
          onPress={handleNext}
          activeOpacity={0.8}
          style={{ marginTop: 30, marginLeft: 'auto' }}
        >
          <Ionicons
            name="chevron-forward-circle-outline"
            size={45}
            color="black"
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default GenderScreen;

const styles = StyleSheet.create({});
