import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import React, { useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwasome from '@react-native-vector-icons/fontawesome6';
import { useNavigation } from '@react-navigation/native';

const DatingType = () => {
  const [datingPreferences, setDatingPreferences] = useState([]);
  const navigation = useNavigation();
  const chooseOption = option => {
    if (datingPreferences.includes(option)) {
      setDatingPreferences(
        datingPreferences.filter(selectedOption => selectedOption !== option),
      );
    } else {
      setDatingPreferences([...datingPreferences, option]);
    }
  };
  const handleNext = () => {
    navigation.navigate("LookingFor");
  }

  return (
    <SafeAreaView
      style={{
        paddingTop: Platform.OS === 'android' ? 35 : 0,
        flex: 1,
        backgroundColor: 'white',
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
            <MaterialIcons name="gender-male" size={23} color="black" />
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
          Who do you want to date?
        </Text>

        <Text style={{ fontSize: 15, marginTop: 20, color: 'gray' }}>
          Select all people you're open to meeting
        </Text>

        <View style={{ marginTop: 30, flexDirection: 'column', gap: 12 }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Text style={{ fontSize: 15, fontWeight: '500' }}>Man</Text>
            <Pressable onPress={() => chooseOption('Man')}>
              <FontAwasome
                name="circle"
                size={26}
                color={datingPreferences.includes('Man') ? '#581845' : '#f0f0f0'}
              />
            </Pressable>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <Text style={{ fontSize: 15, fontWeight: '500' }}>Woman</Text>
            <Pressable onPress={() => chooseOption('Woman')}>
              <FontAwasome
                name="circle"
                size={26}
                color={datingPreferences.includes('Woman') ? '#581845' : '#f0f0f0'}
              />
            </Pressable>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Text style={{ fontSize: 15, fontWeight: '500' }}>Everyone</Text>
            <Pressable onPress={() => chooseOption('Everyone')}>
              <FontAwasome
                name="circle"
                size={26}
                color={datingPreferences.includes('Everyone') ? '#581845' : '#f0f0f0'}
              />
            </Pressable>
          </View>
          <View
            style={{
              marginTop: 30,
              flexDirection: 'row',
              alignItems: 'center',
              gap: 8,
            }}
          >
            <MaterialIcons name="checkbox-marked" size={25} color="#900c3f" />
            <Text style={{ fontSize: 15 }}>Visible on profile</Text>
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

export default DatingType;

const styles = StyleSheet.create({});
