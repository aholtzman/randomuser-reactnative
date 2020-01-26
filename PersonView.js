import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, FlatList, Image, Button } from 'react-native'

export default ({ ...props }) => {
  const person = props.navigation.state.params.person
  const genId = person.gender[0].toUpperCase() + person.gender.slice(1).toLowerCase()
  const namePosessive = person.name.first[person.name.first.length - 1] === 's' ? `${person.name.first}'` : `${person.name.first}'s`
  const birthday = new Date(person.dob.date)
  const now = new Date()
  const image = person.picture.large
  let message = 'test test'

  if (birthday.getMonth() !== now.getMonth()) {
    message = (birthday.getMonth() > now.getMonth()) ? 'has yet to occur' : 'already happened'
  }
  else if (birthday.getDate() !== now.getDate()) {
    message = (birthday.getDate() > now.getDate()) ? 'has yet to occur' : 'already happened'
  }
  else {
    message = 'is today(!)'
  }

  return (
    <View style={styles.container}>
      <Image style={{width: 250, height: 250, borderRadius: 250, borderWidth: 1, borderColor:'dimgrey'}} source={{ uri: image }} />
      <Text style={{fontSize:25, padding:25, fontWeight:'700'}}>{person.name.first} {person.name.last}</Text>
      <Text style={styles.text}>Gender: {genId}</Text>
      <Text style={styles.text}>Country: {person.location.country}</Text>
      <Text style={styles.text}>Birthdate: {new Date(person.dob.date).toLocaleString('en-US', { month: 'long', day: 'numeric', year: 'numeric'})}</Text>
      <Text style={styles.text}>{namePosessive} birthday {message} {message === 'is today(!)' ? '' : 'this year.'}</Text>
      <View style={{height: 2, width: '100%', backgroundColor: '#fff', padding:20}}/>
      <Button
        title="Back To List"
        onPress={() => props.navigation.goBack()}
        style={{paddingTop:80}}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width:'100%',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 40
  },
  text: {
    padding: 5,
    color:'dimgrey',
    fontSize:17
  }
});
