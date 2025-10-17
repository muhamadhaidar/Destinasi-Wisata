import React, { useState } from 'react';
// Import 'TouchableOpacity' untuk tombol "View All"
import { View, ScrollView, Text, StyleSheet, TouchableOpacity } from 'react-native'; 
import DestinationHeader from '../components/DestinationHeader';
import ReviewCard from '../components/ReviewCard';
import RecommendationCard from '../components/RecommendationCard';
import PriceSection from '../components/PriceSection';

const DetailScreen = ({ navigation }: any) => {
  const [quantity, setQuantity] = useState(1);
  const pricePerTrip = 10000;

  const recommendations = [
    // ... (data rekomendasi kamu tetap sama)
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

  // === DATA REVIEW DIBUAT JADI ARRAY ===
  const reviews = [
    {
      id: 1,
      user: 'Haidar Soleh',
      review: 'Masya Allah amazing yahh, best experience in my life very very worth it i like it!',
    },
    {
      id: 2,
      user: 'Alif Starboy',
      review: 'Very good very well, super recommended!',
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 160 }}>
        <DestinationHeader
          image={require('../assets/images/LabuanBajo.jpg')}
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

          {/* === BAGIAN REVIEW === */}

          <ReviewCard
            user={reviews[0].user}
            review={reviews[0].review}
          />

          <View style={styles.reviewFooter}>
            <View style={styles.fadedReview}>
              <ReviewCard
                user={reviews[1].user}
                review={reviews[1].review}
              />
            </View>
            
            <TouchableOpacity style={styles.viewAllButton} onPress={() => { /* Nanti diisi logika pindah halaman */ }}>
              <Text style={styles.viewAllText}>View All</Text>
            </TouchableOpacity>
          </View>

          {/* === AKHIR DARI BAGIAN REVIEW === */}


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

      <PriceSection
        style={styles.priceSection} 
        quantity={quantity}
        price={pricePerTrip}
        onAdd={() => setQuantity(quantity + 1)}
        onMinus={() => quantity > 1 && setQuantity(quantity - 1)}
      />
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
    marginTop: -20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
  },
  countryRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 10,
  },

  // === STYLE BENDERA DIUBAH DI SINI ===
  flagContainer: {
    width: 20, // Diubah dari 24 (bikin sama dgn height)
    height: 20, // Diubah dari 16 (bikin sama dgn width)
    borderWidth: 0.5,
    borderColor: '#ccc',
    overflow: 'hidden',
    borderRadius: 10, // Diubah dari 2 (bikin setengah dari width/height)
  },
  // === AKHIR PERUBAHAN STYLE BENDERA ===

  flagRed: { flex: 1, backgroundColor: '#FF0000' },
  flagWhite: { flex: 1, backgroundColor: '#FFFFFF' },
  countryText: { fontSize: 14, color: '#333' },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 15 },
  
  reviewFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', 
    marginTop: -15, 
    paddingHorizontal: 5, 
    gap: 20, 
  },
  fadedReview: {
    opacity: 0.3, 
    transform: [{ translateY: 10 }], 
  },
  viewAllButton: {
    backgroundColor: '#E5E4DE', 
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 9999, 
    zIndex: 10, 
  },
  viewAllText: {
    color: '#333',
    fontWeight: '600',
    fontSize: 14,
  },

  sectionTitle: { fontWeight: 'bold', fontSize: 16, marginTop: 20, marginBottom: 10 },
  
  priceSection: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});