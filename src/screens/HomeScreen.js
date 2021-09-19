import React from 'react'
import { View, Text,StyleSheet, SafeAreaView, Image } from 'react-native'
import { tw } from 'react-native-tailwindcss';
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useDispatch } from 'react-redux';
import {setOrigin , setDestination} from '../redux/slices/navSlice'
import GOOGLE_MAPS_APIKey from '@env';

const HomeScreen = () => {

    const dispatch = useDispatch();

    return (
        <SafeAreaView style={[tw.bgWhite,tw.hFull]}>
            <View style={[tw.p5]}>
                <Image
                style={{
                    width:100,height:100,resizeMode: 'contain'
                }}
                source={{uri: 'https://links.papareact.com/gzs'
                }}
                
                />
            </View>

            <GooglePlacesAutocomplete
                nearbyPlacesAPI="GooglePlacesSearch"
                debounce={400}
                placeholder="Where From?"
                styles={{
                    container:{
                        flex:0,
                    },
                    textInput:{
                        fontSize:18,
                    }
                }}
                onPress={(data,details = null)=>{
                   dispatch(setOrigin({
                       location: details.geometry.location,
                       description: data.description
                   }))

                   dispatch(setDestination(null))

                }}
                 minLength={2}
                 enablePoweredByContainer={false}
                 returnKeyType={"search"}
                query={{
                    key: GOOGLE_MAPS_APIKey,
                    language:'en'
                }}
                />
            <NavOptions />
        </SafeAreaView>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    
})
