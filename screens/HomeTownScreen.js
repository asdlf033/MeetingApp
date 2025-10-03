import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Pressable,
  TextInput,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialDesignIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

const HomeTownScreen = () => {
  const [hometown, setHometown] = useState('');
  const navigation = useNavigation();
  const handleNext = () => {
    navigation.navigate("WorkPlace")
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
            <MaterialDesignIcons name="hand-heart" size={23} color="black" />
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
          Where's your hometown?
        </Text>

        <TextInput
          autoFocus={true}
          value={hometown}
          onChangeText={text => setHometown(text)}
          placeholder='HomeTown'
          style={{
            width:340,
            marginTop:25,
            borderBottomColor:"black",
            borderBottomWidth:1,
            paddingBottom:10,
            fontFamily:"GeezaPro-Bold",
            fontSize:hometown ? 22 : 22,
          }}
        />

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

export default HomeTownScreen;

const styles = StyleSheet.create({});
