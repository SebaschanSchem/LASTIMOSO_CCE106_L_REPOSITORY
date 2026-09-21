import { useMemo, useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import { useRouter } from 'expo-router';
import StudentCard from '../Components/StudentCard';
import students from '../data/students';

export default function Home() {
  const [query, setQuery] = useState('');
  const router = useRouter();

  // Real-time, case-insensitive filter by name
  const filteredStudents = useMemo(() => {
    const q = query.trim().toLowerCase();
    return students.filter((s) => s.name.toLowerCase().includes(q));
  }, [query]);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBox}
        placeholder="Search by name"
        value={query}
        onChangeText={setQuery}
        autoCorrect={false}
        clearButtonMode="while-editing"
      />

      <FlatList
        data={filteredStudents}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <StudentCard
            image={item.image}
            name={item.name}
            course={item.course}
            onPress={() => router.push(`/students/${item.id}`)}
          />
        )}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={
          <View style={styles.empty}>
            <Text style={styles.emptyTitle}>No students found.</Text>
            <Text style={styles.emptyText}>
              No name matches "{query}". Try a different search.
            </Text>
          </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    paddingHorizontal: 16,
    paddingTop: 12,
  },
  searchBox: {
    height: 46,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#c9c9c9',
    borderRadius: 10,
    paddingHorizontal: 14,
    fontSize: 16,
    marginBottom: 12,
  },
  listContent: {
    paddingBottom: 24,
  },
  empty: {
    alignItems: 'center',
    marginTop: 48,
    paddingHorizontal: 24,
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333333',
  },
  emptyText: {
    fontSize: 14,
    color: '#777777',
    marginTop: 6,
    textAlign: 'center',
  },
});
