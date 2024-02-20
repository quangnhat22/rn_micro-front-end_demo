import React from 'react';
import {Federated} from '@callstack/repack/client';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

const BookingAppNavigator = React.lazy(() =>
  Federated.importModule('BookingApp', './BookingAppNavigator'),
);

const FallbackComponent = () => (
  <View style={styles.container}>
    <ActivityIndicator color="rgba(56, 30, 114, 1)" size="large" />
  </View>
);

const BookingAppScreen = () => {
  return (
    <React.Suspense fallback={<FallbackComponent />}>
      <BookingAppNavigator />
    </React.Suspense>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default BookingAppScreen;
