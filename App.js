import React, { useState } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Image,
  Alert,
} from "react-native";

export default function App() {
  const [uri, setUri] = useState(require("./src/images/dice1.png"));
  const [uri1, setUri1] = useState(require("./src/images/dice1.png"));
  const [uri2, setUri2] = useState(require("./src/images/dice1.png"));

  const playButtonPressed = () => {
    if (getRandomValue() == 1) {
      setUri(require("./src/images/dice1.png"));
    }
    if (getRandomValue() == 2) {
      setUri(require("./src/images/dice2.png"));
    }
    if (getRandomValue() == 3) {
      setUri(require("./src/images/dice3.png"));
    }
    if (getRandomValue() == 4) {
      setUri(require("./src/images/dice4.png"));
    }
    if (getRandomValue() == 5) {
      setUri(require("./src/images/dice5.png"));
    }
    if (getRandomValue() == 6) {
      setUri(require("./src/images/dice6.png"));
    }

    if (getRandomValue1() == 1) {
      setUri1(require("./src/images/dice1.png"));
    }
    if (getRandomValue1() == 2) {
      setUri1(require("./src/images/dice2.png"));
    }
    if (getRandomValue1() == 3) {
      setUri1(require("./src/images/dice3.png"));
    }
    if (getRandomValue1() == 4) {
      setUri1(require("./src/images/dice4.png"));
    }
    if (getRandomValue1() == 5) {
      setUri1(require("./src/images/dice5.png"));
    }
    if (getRandomValue1() == 6) {
      setUri1(require("./src/images/dice6.png"));
    }

    if (getRandomValue2() == 1) {
      setUri2(require("./src/images/dice1.png"));
    }
    if (getRandomValue2() == 2) {
      setUri2(require("./src/images/dice2.png"));
    }
    if (getRandomValue2() == 3) {
      setUri2(require("./src/images/dice3.png"));
    }
    if (getRandomValue2() == 4) {
      setUri2(require("./src/images/dice4.png"));
    }
    if (getRandomValue2() == 5) {
      setUri2(require("./src/images/dice5.png"));
    }
    if (getRandomValue2() == 6) {
      setUri2(require("./src/images/dice6.png"));
    }
  };

  const getRandomValue = () => {
    return Math.floor(Math.random() * 6) + 1;
  };

  const getRandomValue1 = () => {
    return Math.floor(Math.random() * 6) + 1;
  };

  const getRandomValue2 = () => {
    return Math.floor(Math.random() * 6) + 1;
  };

  return (
    <View style={styles.container}>
      <View style={styles.images}>
        <Image style={styles.diceImg} source={uri} />
        <Image style={styles.diceImg} source={uri1} />
        <Image style={styles.diceImg} source={uri2} />
      </View>

      <TouchableOpacity onPress={() => playButtonPressed()}>
        <Text style={styles.gameButton}>Play Game</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E6425E",
    alignItems: "center",
    justifyContent: "center",
  },
  gameButton: {
    marginTop: 35,
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    borderWidth: 2,
    paddingVertical: 8,
    paddingHorizontal: 40,
    borderRadius: 5,
    borderColor: "#ffffff",
  },
  images: {
    flexDirection: "row",
  },
  diceImg: {
    width: 110,
    height: 110,
  },
});
