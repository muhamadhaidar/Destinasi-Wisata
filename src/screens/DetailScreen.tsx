import React, { useState } from 'react';
import { View, ScrollView, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'; 
import DestinationHeader from '../components/DestinationHeader';
import ReviewCard from '../components/ReviewCard';
import RecommendationCard from '../components/RecommendationCard';
import PriceSection from '../components/PriceSection';

const DetailScreen = ({ navigation }: any) => {
  const [quantity, setQuantity] = useState(1);
  const pricePerTrip = 10000;

  const recommendations = [
    {
      id: 1,
      title: 'Phinisi Luxury Private Trip',
      desc: 'Complimentary pick-up from Labuan Bajo Airport or surrounding hotels',
      price: '$3,000 / night',
      rating: 4.8,
      image: require('../assets/images/Phinisi.png'),
    },
    {
      id: 2,
      title: 'Katamaran Hotel & Resort Komodo',
      desc: 'Labuan Bajo, West Manggarai, East Nusa Tenggara',
      price: '$300 / night',
      rating: 4.9,
      image: require('../assets/images/Katamaran.png'),
    },
    {
      id: 3,
      title: 'AYANA Komodo Waecicu Beach',
      desc: 'Labuan Bajo, West Manggarai, East Nusa Tenggara',
      price: '$400 / night',
      rating: 4.9,
      image: require('../assets/images/Ayana.png'),
    },
  ];

  const reviews = [
    {
      id: 1,
      user: 'Haidar Soleh',
      review: 'MasyaAllah amazing yahh, best experience in my life very very worth it i like it!\nVery good very well',
    },
    {
      id: 2,
      user: 'Steve starboy',
      review: 'Very good very well, super recommended!',
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 160 }}>
        <DestinationHeader
          image={require('../assets/images/LabuanBajo.png')}
          location="Labuan Bajo"
          temperature="24°C"
          onBack={() => navigation.goBack()}
        />

        <View style={styles.content}>
          <View style={styles.countryRow}>
            <View style={styles.flagContainer}>
              <View style={styles.flagRed} />
              <View style={styles.flagWhite} />
            </View>
            <Text style={styles.countryText}>Indonesia</Text>
          </View>

          <Text style={styles.title}>Discover the Beauty of Labuan Bajo</Text>

          <ReviewCard
            user={reviews[0].user}
            review={reviews[0].review}
          />

          <View style={styles.fadedReviewFrame}>
            <Image 
              source={require('../assets/images/avatar2.jpg')}
              style={styles.fadedAvatar} 
            />
            <Text style={styles.fadedName}>{reviews[1].user}</Text>
          </View>

          <View style={styles.viewAllContainer}>
            <TouchableOpacity style={styles.viewAllButton}>
              <Text style={styles.viewAllText}>View All</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.sectionTitle}>Recommendation in Bajo</Text>

          {recommendations.map((item) => (
            <RecommendationCard
              key={item.id}
              image={item.image}
              title={item.title}
              desc={item.desc}
              rating={item.rating}
              price={item.price}
            />
          ))}
        </View>
      </ScrollView>

      <View style={styles.priceSection}>
        <PriceSection
          quantity={quantity}
          price={pricePerTrip}
          onAdd={() => setQuantity(quantity + 1)}
          onMinus={() => quantity > 1 && setQuantity(quantity - 1)}
        />
      </View>
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f4ef',
  },
  content: {
    backgroundColor: '#f6f4ef',
    marginTop: -10,
    padding: 20,
    paddingTop: 50,
  },
  countryRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 10,
  },
  flagContainer: {
    width: 20,
    height: 20,
    borderWidth: 0.5,
    borderColor: '#ccc',
    overflow: 'hidden',
    borderRadius: 10,
  },
  flagRed: { flex: 1, backgroundColor: '#FF0000' },
  flagWhite: { flex: 1, backgroundColor: '#FFFFFF' },
  countryText: { fontSize: 14, color: '#333' },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 15 },
  fadedReviewFrame: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    paddingVertical: 10,
    paddingHorizontal: 16,
    marginBottom: 20,
    opacity: 0.3,
    flexDirection: 'row',
    alignItems: 'center',
  },
  fadedAvatar: {
    width: 30,
    height: 30,
    borderRadius: 20,
    marginRight: 10,
  },
  fadedName: {
    fontWeight: '600',
    fontSize: 13,
    color: '#333',
  },
  viewAllContainer: {
    width: '100%',
    alignItems: 'center',
  },
  viewAllButton: { 
    backgroundColor: '#E5E4DE', 
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 9999, 
  },
  viewAllText: { 
    color: '#333',
    fontWeight: '600',
    fontSize: 14,
  },
  sectionTitle: { 
    fontWeight: 'bold', 
    fontSize: 16, 
    marginTop: 20, 
    marginBottom: 10 
  },
  priceSection: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});
