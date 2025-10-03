import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, { useState, useRef } from 'react';
import MaterialDesignIcons from 'react-native-vector-icons/MaterialIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation, useRoute } from '@react-navigation/native';

const DateOfBirthScreen = () => {
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const navigation = useNavigation();
  const monthRef = useRef(null);
  const yearRef = useRef(null);

  const handleDayChange = text => {
    setDay(text);
    if(text.length == 2) {
      monthRef.current.focus();
    }
  };

  const handleMonthChange = text => {
    setMonth(text);
    if(text.length == 2) {
      yearRef.current.focus();
    }
  };

  const handleYearChange = text => {
    setYear(text);
  };

  const handleNext = () => {
    navigation.navigate("Location")
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
            <MaterialDesignIcons name="calendar-blank" size={23} color="black" />
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
          What's your date of birth?
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
            marginTop: 50,
            justifyContent: 'center',
          }}
        >
          <TextInput
            ref={day}
            value={day}
            onChangeText={handleDayChange}
            autoFocus={true}
            placeholder="DD"
            secureTextEntry={true}
            placeholderTextColor={'#bebebe'}
            style={{
              borderBottomWidth: 1,
              borderColor: 'black',
              paddingTop: 10,
              width: 60,
              fontFamily: 'GeenzaPro-Bold',
              fontSize: day ? 22 : 22,
            }}
          />
          <TextInput
            ref={monthRef}
            value={month}
            onChangeText={handleMonthChange}
            autoFocus={true}
            maxLength={2}
            keyboardType="numeric"
            placeholder="MM"
            secureTextEntry={true}
            placeholderTextColor={'#bebebe'}
            style={{
              borderBottomWidth: 1,
              borderColor: 'black',
              paddingTop: 10,
              width: 60,
              fontFamily: 'GeenzaPro-Bold',
              fontSize: month ? 22 : 22,
            }}
          />
          <TextInput
            ref={yearRef}
            value={year}
            onChangeText={handleYearChange}
            autoFocus={true}
            placeholder="YYYY"
            secureTextEntry={true}
            placeholderTextColor={'#bebebe'}
            max={4}
            keyboardType="numeric"
            style={{
              borderBottomWidth: 1,
              borderColor: 'black',
              paddingTop: 10,
              width: 80,
              fontFamily: 'GeenzaPro-Bold',
              fontSize: year ? 22 : 22,
            }}
          />
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

export default DateOfBirthScreen;

const styles = StyleSheet.create({});
