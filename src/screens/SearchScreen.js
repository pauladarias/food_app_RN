import  React, { useState } from "react"
import { View, Text, StyleSheet } from "react-native"
import SearchBar from "../components/SearchBar"
import useResults from "../hooks/useResults"
import ResultsList from "../components/ResultsList"

const SearchScreen = () => {
  const [term, setTerm] = useState("")
  const [searchApi, results, errorMessage] = useResults()

  console.log(results)
  
  const filterResultsByPrice = (price) => {
    return results.filter(result  => {
      console.log(result.price === price)
      return result.price === price
    }) 
  }

  return <View>
    <SearchBar 
      term={term} 
      onTermChange={(newTerm) => {setTerm(newTerm)}}
      onTermSubmit={() => searchApi(term)}
    />
    {errorMessage ? <Text>{errorMessage}</Text> : null}
    <Text>We have found {results.length}</Text>
    <ResultsList results={filterResultsByPrice('$')} title="CostEffective"/>
    <ResultsList results={filterResultsByPrice("$$")}title="Bit Pricier"/>
    <ResultsList results={filterResultsByPrice("$$$")}title="Big Spender"/>
  </View>
}

const styles = StyleSheet.create ({

})

export default SearchScreen