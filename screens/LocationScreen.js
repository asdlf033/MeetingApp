import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Platform,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialDesignIcons from 'react-native-vector-icons/MaterialIcons';
import MapView, {Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import {useNavigation} from '@react-navigation/native';
// import { saveRegistrationProgress } from '../utils/registrationUtils';

const LocationScreen = () => {
  const [region, setRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });
  const navigation = useNavigation();
  const [location, setLocation] = useState('Loading...');

  useEffect(() => {
    Geolocation.getCurrentPosition(
      position => {
        const {latitude, longitude} = position.coords;

        const initialRegion = {
          latitude,
          longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        };

        setRegion(initialRegion);
        // setMarkerCoordinate({latitude, longitude});
        fetchAddress(latitude, longitude);
      },
      error => console.log('Error fetching location:', error),
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  }, []);
  const fetchAddress = (latitude, longitude) => {
    fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${process.env.GOOGLE_MAPS_API_KEY}`,
    )
      .then(response => response.json())
      .then(data => {
        if (data.results.length > 0) {
          const addressComponents = data?.results[0].address_components;
          let formattedAddress = '';
          for (let component of addressComponents) {
            if (component.types.includes('sublocality_level_1')) {
              formattedAddress += component.long_name + ', ';
            }
            if (component.types.includes('locality')) {
              formattedAddress += component.long_name + ', ';
            }
          }
          formattedAddress = formattedAddress.trim().slice(0, -1);
          setLocation(formattedAddress);
        }
      })
      .catch(error => console.log('Error fetching address:', error));
  };

  const handleNext = () => {
    // saveRegistrationProgress('Location',{location}); // 주석 처리
    navigation.navigate('Gender');
  };
  console.log('Location', location);
  return (
    <SafeAreaView
      style={{
        paddingTop: Platform.OS === 'android' ? 35 : 0,
        flex: 1,
        backgroundColor: 'white',
      }}>
      <View style={{marginTop: 80, marginHorizontal: 20}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View
            style={{
              width: 44,
              height: 44,
              borderRadius: 22,
              borderWidth: 2,
              borderColor: 'black',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
                  <MaterialDesignIcons name="map-marker" size={23} color="black" />
          </View>
          <Image
            style={{width: 100, height: 40}}
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/128/10613/10613685.png',
            }}
          />
        </View>

        <Text
          style={{
            fontSize: 25,
            fontWeight: 'bold',
            fontFamily: 'GeezaPro-Bold',
            marginTop: 15,
          }}>
          Where do you live?
        </Text>

        <View style={{ 
          width: '100%', 
          height: 500, 
          marginTop: 20, 
          borderRadius: 5,
          backgroundColor: '#f8f9fa',
          borderWidth: 2,
          borderColor: '#e9ecef',
          borderStyle: 'dashed',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Ionicons name="location-outline" size={60} color="#6c757d" />
          <Text style={{ fontSize: 20, color: '#495057', marginTop: 15, fontWeight: '600' }}>
            위치 선택
          </Text>
          <Text style={{ fontSize: 14, color: '#6c757d', marginTop: 10, textAlign: 'center', paddingHorizontal: 20 }}>
            현재 위치: {location}
          </Text>
        </View>

        <TouchableOpacity
          onPress={handleNext}
          activeOpacity={0.8}
          style={{marginTop: 30, marginLeft: 'auto'}}>
          <Ionicons
            name="chevron-forward-circle-outline"
            size={45}
            color="#581845"
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LocationScreen;
