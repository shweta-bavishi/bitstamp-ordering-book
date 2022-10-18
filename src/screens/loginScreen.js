import React, {useContext, useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {connect} from 'react-redux';
import {Button} from '../common';
import InputContainer from '../components/inputContainer';
import {ThemeContext} from '../theme';
import {SPACING, TYPOGRAPHY} from '../constants';
import {useInput} from '../hooks';
import {NAVIGATION_TO_DASHBOARD_SCREEN} from '../navigation/routes';
import {loginUser} from '../store/actions/';

const LoginScreen = ({onLogin, navigation}) => {
  const {theme} = useContext(ThemeContext);
  const [userName, onChangeUserName] = useInput('');
  const [password, onChangePassword] = useInput('');
  const [invalidSubmission, setInvalidSubmission] = useState(false);

  const onLoginClick = () => {
    if (userName && password) {
      setInvalidSubmission(false);
      onLogin(userName);
      navigation.navigate(NAVIGATION_TO_DASHBOARD_SCREEN);
    } else {
      setInvalidSubmission(true);
    }
    onChangeUserName('');
    onChangePassword('');
  };

  return (
    <View style={styles.container(theme)}>
      <Text style={styles.header(theme)}>Welcome back!</Text>
      <InputContainer
        imageUrl={'../resources/emailicon.png'}
        placeholder={'User Name'}
        iconName={'email'}
        value={userName}
        onChange={onChangeUserName}
        invalid={!userName && invalidSubmission}
      />
      <InputContainer
        imageUrl={'../resources/lockicon.png'}
        placeholder={'Password'}
        iconName={'lock'}
        value={password}
        onChange={onChangePassword}
        secureTextEntry={true}
        invalid={!password && invalidSubmission}
      />

      <Button title="Login" onPress={onLoginClick} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: theme => ({
    justifyContent: 'space-around',
    flex: 0.5,
    margin: SPACING.medium,
    backgroundColor: theme.backgroundColor,
  }),
  header: theme => ({
    ...TYPOGRAPHY.subheadingText(theme),
    alignSelf: 'center',
  }),
});

const mapDispatchToProps = dispatch => {
  return {
    onLogin: userName => dispatch(loginUser(userName)),
  };
};

export default connect(null, mapDispatchToProps)(LoginScreen);
