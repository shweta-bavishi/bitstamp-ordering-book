import React, {useContext} from 'react';
import {StyleSheet} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import {SPACING, TYPOGRAPHY} from '../constants';
import {ThemeContext} from '../theme';
import {connect} from 'react-redux';
import {changeConversionType} from '../store/actions';

const DropdownComponent = ({data, value, onChangeValue}) => {
  const {theme} = useContext(ThemeContext);
  return (
    <Dropdown
      style={styles.dropdown(theme)}
      placeholderStyle={TYPOGRAPHY.bodyText(theme)}
      selectedTextStyle={TYPOGRAPHY.bodyText(theme)}
      data={data}
      maxHeight={300}
      labelField="label"
      valueField="value"
      value={value}
      onChange={item => onChangeValue(item.value)}
    />
  );
};

const styles = StyleSheet.create({
  dropdown: theme => ({
    margin: SPACING.medium,
    height: 50,
    borderBottomColor: theme.black,
    borderBottomWidth: 0.5,
  }),
});

const mapStateToProps = state => ({
  value: state.bids.conversionType,
});

const mapDispatchToProps = dispatch => {
  return {
    onChangeValue: conversionType =>
      dispatch(changeConversionType(conversionType)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DropdownComponent);
