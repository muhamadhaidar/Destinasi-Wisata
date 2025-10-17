import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface DestinationHeaderProps {
  image: any;
  location: string;
  temperature: string;
  onBack: () => void;
}

const DestinationHeader: React.FC<DestinationHeaderProps> = ({
  image,
  location,
  temperature,
  onBack,
}) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <View style={styles.overlay} />

      <View style={styles.content}>
        <View style={styles.topBar}>
          <TouchableOpacity onPress={onBack} style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} color="#fff" />
          </TouchableOpacity>

          <View style={styles.weatherWidget}>
            <Ionicons name="sunny-outline" size={24} color="white" />
            <Text style={styles.weatherText}>{temperature}</Text>
          </View>
        </View>

        <View style={styles.bottomContent}>
          <View style={styles.ratingContainer}>
            <Ionicons name="star" size={16} color="#fff" />
            <Text style={styles.ratingText}>5.0</Text>
          </View>

          <Text style={styles.title}>{location}</Text>

          <Text style={styles.subtitle}>
            From crystal-clear waters to breathtaking sunsets, {location} is calling! Explore hidden islands, swim with manta rays, and create memories that last a lifetime
          </Text>
        </View>
      </View>
    </View>
  );
};

export default DestinationHeader;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    height: 480,
  },
  image: {
    width: '100%',
    height: '100%',
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    resizeMode: 'cover',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.25)',
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  content: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'space-between',
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  backButton: {
    padding: 8,
  },
  weatherWidget: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(90, 90, 90, 0.75)',
    borderRadius: 50,
    paddingVertical: 6,
    paddingHorizontal: 16,
    gap: 8,
  },
  weatherText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '500',
  },
  bottomContent: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    width: 70,
    marginBottom: 10,
  },
  ratingText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 5,
  },
  title: {
    color: '#fff',
    fontSize: 34,
    fontWeight: '700',
    marginBottom: 5,
  },
  subtitle: {
    color: '#fff',
    fontSize: 14,
    lineHeight: 20,
    width: '100%',
  },
});