import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface ReviewCardProps {
  user: string;
  review: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ user, review }) => {
  return (
    <View style={styles.container}>
      {/* === JSX DIUBAH DI SINI === */}
      {/* View baru untuk Avatar + Nama */}
      <View style={styles.userInfo}>
        <Image source={require('../assets/images/avatar.png')} style={styles.avatar} />
        <Text style={styles.name}>{user}</Text>
      </View>
      {/* Teks review sekarang ada di luar View userInfo */}
      <Text style={styles.text}>{review}</Text>
    </View>
  );
};

export default ReviewCard;

const styles = StyleSheet.create({
  // === STYLE DIUBAH DI SINI ===
  container: {
    // 'flexDirection: row' dan 'alignItems: flex-start' dihapus
    // agar layout-nya jadi vertikal (default)
    marginBottom: 10,
  },
  // Style baru untuk baris Avatar + Nama
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6, // Jarak dari nama ke teks review
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  name: {
    fontWeight: '600',
    fontSize: 13,
  },
  text: {
    color: '#555',
    fontSize: 12,
    // 'maxWidth: 260' dihapus agar teksnya bisa full-width
    lineHeight: 18, // Opsional: bikin teks lebih gampang dibaca
  },
});