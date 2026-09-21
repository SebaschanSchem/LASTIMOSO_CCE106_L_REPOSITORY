import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import students from '../../data/students';

export default function StudentDetail() {
  const { id } = useLocalSearchParams();
  const student = students.find((s) => s.id === String(id));

  if (!student) {
    return (
      <View style={styles.notFound}>
        <Text style={styles.notFoundText}>Student not found.</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: student.image }} style={styles.image} />
      <Text style={styles.name}>{student.name}</Text>

      <View style={styles.detailBox}>
        <View style={styles.row}>
          <Text style={styles.label}>Course</Text>
          <Text style={styles.value}>{student.course}</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.row}>
          <Text style={styles.label}>Student ID</Text>
          <Text style={styles.value}>{student.id}</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#f2f2f2',
    flexGrow: 1,
  },
  image: {
    width: 180,
    height: 180,
    borderRadius: 90,
    backgroundColor: '#e0e0e0',
    marginTop: 12,
  },
  name: {
    fontSize: 26,
    fontWeight: '700',
    color: '#1a1a1a',
    marginTop: 18,
    marginBottom: 24,
    textAlign: 'center',
  },
  detailBox: {
    width: '100%',
    backgroundColor: '#ffffff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#d9d9d9',
    paddingHorizontal: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
  },
  divider: {
    height: 1,
    backgroundColor: '#e5e5e5',
  },
  label: {
    fontSize: 15,
    color: '#777777',
  },
  value: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1a1a1a',
  },
  notFound: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  notFoundText: {
    fontSize: 18,
    color: '#555555',
  },
});
