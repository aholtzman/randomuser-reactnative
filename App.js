import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import HomeView from './HomeView'
import PersonView from './PersonView'

const RootStack = createStackNavigator({
  Home: HomeView,
  Person: PersonView,
}, {
  initialRouteName: 'Home',
})

const AppContainer = createAppContainer(RootStack)

export default AppContainer
