import { StyleSheet, View, Text, FlatList, SafeAreaView } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';
import img1 from "./image/img1.jpg"
import img2 from "./image/img2.jpg"
import img3 from "./image/img3.jpg"
import img4 from "./image/img4.jpg"
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const DATA = [
  {
    id: '1',
    title: ' ',
     Img: img1

  },
  {
    id: '2',
    title: ' ',
    Img: img2
  },
  {
    id: '3',
    title: ' ',
    Img: img3
  },
  {
    id: '4',
    title: ' ',
    Img: img4
  },


];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <Image
    source ={Img}
    >
    </Image>
  </View>
);



const Home = () => {

  const renderItem = ({ item }) => (
   
    <Item title={item.title} />
   
    
  );

  return (
    <SafeAreaView style={styles.container}>
    <FlatList
    numColumns={2}
      data={DATA}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    width:150,
    height:200,
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 8,
    borderTopStartRadius:20,
    borderBottomRightRadius:20,
    borderWidth:2,
    borderColor:"#f6e58d",
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});



export default Home