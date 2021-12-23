import React from "react"
import { Text, Image, StyleSheet, View, ImageBackground,SafeAreaView ,TouchableOpacity,ScrollView } from "react-native"
import { useSelector, useDispatch } from 'react-redux';
import { API_CALL, FAVOURATE_LIST, REMOVE_LIST } from "../store/action/Count"
import Icon from 'react-native-vector-icons/Feather';
const ProfileDetails = (props) => {
  const details = useSelector(state => state)
  const dispatch = useDispatch()
  const { characterDetails, character } = details.character
  const ifExist = (favCharacter) => {
    const { favourateList } = details.character
    if (favourateList.filter(item =>
      item.char_id === favCharacter.char_id).length > 0
    ) {
      return true;
    }
    return false

  }
  const onFavoorateItem = (item) => {
    dispatch({ type: FAVOURATE_LIST, payload: item })
  }
  const removeFromList = (character) => {
    const { favourateList } = details.character
    const filteredList = favourateList.filter(item => item.char_id != character.char_id)
    dispatch({ type: REMOVE_LIST, payload: filteredList })
  }
  return (
    <SafeAreaView style={styles.CONTAINER}>
      <Image
        source={{ uri: character.img }}
        resizeMode={'stretch'}
        blurRadius={1}
        style={styles.BACKGROUND_IMAGE}
      />
      <View style={styles.HEADER_CONTAINER}>
      <TouchableOpacity
      onPress={()=>props.navigation.goBack()}
        >
          <Icon name="arrow-left" size={30}
                            color="#ffffff"
                            style={{ padding: 20 }}
                            onPress={() => props.navigation.goBack()} />
        </TouchableOpacity>
        <TouchableOpacity
         onPress={() => ifExist(character) ? removeFromList(character) : onFavoorateItem(character)}
        >
          <Image
            source={ifExist(character) ?
               require('../assets/HEART_FILLED.png')
             : require('../assets/HEART.png')}
            style={styles.HEART_STYLE}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
      <View style={styles.IMG_POSITION}>
        <View style={styles.PROFILE_CONTAINER}>
          <Image
            source={{ uri: character.img }}
            resizeMode={'stretch'}
            style={styles.IMG_STYLE}
          />
          <Text style={styles.TEXT_STYLE}>{character.name}</Text>
          <Text style={styles.NICKNAME_TEXT_STYLE}>{character.nickname}</Text>
          <View>
            <Text style={styles.COMMON_TITLE_STYLE}>Potrayed</Text>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <Text style={styles.COMMON_VALUE_STYLE}>{character.portrayed}</Text>
            <Text style={styles.COMMON_VALUE_STYLE}>{character.birthday}</Text>
            </View>
            <View>
            <Text style={styles.COMMON_TITLE_STYLE}>Occupation</Text>
            <Text style={styles.COMMON_VALUE_STYLE}>{character.occupation[0]}</Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
   
  )
}
const styles = StyleSheet.create({
  CONTAINER: {
    flex: 1,
    backgroundColor: '#000000',
  },
  BACKGROUND_IMAGE: {
    width: "100%",
    height: "60%",
    opacity: 0.5,
    overflow: 'hidden'
  },
  PROFILE_CONTAINER: {
    alignItem: "center",
    justifyContent: 'center',
    paddingHorizantal: 40
  },
  IMG_POSITION: {
    position: 'absolute',
    top: "12%",
    bottom: 10,
    left: 0,
    right: 0
  },
  TEXT_STYLE: {
    color: '#ffffff',
    fontSize:26,
    fontWeight:'bold',
    marginBottom:5,
    textAlign:'center'
  },
  NICKNAME_TEXT_STYLE: {
    color: '#ffffff',
    fontSize:16,
    textAlign:'center',
    marginBottom:20
  },
  IMG_STYLE: {
    marginLeft: 75,
    marginTop:75,
    marginBottom:20,
    width: "60%",
    height: "45%",
    borderRadius: 10
  },
  HEART_STYLE: {
    margin: 15,
    height: 35,
    width: 35,
  },
  BACK_STYLE:{
    margin: 15,
    height: 35,
    width: 35,
  },
  COMMON_TITLE_STYLE:{
    color: '#18CA75',
    fontSize:16,
    marginLeft:20,
    marginBottom:10
  },
  COMMON_VALUE_STYLE:{
    color: '#ffffff',
    fontSize:16,
    marginLeft:20,
    marginBottom:20
  },
  HEADER_CONTAINER:{
    position: 'absolute',
    flexDirection: 'row',
    marginTop:10,
    justifyContent: 'space-between',
    top: "0%",
    bottom: 10,
    left: 0,
    right: 0
  }
},
)
export default ProfileDetails;