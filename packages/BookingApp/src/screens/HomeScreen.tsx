import {View, StyleSheet, ScrollView, Alert, FlatList} from 'react-native';
import React from 'react';
import {Avatar, Button, Card, Divider, Text} from 'react-native-paper';
import recentBookings from '../data/recentBooking.json';
import upcomingBookings from '../data/upcomingBooking.json';

const renderAppointment = ({item}: any) => (
  <Card mode="contained">
    <Card.Title
      titleVariant="titleMedium"
      subtitleVariant="bodyMedium"
      title={`${item.title} • ${item.provider}`}
      subtitle={`${item.date} ${item.time}`}
      left={props => <Avatar.Icon {...props} icon="calendar" />}
    />
    <Card.Actions>
      <Button mode="text" onPress={() => {}}>
        Cancel
      </Button>
      <Button mode="contained" onPress={() => {}}>
        Reschedule
      </Button>
    </Card.Actions>
  </Card>
);

const renderDivider = () => <Divider style={styles.divider} />;

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text variant="titleLarge" style={styles.headerTitle}>
          Featured Services
        </Text>
        <Button
          mode="contained-tonal"
          onPress={() => Alert.alert('Not implemented yet')}>
          See All
        </Button>
      </View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={recentBookings.data}
        renderItem={renderAppointment}
        ItemSeparatorComponent={renderDivider}
        contentContainerStyle={styles.contentContainer}
      />
      <View style={styles.header}>
        <Text variant="titleLarge" style={styles.headerTitle}>
          Upcoming Appointments
        </Text>
        <Button mode="contained-tonal" onPress={() => {}}>
          See All
        </Button>
      </View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={upcomingBookings.data}
        renderItem={renderAppointment}
        ItemSeparatorComponent={renderDivider}
        contentContainerStyle={styles.contentContainer}
      />
      <View style={styles.header}>
        <Text variant="titleLarge" style={styles.headerTitle}>
          Recent Appointments
        </Text>
        <Button
          mode="contained-tonal"
          onPress={() => Alert.alert('Not implemented yet')}>
          See All
        </Button>
      </View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={recentBookings.data}
        renderItem={renderAppointment}
        ItemSeparatorComponent={renderDivider}
        contentContainerStyle={styles.contentContainer}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingHorizontal: 16,
  },
  header: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    flex: 1,
  },
  divider: {
    backgroundColor: 'transparent',
    width: 16,
  },
});

export default HomeScreen;
