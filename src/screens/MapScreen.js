import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { tw } from 'react-native-tailwindcss'
import Map from '../components/Map'

const MapScreen = () => {
    return (
        <View>
            

            <View style={[tw.minH1_2]}>
                <Map/>
            </View>
            <View style={[tw.minH1_2]}></View>
            
        </View>
    )
}

export default MapScreen

const styles = StyleSheet.create({
    
})