import React, {useContext} from 'react';
import {View, StyleSheet, TextInput, Text} from 'react-native';
import {ThemeContext} from '../theme';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {SPACING, TYPOGRAPHY} from '../constants';

const InputContainer = ({
  placeholder,
  iconName,
  value,
  onChange,
  secureTextEntry,
  invalid,
}) => {
  const {theme} = useContext(ThemeContext);
  return (
    <View>
      <View style={styles.inputContainer(theme, invalid)}>
        <Icon
          name={iconName}
          size={30}
          color={theme.primaryDark}
          style={styles.iconStyle}
        />
        <TextInput
          style={styles.inputStyle(theme)}
          placeholderTextColor={theme.black}
          placeholder={placeholder}
          value={value}
          onChangeText={onChange}
          secureTextEntry={secureTextEntry}
          autoCapitalize={'none'}
          autoCorrect={'false'}
        />
      </View>
      {invalid && (
        <Text style={styles.errorText(theme)}> * This is a Required field</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: (theme, invalid) => ({
    flexDirection: 'row',
    alignItems: 'flex-end',
    borderBottomWidth: 1,
    borderColor: invalid ? theme.error : theme.border,
    marginHorizontal: SPACING.medium,
  }),
  iconStyle: {
    margin: SPACING.tiny,
    verticalAlign: 'center',
  },
  inputStyle: theme => ({
    height: 30,
    margin: SPACING.tiny,
    textAlignVertical: 'center',
    color: theme.black,
  }),
  errorText: theme => ({
    ...TYPOGRAPHY.bodyText(theme),
    marginTop: SPACING.tiny,
    textAlign: 'center',
    color: theme.error,
  }),
});

export default InputContainer;
