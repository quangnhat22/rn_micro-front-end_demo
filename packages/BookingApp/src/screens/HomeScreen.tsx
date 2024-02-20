import {View, Text, StyleSheet, ScrollView, Alert} from 'react-native';
import React from 'react';
import {Button} from 'react-native-paper';

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Featured Services</Text>
        <Button
          mode="contained-tonal"
          onPress={() => Alert.alert('Not implemented yet')}>
          See All
        </Button>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    flex: 1,
  },
});

export default HomeScreen;
