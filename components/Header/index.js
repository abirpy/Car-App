import React from 'react';
import {View, Image} from 'react-native';

import styles from './styles';

export default Header = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('/Users/tahsin/TeslaClone/assets/images/logo.png')} />
      <Image style={styles.menu} source={require('/Users/tahsin/TeslaClone/assets/images/menu.png')} />
    </View>
  );
};

