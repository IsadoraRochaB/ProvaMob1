import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {  VideoAudioScreen, AcelerometroScreen, PedometroScreen, MagnetometroScreen, GiroscopioScreen } from "../screens";
import { Ionicons, MaterialCommunityIcons, FontAwesome, Foundation } from "@expo/vector-icons";
import colors from "../styles/colors";
import { Feather } from '@expo/vector-icons';

const Drawer = createDrawerNavigator();

export default function HomeRoute() {
    return (
        <Drawer.Navigator
            screenOption={{
                headerShown: true,
                headerStyle: { backgroundColor: colors.black },
                headerTintColor: colors.black,
                drawerStyle: {
                    backgroundColor: colors.black,
                },
                drawerInactiveTintColor: colors.black,
                drawerActiveTintColor: colors.black,
            }}
        >
            
            <Drawer.Screen
                name="AudioVideo"
                component={VideoAudioScreen}
                options={{
                    drawerLabel: "ÁudioVídeo",
                    drawerIcon: () => (
                        <MaterialCommunityIcons
                            name="video"
                            size={24}
                            color={colors.black}
                        />
                    ),
                }}
            />
            <Drawer.Screen
                name="Acelerometro"
                component={AcelerometroScreen}
                options={{
                    drawerLabel: "Acelerômetro",
                    drawerIcon: () => (
                        <MaterialCommunityIcons
                            name="car"
                            size={24}
                            color={colors.black}
                        />
                    ),
                }}
            />
             <Drawer.Screen
                name="Magnetometro"
                component={MagnetometroScreen}
                options={{
                    drawerLabel: "Magneto",
                    drawerIcon: () => (
                        <FontAwesome
                            name="magnet"
                            size={24}
                            color={colors.black}
                        />
                    ),
                }}
            />

            <Drawer.Screen
                name="Pedometro"
                component={PedometroScreen}
                options={{
                    drawerLabel: "Pedômetro",
                    drawerIcon: () => (
                        <Foundation
                            name="foot"
                            size={24}
                            color={colors.black}
                        />
                    ),
                }}
            />
            <Drawer.Screen
                name="Giroscopio"
                component={GiroscopioScreen}
                options={{
                    drawerLabel: "Gyroscópio",
                    drawerIcon: () => (
                        <FontAwesome
                            name="balance-scale"
                            size={24}
                            color={colors.black}
                        />
                    ),
                }}
            />
        </Drawer.Navigator>
    );
}