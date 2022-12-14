import React, {useContext} from 'react';
import {TouchableOpacity} from 'react-native';
import {ThemeContext} from '../theme';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {NAVIGATION_TO_LOGIN_SCREEN} from '../navigation/routes';
import {connect} from 'react-redux';
import {logoutUser, clearData} from '../store/actions';

const LogoutComponent = ({navigation, onLogout, resetData}) => {
  const {theme} = useContext(ThemeContext);
  const onSignout = () => {
    resetData();
    onLogout();
    navigation.navigate(NAVIGATION_TO_LOGIN_SCREEN);
  };
  return (
    <TouchableOpacity onPress={onSignout}>
      <Icon name={'logout'} size={25} color={theme.white} />
    </TouchableOpacity>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    onLogout: () => dispatch(logoutUser),
    resetData: () => dispatch(clearData()),
  };
};

export default connect(null, mapDispatchToProps)(LogoutComponent);
