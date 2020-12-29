import React, { useState, useEffect } from "react"
import { View, Text, StyleSheet, FlatList, Image } from "react-native"
import yelp from "../api/yelp"
import ResultsDetail from "../components/ResultsDetail"

const ResultsShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null)
  const id = navigation.getParam("id")

  console.log(result)
  
  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`)
    setResult(response.data)
  }
  useEffect(() => {
    getResult(id)
  }, [])

  if (!result) {
    return null
  }
  console.log(result.photos)

  return (
    <View>
      <Text style={styles.title}>{result.name}</Text>
      <FlatList 
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image 
            style={styles.image}
            source={ {uri: item }}
            />
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create ({
  title: {
    fontWeight: "bold",
    fontSize: 20,
    marginLeft: 13,
    marginTop: 10
  },
  image: {
    height: 200,
    width: 300,
    margin: 10,
    borderRadius: 5
  }
})

export default ResultsShowScreen