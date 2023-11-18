import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const UserProfileScreen =(navigation)=> {
  return (
    <View>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Text style={styles.Text}>
          User Profile
        </Text>
      </View>
   </View>
  )
}
const styles = StyleSheet.create({
  Text: {
    fontWeight: '600',
    justifyContent: 'center',
    fontSize: 26,
    alignContent: 'center',
    textAlign: 'center',
    color: '#e65332',
    borderColor: 'white',
    backgroundColor: '#fab3a2',
    fontWeight: 'bold',
    marginTop: 40,
    width: '40%',
    borderRadius: 20,
    borderWidth: 2
  }
})
export default UserProfileScreen
