import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";

export default function TabsLayout() {
    return (
        <Tabs
            screenOptions={{
                title: "Home",
                tabBarActiveTintColor: "#ffacdcd8",
                headerStyle: {
                    backgroundColor: "#25292e",
                },
                headerShadowVisible: false,
                headerTintColor: "#bebebeff",
                tabBarStyle: {
                    backgroundColor: "#25292e",
                },
                headerTitleAlign: "center",
            }}
        >
            <Tabs.Screen 
                name="index"
                options={{
                    title: "Player",
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons
                            name={focused ? "play-circle-sharp" : "play-circle-outline"}
                            color={color}
                            size={18} 
                        />
                    ),
                }}
            />
            <Tabs.Screen 
                name="library"
                options={{
                    title: "Library",
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons
                            name={focused ? "list-circle-sharp" : "list-circle-outline"}
                            color={color}
                            size={20} 
                        />
                    ),
                }}
            />
            <Tabs.Screen 
                name="playlist"
                options={{
                    title: "Playlist",
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons
                            name={focused ? "albums-sharp" : "albums-outline"}
                            color={color}
                            size={20} 
                        />
                    ),
                }}
            />

        </Tabs>
    )
}