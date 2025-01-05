import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Home = () => {
  return (
    <View style={styles.container}>
      <Text>This the Home page</Text>
    </View>
  )
}

export default Home

const styles=StyleSheet.create({
    container:{
      flex:1,
      flexDirection:"column",
      backgroundColor:"white",
      justifyContent:"center",
      alignItems:"center",
    }
})