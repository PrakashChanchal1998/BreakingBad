import React from 'react'
import {View, StyleSheet } from "react-native"
import ListHeader from '../components/ListHeader'
import { useSelector, useDispatch } from 'react-redux';
import { REMOVE_LIST, PROFILE_DETAIL } from "../store/action/Count"
import { ListView } from '../components/ListView'
import ListCard from '../components/ListCard';
const FavourateList = (props) => {
    const details = useSelector(state => state)
    const dispatch = useDispatch()
    
    const removeFromList = (character) => {
        const { favourateList } = details.character
        const filteredList = favourateList.filter(item => item.char_id != character.char_id)
        dispatch({ type: REMOVE_LIST, payload: filteredList })
    }

    const ifExist = (favCharacter) => {
        const { favourateList } = details.character
        if (favourateList.filter(item =>
            item.char_id === favCharacter.char_id).length > 0
        ) {
            return true;
        }
        return false
    }

    const onclicked = (data) => {
        const { navigation } = props
        dispatch({ type: PROFILE_DETAIL, payload: data })
        navigation.navigate('ProfileDetails')
    }
    const { favourateList } = details.character
    return (
        <View style={styles.CONTAINER}>
            <ListHeader
                navigation={props.navigation}
            />
            <ListView
                items={favourateList}
                keyExtractor={item => item.char_id}
                numColumns={2}
                renderItem={({ item }) => {
                    return (
                        <ListCard
                            data={item}
                            navigation={props.navigation}
                            onclicked={() => onclicked(item)}
                            ifExist={() => ifExist(item)}
                            removeFromList={() => removeFromList(item)}

                        />
                    )
                }}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    CONTAINER: {
        flex: 1,
        backgroundColor: '#000000'
    }
})
export default FavourateList
