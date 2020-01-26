import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native'

export default ({ ...props }) => {
  const [ people, setPeople ] = useState([])

  useEffect(() => {
    fetch(`https://randomuser.me/api?results=20&nat=us,ca`)
    .then(x => x.json())
    .then(x => setPeople(x.results))
  }, [])

  const handleListTap = item => {
    props.navigation.navigate('Person', {
    person: item
    })
  }

  FlatListItemSeparator = () => <View style={{height: 0.75, width: '100%', backgroundColor: '#C8C8C8'}}/>

  const usImage = 'https://play.nativescript.org/dist/assets/img/flags/us.png'
  const caImage = 'https://play.nativescript.org/dist/assets/img/flags/ca.png'

  return (
    <View style={styles.container}>
    <Text style={{fontSize:25, padding:10}}>20 People from randomuser.me</Text>
      <FlatList
        data={people}
        style={{width:'100%'}}
        ItemSeparatorComponent={FlatListItemSeparator}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{padding:20, flexDirection: 'row', alignItems:'center'}}
            onPress={() => handleListTap(item)}
            >
            <Image style={{width: 50, height:50, borderRadius: 50, borderWidth: .5, borderColor:'dimgrey'}}  source={{ uri: item.location.country === 'United States' ? usImage : caImage }} />
            <Text style={{paddingLeft:10}}>{item.name.first} {item.name.last}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop:80,
    width:'100%',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
