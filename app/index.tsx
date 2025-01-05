import { Link } from "expo-router";

import { StyleSheet, Text, View,TextInput , Pressable} from "react-native";

const Index=()=>{
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.textLine}>Flexcellence</Text>
      </View>
      <View style={styles.box}>
        <Text>Enter Username</Text>
        <TextInput
          placeholder="Enter the Username"
          style={styles.username}
        />
      </View>
      <View style={styles.box}>
        <Text>Enter Password</Text>
        <TextInput 
          placeholder="Enter Password"
          style={styles.username}
          secureTextEntry
        />
      </View>
      <Pressable style={styles.login}>
        <Text style={styles.text}>
          <Link href={"/home"}>Login</Link>
        </Text>
      </Pressable>
    </View>
  )
}

export default Index

const styles=StyleSheet.create({
  container:{
    flex:1,
    flexDirection:"column",
    backgroundColor:"white",
    justifyContent:"center",
    alignItems:"center",
  },
  textLine:{
    color:"orange",
    fontFamily:"Roboto",
    fontWeight:"bold",
    fontSize:30
  },
  username:{
    width:200,
    height:40,
    borderWidth:1,
    margin:10,
    borderRadius:10,
    padding:10,
  },
  box:{
    flexDirection:"row",
    alignItems:"center"
  },
  login:{
    backgroundColor:"#62bcf5",
    width:70,
    padding:10,
    borderRadius:10,
  },
  text:{
    color:"white",
  }
})