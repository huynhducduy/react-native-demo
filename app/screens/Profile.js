import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';

import AuthContainer from '../AuthContainer';
import clearAuth from '../utils/auth/clearAuth';

export default function Profile() {
  const auth = AuthContainer.useContainer();
  function logout() {
    clearAuth().then(() => {
      auth.setLoggedIn(false);
    });
  }
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'top',
        alignItems: 'center',
        marginTop: 10,
      }}
    >
      <Button onPress={logout} title="Logout" />
    </View>
  );
}
