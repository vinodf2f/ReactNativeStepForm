import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import StepForm from './src/pages/stepForm';

const App = ({params}) => (
  <SafeAreaView style={styles.container}>
    <StepForm />
  </SafeAreaView>
);

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
