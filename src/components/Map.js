import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MapView ,{Marker} from 'react-native-maps'
import { tw } from 'react-native-tailwindcss'
import { useSelector } from 'react-redux'
import { selectOrigin } from '../redux/slices/navSlice'

const Map = () => {


    const origin = useSelector(selectOrigin);
   return (
    <MapView
       style={[tw.flex1]}
       mapType='mutedStandard'
       region={{
         latitude: origin.location.lat,
         longitude: origin.location.long,
         latitudeDelta: 0.015,
         longitudeDelta: 0.0121,
       }}
       
     >

    {origin?.location &&(
        <Marker
            coordinate={{
                latitude: origin.location.lat,
                longitude: origin.location.long,
            }}
            title="Origin"
            description={origin.description}
            identifier="origin"
            />
    )}

     </MapView>

     
    )
}

export default Map

const styles = StyleSheet.create({

})
