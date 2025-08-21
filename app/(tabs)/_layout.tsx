import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";

export default function TabsLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: "#ffacdcd8",
                headerStyle: {
                    backgroundColor: "#25292e",
                },
                headerShadowVisible: false,
                headerTintColor: "white",
                tabBarStyle: {
                    backgroundColor: "#25292e",
                },
            }}
        >
            <Tabs.Screen 
                name="index"
                options={{
                    title: "Home",
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

        </Tabs>
    )
}