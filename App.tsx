import React from 'react'
import TrainingPlans from './src/components/TrainingPlans'
import store from './src/store/store'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, SafeAreaView } from 'react-native'
import { persistStore } from 'redux-persist'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import navigation from './src/settings/navigation'

export default function App() {
  const persistor = persistStore(store)
  const Stack = createNativeStackNavigator()

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <SafeAreaView style={styles.container}>
            <StatusBar style="auto" />
            {navigation.map((nav) => (
              <Stack.Navigator>
                <Stack.Screen
                  key={nav.name}
                  name={nav.name}
                  component={nav.component}
                />
              </Stack.Navigator>
            ))}
          </SafeAreaView>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})
