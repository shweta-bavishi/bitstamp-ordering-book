import React, {useContext} from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {ThemeContext} from '../theme';
import {SPACING, TYPOGRAPHY} from '../constants';

const Button = ({title, onPress, style}) => {
  const {theme} = useContext(ThemeContext);
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.button(theme), style]}>
        <Text style={styles.title(theme)}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: theme => ({
    flexDirection: 'row',
    padding: SPACING.small,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.primaryDark,
    borderColor: theme.primaryDark,
    borderRadius: 2,
    margin: SPACING.medium,
  }),
  title: theme => ({
    ...TYPOGRAPHY.buttonText,
    color: theme.white,
  }),
});

export default Button;
