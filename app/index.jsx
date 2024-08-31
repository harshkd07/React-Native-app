import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { Icon, Avatar } from "react-native-elements";
import {
  FontAwesome,
  MaterialIcons,
  Entypo,
  Fontisto,
  FontAwesome5,
} from "@expo/vector-icons";
import styles from "./style"; // <-- Import the styles

export default function App() {
  const [showMore, setShowMore] = useState(false);

  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    const loadLikeStatus = async () => {
      try {
        const savedStatus = await AsyncStorage.getItem("isLiked");
        if (savedStatus !== null) {
          setIsLiked(JSON.parse(savedStatus));
        }
      } catch (error) {
        console.error("Failed to load like status", error);
      }
    };
    loadLikeStatus();
  }, []);

  const toggleLike = async () => {
    try {
      const newStatus = !isLiked;
      setIsLiked(newStatus);
      await AsyncStorage.setItem("isLiked", JSON.stringify(newStatus));
    } catch (error) {
      console.error("Failed to save like status", error);
    }
  };

  const handleToggleMore = () => {
    setShowMore(!showMore);
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          style={styles.logo}
          source={require("../assets/images/kreed.png")}
        />
        <View style={styles.headerIcons}>
          <Pressable
            style={({ pressed }) => [
              {
                opacity: pressed ? 0.5 : 1,
              },
            ]}
          >
            <Icon name="bell" type="font-awesome" color="#fff" size={20} />
          </Pressable>
          <Pressable
            style={({ pressed }) => [
              {
                opacity: pressed ? 0.5 : 1,
              },
            ]}
          >
            <Icon
              name="paper-plane"
              type="font-awesome"
              color="#fff"
              size={20}
              style={{ marginLeft: 15 }}
            />
          </Pressable>
        </View>
      </View>

      {/* Profile Card */}
      <View style={styles.card}>
        <View style={styles.profileInfo}>
          <Avatar
            rounded
            size="medium"
            source={{
              uri: "https://play-lh.googleusercontent.com/7Ak4Ye7wNUtheIvSKnVgGL_OIZWjGPZNV6TP_3XLxHC-sDHLSE45aDg41dFNmL5COA",
            }}
          />
          <View style={styles.profileText}>
            <Text style={styles.name}>
              Ravi has played with Parth and 3 others.
            </Text>

            <View style={styles.details}>
              <MaterialIcons name="date-range" size={20} color="#66ff66" />
              <Text style={styles.date}>Feb 15, 2023 </Text>

              <Entypo
                name="location-pin"
                style={{ marginLeft: 10, marginRight: 0 }}
                size={20}
                color="#66ff66"
              />
              <Text style={styles.location}>Tamil Nadu, Chennai</Text>
            </View>
          </View>
          <Pressable
            style={({ pressed }) => [
              {
                opacity: pressed ? 0.5 : 1,
              },
            ]}
          >
            <Icon name="ellipsis-v" type="font-awesome" color="#fff" />
          </Pressable>
        </View>

        {/* Score Cards */}
        <View style={styles.scores}>
          <ScoreCard />
          <ScoreCard />
          <ScoreCard />
        </View>

        {/* Image Section */}
        <Image
          style={styles.matchImage}
          source={{
            uri: "https://images.pexels.com/photos/12969082/pexels-photo-12969082.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          }}
        />

        {/* Description */}
        <Text style={styles.description}>
          The lorem ipsum text is usually a section of a Latin text by Cicero
          with words altered,{" "}
          {showMore &&
            "and this extended text contains more details about the match, including player stats, highlights, and key moments that shaped the outcome of the game."}
          <TouchableOpacity onPress={handleToggleMore}>
            <Text style={styles.more}>{showMore ? " less" : " more..."}</Text>
          </TouchableOpacity>
        </Text>

        {/* Icon Row */}
        <View style={styles.iconRow}>
          <View style={styles.iconContainer}>
            <TouchableOpacity style={styles.iconContainer} onPress={toggleLike}>
              <Fontisto
                name="fire"
                size={24}
                color={isLiked ? "orange" : "gray"}
              />
              <Text style={styles.iconText}>{isLiked ? "1" : "0"}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.iconContainer}>
            <TouchableOpacity style={styles.iconContainer}>
              <FontAwesome5 name="comment" size={24} color="white" />

              <Text style={styles.iconText}>0</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.iconContainer}>
            <TouchableOpacity style={styles.iconContainer}>
              <FontAwesome5 name="share-alt" size={24} color="white" />
              <Text style={styles.iconText}>0</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.card}>
        <View style={styles.profileInfo}>
          <Avatar
            rounded
            size="medium"
            source={{ uri: "https://play-lh.googleusercontent.com/7Ak4Ye7wNUtheIvSKnVgGL_OIZWjGPZNV6TP_3XLxHC-sDHLSE45aDg41dFNmL5COA" }}
          />
          <View style={styles.profileText}>
            <Text style={styles.name}>
              Ravi has played with Parth and 3 others.
            </Text>

            <View style={styles.details}>
              <MaterialIcons name="date-range" size={20} color="#66ff66" />
              <Text style={styles.date}>Feb 15, 2023 </Text>

              <Entypo
                name="location-pin"
                style={{ marginLeft: 10, marginRight: 0 }}
                size={20}
                color="#66ff66"
              />
              <Text style={styles.location}>Tamil Nadu, Chennai</Text>
            </View>
          </View>
          <Pressable
            style={({ pressed }) => [
              {
                opacity: pressed ? 0.5 : 1,
              },
            ]}
          >
            <Icon name="ellipsis-v" type="font-awesome" color="#fff" />
          </Pressable>
        </View>

        {/* Score Cards */}
        <View style={styles.scores}>
          <ScoreCard />
          <ScoreCard />
          <ScoreCard />
        </View>

        {/* Image Section */}
        <Image
          style={styles.matchImage}
          source={{
            uri: "https://images.pexels.com/photos/14605729/pexels-photo-14605729.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          }}
        />

        {/* Description */}
        <Text style={styles.description}>
          The lorem ipsum text is usually a section of a Latin text by Cicero
          with words altered,{" "}
          {showMore &&
            "and this extended text contains more details about the match, including player stats, highlights, and key moments that shaped the outcome of the game."}
          <TouchableOpacity onPress={handleToggleMore}>
            <Text style={styles.more}>{showMore ? " less" : " more..."}</Text>
          </TouchableOpacity>
        </Text>

        {/* Icon Row */}
        <View style={styles.iconRow}>
          <View style={styles.iconContainer}>
            <TouchableOpacity style={styles.iconContainer} onPress={toggleLike}>
              <Fontisto
                name="fire"
                size={24}
                color={isLiked ? "orange" : "gray"}
              />
              <Text style={styles.iconText}>{isLiked ? "1" : "0"}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.iconContainer}>
            <TouchableOpacity style={styles.iconContainer}>
              <FontAwesome5 name="comment" size={24} color="white" />

              <Text style={styles.iconText}>0</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.iconContainer}>
            <TouchableOpacity style={styles.iconContainer}>
              <FontAwesome5 name="share-alt" size={24} color="white" />
              <Text style={styles.iconText}>0</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const ScoreCard = () => (
  <View style={styles.scoreCard}>
    <View style={styles.cardData}>
    <View style={styles.avatarbg}>
    <Avatar
      rounded
      size={25}
      source={{
        uri: "https://img.freepik.com/premium-photo/drawing-boy-with-dark-hair-black-jacket_662214-103887.jpg",
      }}
    />
  </View><View style={styles.avatarbg}>
  <Avatar
    rounded
    size={25}
    source={{
      uri: "https://img.freepik.com/premium-photo/drawing-boy-with-dark-hair-black-jacket_662214-103887.jpg",
    }}
  />
</View>

      <View>
        <Text style={styles.teamText}>Team 1</Text>
        <Text style={styles.scoreText}>20</Text>
      </View>
    </View>

    <Text style={styles.vsText}>V/s</Text>

    <View style={styles.cardData}>
      <View>
        <Text style={styles.teamText}>Team 2</Text>
        <Text style={styles.scoreText}>18</Text>
      </View>
      <View style={styles.avatarbg}>
        <Avatar
          rounded
          size={25}
          source={{
            uri: "https://img.freepik.com/premium-photo/drawing-boy-with-dark-hair-black-jacket_662214-103887.jpg",
          }}
        />
      </View>
      <View style={styles.avatarbg}>
        <Avatar
          rounded
          size={25}
          source={{
            uri: "https://img.freepik.com/premium-photo/drawing-boy-with-dark-hair-black-jacket_662214-103887.jpg",
          }}
        />
      </View>
    </View>
  </View>
);
