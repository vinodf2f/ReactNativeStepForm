import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import StepForm from './src/pages/stepForm';
import {store, persistor} from './src/store';

const App = ({params}) => (
  <SafeAreaView style={styles.container}>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StepForm />
      </PersistGate>
    </Provider>
  </SafeAreaView>
);

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
