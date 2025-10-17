// DestinationHeader.tsx (Diperbarui lagi sesuai Image 2)

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
      {/* Overlay tetap di sini untuk efek gelap transparan */}
      <View style={styles.overlay} />

      {/* Konten utama yang mengapung di atas gambar */}
      <View style={styles.content}>
        {/* Baris paling atas: Tombol Kembali dan Widget Suhu */}
        <View style={styles.topBar}>
          {/* Tombol Kembali di kiri atas */}
          <TouchableOpacity onPress={onBack} style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} color="#fff" />
          </TouchableOpacity>

          {/* Widget Cuaca di kanan atas */}
          <View style={styles.weatherWidget}>
            <Ionicons name="sunny-outline" size={24} color="white" /> {/* Ikon sesuai Image 2 */}
            <Text style={styles.weatherText}>{temperature}</Text>
          </View>
        </View>

        {/* Konten di bagian bawah gambar (Judul, Subtitle, Rating) */}
        <View style={styles.bottomContent}>
          {/* Rating Bintang */}
          <View style={styles.ratingContainer}>
            <Ionicons name="star" size={16} color="#fff" />
            <Text style={styles.ratingText}>5.0</Text> {/* Hardcode rating, bisa dijadikan prop */}
          </View>

          {/* Judul Lokasi */}
          <Text style={styles.title}>{location}</Text>

          {/* Subtitle / Deskripsi */}
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
    // Tinggi kontainer disesuaikan agar gambar terlihat penuh,
    // mirip dengan Image 2 yang tidak ada border di atas
    height: 480, // Sesuaikan ini jika gambar Anda punya aspek rasio berbeda
  },
  image: {
    width: '100%',
    height: '100%', // Mengisi penuh container
    borderBottomLeftRadius: 0, // Tidak ada radius di bawah gambar di Image 2
    borderBottomRightRadius: 0,
    resizeMode: 'cover', // Pastikan gambar mencakup seluruh area
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.25)', // Sedikit lebih gelap dari Image 1
    borderBottomLeftRadius: 0, // Tidak ada radius di overlay juga
    borderBottomRightRadius: 0,
  },
  content: {
    position: 'absolute',
    top: 0, // Mulai dari paling atas
    left: 0,
    right: 0,
    bottom: 0, // Mengisi seluruh area gambar
    justifyContent: 'space-between', // Untuk memisahkan topBar dan bottomContent
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 60, // Sesuaikan padding atas untuk menghindari status bar
  },
  backButton: {
    // Tidak ada background untuk tombol kembali di Image 2
    padding: 8, // Sedikit padding agar mudah disentuh
  },
  weatherWidget: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(90, 90, 90, 0.75)', // Warna abu-abu semi-transparan
    borderRadius: 50, // Bentuk kapsul
    paddingVertical: 6, // Padding vertikal lebih kecil
    paddingHorizontal: 16, // Padding horizontal lebih kecil
    gap: 8, // Jarak antar ikon dan teks
  },
  weatherText: {
    color: '#fff',
    fontSize: 18, // Ukuran font lebih kecil dari sebelumnya, sesuai Image 2
    fontWeight: '500',
  },
  bottomContent: {
    paddingHorizontal: 20,
    paddingBottom: 40, // Padding dari bawah gambar
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)', // Background rating semi-transparan
    borderRadius: 20, // Rounded corners
    paddingHorizontal: 10,
    paddingVertical: 5,
    width: 70, // Lebar fixed untuk rating
    marginBottom: 10, // Jarak ke judul
  },
  ratingText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 5,
  },
  title: {
    color: '#fff',
    fontSize: 34, // Lebih besar dari sebelumnya, mirip Image 2
    fontWeight: '700',
    marginBottom: 5,
  },
  subtitle: {
    color: '#fff',
    fontSize: 14, // Lebih kecil dari sebelumnya
    lineHeight: 20, // Memberi sedikit jarak antar baris
    width: '100%', // Memakai lebar penuh
  },
});