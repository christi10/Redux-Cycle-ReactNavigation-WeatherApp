import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Button, StyleSheet, Text, View} from 'react-native';

export function HomeScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.homeScreen}>
      <Text style={{color: '#add8e6'}}>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('DetailsScreen')}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  homeScreen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
});
