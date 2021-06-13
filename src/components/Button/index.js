import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

export default function CustomButton({
  onClick,
  label,
  fullWidth = true,
  ...rest
}) {
  return (
    <TouchableOpacity
      {...rest}
      style={[styles.button, fullWidth && {width: '100%'}, {...rest.style}]}>
      <Text style={styles.buttonLabel}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'orange',
    padding: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonLabel: {
    fontSize: 16,
    fontWeight: '600',
  },
});
