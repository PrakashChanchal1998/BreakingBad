//import { CommonActions } from "@react-navigation/native";
import React,{Component} from "react"
import { Text, Image, StyleSheet, View, ImageBackground,SafeAreaView ,TextInput,TouchableOpacity,ScrollView } from "react-native"
import { useSelector, useDispatch } from 'react-redux';
import { API_CALL, FAVOURATE_LIST, REMOVE_LIST } from "../store/action/Count"
import _ from "lodash"
import { ListView } from '../components/ListView'
import { useState } from "react";
import { SvgXml } from 'react-native-svg';
import Heart from "../assets/HEART.svg"
import HeartFilled from "../assets/HEART_FILLED.svg"
export default class ListCard extends Component {
    
    constructor(props) {
        super(props)
    }
    render()
    {
        const {data,navigation,onclicked,ifExist,removeFromList,onFavoorateItem}=this.props
    return (
      <View style={styles.LIST_CONTAINER}>
         <TouchableOpacity
            onPress={() =>onclicked(data)}
          >
        <Image
          source={{ uri: data.img }}
          style={styles.IMG_SIZE}
        />
        </TouchableOpacity>
        <View style={{ flexDirection: 'row', width: "90%", padding: 15, justifyContent: "space-between" }}>
          <View>
            <Text style={styles.TEXTSIZE} numberOfLines={1}>{data.name}</Text>
            <Text style={styles.TEXTSTLYE}>{data.nickname}</Text>
          </View>
          <TouchableOpacity
            onPress={() => ifExist(data) ? removeFromList(data) : onFavoorateItem(data)}
          >
             <SvgXml width="38" height="38" xml={ifExist(data) ?HeartFilled:Heart} style={styles.HEART_STYLE} />
          </TouchableOpacity>
        </View>
      </View>

    )
    }
  }
  const styles = StyleSheet.create({
    CONTAINER: {
        flex: 1,
        backgroundColor: '#000000'
    },
    HORIZANTALAYOUT: {
        flexDirection: 'row',
        justifyContent: "space-between",
    },
    IMAGE_STYLE: {
        margin: 15,
        height: 35,
        width: 35,
    },
    HEART_STYLE: {
      justifyContent:"flex-end",
      marginTop:10,
      marginLeft:10,
      MarginBottom:10,
  },
    LIST_CONTAINER: {
        margin: 10,
        marginLeft: 15,
        flexWrap: "wrap",
        alignContent: "center",
        marginTop: 40,
        width: "40%",
      },
      TEXTSIZE: {
        marginTop: 5,
        fontSize: 17,
        color: '#FFFFFF',
        flexWrap: "wrap",
        alignContent: "center",
        marginLeft: 15,
      },
      TEXTSTLYE: {
        marginTop: 5,
        fontSize: 14,
        color: '#FFFFFF',
        flexWrap: "wrap",
        alignContent: "center",
        marginLeft: 15,
      },
      IMG_SIZE: {
        height: 200,
        width: "100%",
        flexWrap: "wrap",
        alignContent: "center",
        marginLeft: 15,
        borderRadius: 10
      }
})