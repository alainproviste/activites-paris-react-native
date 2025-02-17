import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Map from '../../screens/map'

const Stack = createNativeStackNavigator()

const MapStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Map' component={Map} />
    </Stack.Navigator>
  )
}

export default MapStack