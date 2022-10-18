import React, {useContext} from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import {ThemeContext} from '../theme';

const Spinner = () => {
  const {theme} = useContext(ThemeContext);
  return (
    <View style={[styles.container, styles.horizontal]}>
      <ActivityIndicator size="large" color={theme.primaryDark} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});

export default Spinner;
