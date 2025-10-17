import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface RecommendationCardProps {
  title: string;
  desc: string;
  rating: number;
  price: string;
  image: any;
}

const RecommendationCard: React.FC<RecommendationCardProps> = ({
  title,
  desc,
  rating,
  price,
  image,
}) => {
  return (
    <View style={styles.card}>
      <View style={styles.imageWrapper}>
        <Image source={image} style={styles.image} />
      </View>
      <View style={styles.info}>
        <View>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.locationRow}>
            <Ionicons name="location-outline" size={16} color="#fff" />
            <Text style={styles.desc}>{desc}</Text>
          </View>
        </View>
        <View style={styles.bottomContent}>
          <View style={styles.ratingRow}>
            <Ionicons name="star" size={16} color="#fff" />
            <Text style={styles.rating}>{rating}</Text>
          </View>
          <Text style={styles.price}>{price}</Text>
        </View>
      </View>
    </View>
  );
};

export default RecommendationCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#131E2E',
    borderRadius: 23,
    elevation: 5,
    marginTop: 20,
    padding: 8,
  },
  imageWrapper: {
    width: 140,
    height: 140,
    borderRadius: 18,
    overflow: 'hidden',
    marginRight: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  info: {
    flex: 1,
    paddingVertical: 4,
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: '700',
    fontSize: 16,
    color: '#fff',
    marginBottom: 4,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 5,
  },
  desc: {
    fontSize: 13,
    color: '#fff',
    flex: 1,
  },
  bottomContent: {
    marginTop: 10,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  rating: {
    fontSize: 15,
    color: '#fff',
  },
  price: {
    fontSize: 16,
    fontWeight: '700',
    color: '#fff',
    marginTop: 4,
  },
});
