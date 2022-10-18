import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ThemeContext} from '../theme';
import {SPACING, TYPOGRAPHY} from '../constants';
import {Dropdown} from '../common';
import {BitStampTable} from '../components/';
import {CONVERSION_TYPE} from '../constants/';

const DashboardScreen = () => {
  const {theme} = useContext(ThemeContext);
  return (
    <View style={styles.container(theme)}>
      <Text style={styles.header(theme)}>Welcome to Bitstamp order book !</Text>
      <Dropdown
        data={[
          {label: 'BTC → USD', value: CONVERSION_TYPE.BTC_USD},
          {label: 'ETH → USD', value: CONVERSION_TYPE.ETH_USD},
          {label: 'LTC → USD', value: CONVERSION_TYPE.LTC_USD},
        ]}
      />
      <BitStampTable />
    </View>
  );
};

const styles = StyleSheet.create({
  container: theme => ({
    paddingVertical: SPACING.large,
    backgroundColor: theme.backgroundColor,
  }),
  header: theme => ({
    ...TYPOGRAPHY.headingText(theme),
    alignSelf: 'center',
    color: theme.black,
  }),
});

export default DashboardScreen;
