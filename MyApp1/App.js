import { StyleSheet, Text, View } from 'react-native';
import StatCard from './Component/StatCard';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Custom Dashboard</Text>

      <StatCard
        title="Total Users"
        value="1,240"
        bgColor="#c42756"
      />

      <StatCard
        title="Revenue"
        value="$12,450"
        bgColor="#c9aa20"
      />

      <StatCard
        title="Pending Issues"
        value="3"
        bgColor="#8d3c89"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#12a2bb',
    padding: 20,
  },

  header: {
    fontSize: 26,
    color: '#111827',
    fontWeight: 'bold',
    marginBottom: 15,
    borderBottomWidth: 2,
    borderBottomColor: '#000000',
    textAlign: 'center',
  },
});