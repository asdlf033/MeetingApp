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
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialDesignIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwasome from '@react-native-vector-icons/fontawesome6';
import { useNavigation } from '@react-navigation/native';

const TypeScreen = () => {
  const [type, setType] = useState("");
  const navigation= useNavigation();
  const handleNext = () => {
    navigation.navigate("Dating")
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
          What's your sexuality?
        </Text>

        <Text style={{ fontSize: 15, marginTop: 20, color: 'gray' }}>
          Hinge users are matched based on these gender groups. You can add more
          about gender after registring
        </Text>

        <View style={{ marginTop: 30, flexDirection:"column",gap:12 }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Text style={{ fontSize: 15, fontWeight: '500' }}>Straight</Text>
            <Pressable onPress={() => setType('Straight')}>
              <FontAwasome name="circle" size={26} color={type=="Straight" ? "#581845" : '#f0f0f0'} />
            </Pressable>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Text style={{ fontSize: 15, fontWeight: '500' }}>Gay</Text>
            <Pressable onPress={() => setType('Gay')}>
              <FontAwasome name="circle" size={26} color={type=="Gay" ? "#581845" : '#f0f0f0'} />
            </Pressable>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Text style={{ fontSize: 15, fontWeight: '500' }}>Lesbian</Text>
            <Pressable onPress={() => setType('Lesbian')}>
              <FontAwasome name="circle" size={26} color={type=="Lesbian" ? "#581845" : '#f0f0f0'} />
            </Pressable>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Text style={{ fontSize: 15, fontWeight: '500' }}>Bisexual</Text>
            <Pressable onPress={() => setType('Bisexual')}>
              <FontAwasome name="circle" size={26} color={type=="Bisexual" ? "#581845" : '#f0f0f0'} />
            </Pressable>
          </View>
          <View
            style={{
              marginTop:30,
              flexDirection:"row",
              alignItems:'center',
              gap:8
            }}
          >
             <MaterialDesignIcons name="checkbox-marked" size={25} color="#900c3f"/>
            <Text style={{fontSize:15}}>Visible on profile</Text>
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
  )
}

export default TypeScreen

const styles = StyleSheet.create({})