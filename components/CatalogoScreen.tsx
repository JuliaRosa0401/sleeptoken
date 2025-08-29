import React from "react";
import { View, Text, FlatList, StyleSheet, Image } from "react-native";
import catalogo from "../catalogo.json";

export default function CatalogoScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/sleeptokenlogo.png')} 
        style={styles.headerImage}
      />
      
      <Text style={styles.title}>Discografia </Text>

      <FlatList
        data={catalogo}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
            <View style={styles.card}>
            <Image
                source={{ uri: item.imagem }}
                style={styles.cardImage}
                resizeMode="cover"
            />
            <Text style={styles.cardTitle}>{item.titulo}</Text>
            <Text style={styles.cardSubtitle}>{item.subtitulo}</Text>
            <Text style={styles.cardYear}>{item.ano}</Text>
            </View>
        )}
        numColumns={2} 
        columnWrapperStyle={{ justifyContent: "space-between" }} 
        
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7fff9ff",
    padding: 20,
    paddingTop: 60,
  },
  headerImage: {
    width: '100%',
    height: 45,
    resizeMode: 'contain',
    marginBottom: 20,
  },

  title: {
    fontSize: 28,
    fontFamily: "CinzelBold",
    color: "#000000ff",
    textAlign: "center",
    marginBottom: 30,
    letterSpacing: 3,
    textTransform: "uppercase",
  },
  card: {
    backgroundColor: "#1a1a1a",
    borderRadius: 12,
    padding: 4,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#333",
    shadowColor: "#000",
    shadowOpacity: 0.6,
    shadowRadius: 8,
    alignItems: "center",
    width: "40%", 

},
cardImage: {
  width: "100%",
  height: 180, 
  borderRadius: 10,
  marginBottom: 10,
},

  cardTitle: {
    fontSize: 20,
    fontFamily: "CinzelBold",
    color: "#e6e6e6",
    marginBottom: 6,
    textAlign: "center",
  },
  cardSubtitle: {
    fontSize: 16,
    fontFamily: "CinzelRegular",
    color: "#a3a3a3",
    marginBottom: 4,
    fontStyle: "italic",
    textAlign: "center",
  },
  cardYear: {
    fontSize: 14,
    fontFamily: "CinzelRegular",
    color: "#666",
    textAlign: "center",
  },
});
