//CODE ATTRIBUTION: GeeksforGeeks (no date) TypeScript Tutorial. Available at: https://www.geeksforgeeks.org/search/?gq=TypeScript+Tutorial (Accessed: 11    November 2025). (2)TypeScript (no date) TypeScript for JavaScript Programmers. Available at: https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html (Accessed: 13 November 2025).
 //Code Attribution - W3Schools (no date) TypeScript styling. Available at: https://www.w3schools.com/#gsc.tab=0&gsc.q=typescript%20styling (Accessed: 13 November 2025).
 //Node.js (no date) Working with different filesystems. Available at: https://nodejs.org/en/learn/manipulating-files/working-with-different-filesystems (Accessed: 13 November 2025).


import React from "react";

import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, ImageBackground } from "react-native";

import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { RootStackParamList } from "../type";


type Props = NativeStackScreenProps<RootStackParamList, "Welcome">;


export default function WelcomeScreen({ navigation }: Props) {

  return (

    <SafeAreaView style={styles.container}>

      <ImageBackground

        source={{


        }}

        style={styles.bg}

      >

        <View style={styles.overlay}>

          <View style={styles.center}>

            <Text style={styles.title}>Christoffel</Text>

            <Text style={styles.subtitle}>Enter for some flavour</Text>

            <TouchableOpacity style={styles.cta} onPress={() => navigation.replace("Home")}>

              <Text style={styles.ctaText}>Explore Our Menu</Text>

            </TouchableOpacity>

          </View>

        </View>

      </ImageBackground>

    </SafeAreaView>

  );

}


const styles = StyleSheet.create({

  container: { flex: 1, backgroundColor: "#12100F" },

  bg: { flex: 1, justifyContent: "center" },

  overlay: {

    ...StyleSheet.absoluteFillObject,

    backgroundColor: "rgba(216, 19, 78, 1)",

  },

  center: { alignItems: "center", paddingHorizontal: 24 },

  title: { color: "#f03bfaff", fontSize: 42, fontWeight: "800" },

  subtitle: { color: "#e54a08ff", fontSize: 16, marginTop: 6, marginBottom: 28 },

  cta: {

    backgroundColor: "#c41248ff",

    paddingVertical: 14,

    paddingHorizontal: 44,

    borderRadius: 28,

    elevation: 8,

  },

  ctaText: { color: "#FFFFFF", fontWeight: "900", fontSize: 18 },

});