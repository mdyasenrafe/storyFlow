import React from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export const MainHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image
          source={{uri: 'https://i.ibb.co/9HhhmF7/image.png'}}
          style={styles.profileImage}
        />
        <View style={styles.textContainer}>
          <Text style={styles.nameText}>Jason Smith</Text>
          <Text style={styles.roleText}>Marketplace</Text>
        </View>
      </View>
      <FontAwesome5 name="bars" size={24} color="black" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 32,
  },
  textContainer: {
    marginLeft: 16,
  },
  nameText: {
    color: '#1E1C1A',
    fontSize: 18,
  },
  roleText: {
    color: '#717372',
    fontSize: 15,
  },
});
