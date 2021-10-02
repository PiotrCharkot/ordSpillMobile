import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import styles from "./styles";
import RankingItem from "../../components/RankingItem";

const RankingScreen = () => {
  const [getRanking, setGetRanking] = useState(null);
  const [showRanking, setShowRanking] = useState(true);

  useEffect(() => {
    const fetchingRanking = async () => {
      const response = await fetch(
        "https://acidic-heavy-caterpillar.glitch.me/gettingPoints"
      );
      setGetRanking(await response.json());
    };
    fetchingRanking();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>TOPPSPILLERE</Text>
      </View>
      <FlatList
        style={styles.list}
        data={getRanking}
        keyExtractor={(item) => item.userID.toString()}
        renderItem={({ item }) => <RankingItem params={item} />}
      />
    </View>
  );
};

export default RankingScreen;
