import { StyleSheet, Text, View } from 'react-native';

export default function StatCard(props) {
  return (
    <View style={[styles.card, { backgroundColor: props.bgColor }]}>
      <Text style={styles.title}>{props.title}</Text>
      <Text style={styles.value}>{props.value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 22,
    borderRadius: 16,
    marginVertical: 10,
    width: '100%',
    borderWidth: 1,
    borderColor: '#000000',
  },

  title: {
    fontSize: 15,
    color: '#E5E7EB',
    fontWeight: '600',
    letterSpacing: 0.5,
  },

  value: {
    fontSize: 30,
    color: '#FFFFFF',
    fontWeight: 'bold',
    marginTop: 6,
  },
});