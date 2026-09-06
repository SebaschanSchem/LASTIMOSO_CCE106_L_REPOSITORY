import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack screenOptions={{ headerStyle: { backgroundColor: '#000000' },
    headerTintColor: '#ffffff' }}>
        <Stack.Screen name="index" options={{ title: 'Home Dashboard' }} />
        <Stack.Screen name="profile" options={{ title: 'Profile' }} />
        <Stack.Screen name="setting" options={{ title: 'Setting' }} />
    </Stack>
  );
}