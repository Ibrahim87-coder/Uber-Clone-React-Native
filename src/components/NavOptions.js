import React from 'react'
import { View, Text, FlatList,Image, TouchableOpacity } from 'react-native'
import { tw } from 'react-native-tailwindcss'
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/core'

const data =[
    {
        id:'123',
        title:'Get a ride',
        image:'https://links.papareact.com/3pn',
        screen:'MapScreen',
    },
    {
        id:'456',
        title:'Order food',
        image:'https://links.papareact.com/28w',
        screen:'EatsScreen',
    }

]
const NavOptions = () => {

    const navigation = useNavigation();
    return (
            <FlatList
            style={[tw.pL6]}
            data={data}
            horizontal
            keyExtractor={(item)=>item.id}
            renderItem={( {item} )=>(
                    <TouchableOpacity
                        style={[tw.p4,tw.pL6,tw.pB8,tw.pT4,tw.roundedLg,tw.bgGray200,tw.m2,tw.w40,tw.h56]}
                        onPress={()=>navigation.navigate(item.screen)}
                    >
                        <View>
                            <Image
                            style={{width:120, height:120, resizeMode:"contain"}}

                            source={{uri: item.image}}

                            />
                            <Text style={[tw.mT2,tw.textLg,tw.fontSemibold]}>{item.title}</Text>
                            <View style={[tw.itemsCenter]}>
                                <Icon
                                    style={[tw.p2,tw.bgBlack,tw.roundedFull,tw.w10,tw.mT1]}
                                    name="arrow-right"
                                    color='#fff'
                                    type='feather'
                                    size={18}
                                />
                            </View>

                           
                            {/* <Icon   name="arrowright" size={30} color="#900" /> */}
                        </View>
                    </TouchableOpacity>
                )}
            />
    )
}

export default NavOptions;