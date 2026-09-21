import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

export default function StudentCard({ image, name, course, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.card, pressed && styles.cardPressed]}
    >
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.course}>{course}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#d9d9d9',
    padding: 12,
    marginBottom: 12,
  },
  cardPressed: {
    backgroundColor: '#ececec',
  },
  image: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#e0e0e0',
  },
  info: {
    marginLeft: 14,
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1a1a1a',
  },
  course: {
    fontSize: 14,
    color: '#666666',
    marginTop: 2,
  },
});
