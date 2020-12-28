import { createStackNavigator, createAppContainer } from "react-native"
import SearchScreen from "./src/screen(SearchScreen"

const navigator = createStackNavigator ({

  Search: SearchScreen

}, {
  initialRouteName: "Search",
  defaultNavigationOptions: {
    title: "PubMate"
  }
})

export default createAppContainer(navigator)