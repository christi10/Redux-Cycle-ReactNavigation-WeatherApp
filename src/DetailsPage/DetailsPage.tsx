import React, {useCallback, useEffect} from 'react';
import {Text, View} from 'react-native';

export function DetailsScreen() {
  console.log('Mount');
  const fetchData = useCallback(() => {
    fetch('https://dummyjson.com/products')
      .then(response => response.json())
      .then(json => console.log(json));
  }, []);
  useEffect(() => {
    fetchData();
    console.log('fetched data:', fetchData());
  }, [fetchData]);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
    </View>
  );
}
