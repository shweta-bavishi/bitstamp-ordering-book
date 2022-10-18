import React, {useContext} from 'react';
import {ScrollView, StyleSheet, View, LogBox} from 'react-native';
import {Table as ReactTable, Row} from 'react-native-table-component';
import {SPACING, TYPOGRAPHY} from '../constants';
import {ThemeContext} from '../theme';

export default Table = ({columns, data}) => {
  const {theme} = useContext(ThemeContext);
  LogBox.ignoreAllLogs();
  return (
    <View style={styles.inputContainer}>
      <ReactTable>
        <Row
          data={columns}
          style={styles.head(theme)}
          textStyle={TYPOGRAPHY.subheadingText(theme)}
        />
      </ReactTable>
      <ScrollView>
        <ReactTable>
          {data.map((rowData, index) => (
            <Row
              key={index}
              data={rowData}
              style={styles.row(theme, index)}
              textStyle={styles.rowText(theme)}
            />
          ))}
        </ReactTable>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: SPACING.large,
  },
  head: theme => ({
    backgroundColor: theme.primaryLight,
    padding: SPACING.medium,
  }),
  row: (theme, index) => ({
    padding: SPACING.small,
    backgroundColor: index % 2 ? theme.light100 : theme.light300,
  }),
  rowText: theme => ({
    ...TYPOGRAPHY.bodyText(theme),
    color: theme.BLACK,
  }),
});
