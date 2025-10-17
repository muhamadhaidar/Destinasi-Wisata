import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ViewStyle } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface PriceSectionProps {
  quantity: number;
  price: number;
  onAdd: () => void;
  onMinus: () => void;
  style?: ViewStyle; // Tambahkan 'style' prop agar bisa diposisikan dari parent
}

const PriceSection: React.FC<PriceSectionProps> = ({
  quantity,
  price,
  onAdd,
  onMinus,
  style, // Ambil 'style' prop
}) => {
  const total = price * quantity;

  return (
    // Terapkan 'style' prop di sini
    <View style={[styles.container, style]}>
      {/* Buat 'topRow' untuk menampung Qty dan Total secara horizontal */}
      <View style={styles.topRow}>
        {/* Kontainer Kuantitas (Qty) */}
        <View style={styles.qtyContainer}>
          <TouchableOpacity onPress={onMinus} style={styles.qtyButtonMinus}>
            <Ionicons name="remove" size={20} color="#000" />
          </TouchableOpacity>
          <Text style={styles.qtyText}>{quantity}</Text>
          <TouchableOpacity onPress={onAdd} style={styles.qtyButtonAdd}>
            <Ionicons name="add" size={20} color="#fff" />
          </TouchableOpacity>
        </View>

        {/* Kontainer Total */}
        <View style={styles.totalContainer}>
          <Text style={styles.totalLabel}>Total Amount</Text>
          {/* Ubah format 'total' agar sesuai (misal: 10.000) */}
          <Text style={styles.totalValue}>
            ${total.toLocaleString('de-DE')}
          </Text>
        </View>
      </View>

      {/* Tombol 'Book Now' dipindah ke bawah 'topRow' */}
      <TouchableOpacity style={styles.bookButton}>
        <Text style={styles.bookText}>Book Now</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PriceSection;

const styles = StyleSheet.create({
  // 'container' diubah total untuk background transparan dan layout vertikal
  container: {
    backgroundColor: '#131E2E80', // Background transparan gelap
    flexDirection: 'column', // Layout diubah jadi vertikal (TopRow dulu, baru Button)
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 30, // Padding bawah lebih besar untuk safe area
  },
  // Style baru untuk 'topRow'
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20, // Jarak ke tombol 'Book Now'
  },
  // 'qtyContainer' diubah (background dihilangkan, dll)
  qtyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16, // Jarak antar tombol dan teks
  },
  // Style 'qtyButton' dipecah jadi dua (Add & Minus) karena beda warna
  qtyButtonAdd: {
    backgroundColor: '#ffffffff', // Warna oranye
    width: 36,
    height: 36,
    borderRadius: 18, // Jadi bulat
    alignItems: 'center',
    justifyContent: 'center',
  },
  qtyButtonMinus: {
    backgroundColor: '#F97316', // Warna putih
    width: 36,
    height: 36,
    borderRadius: 18, // Jadi bulat
    alignItems: 'center',
    justifyContent: 'center',
  },
  // 'qtyText' diubah warnanya jadi putih dan lebih besar
  qtyText: {
    fontWeight: '700',
    fontSize: 24,
    color: '#FFFFFF',
  },
  // 'totalContainer' diubah agar rata kanan
  totalContainer: {
    alignItems: 'flex-end', // Rata kanan
  },
  // 'totalLabel' diubah warnanya
  totalLabel: {
    color: '#B0B0B0', // Abu-abu muda
    fontSize: 14,
  },
  // 'totalValue' diubah warna dan ukurannya
  totalValue: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '700',
  },
  // 'bookButton' diubah jadi full-width dan pill shape
  bookButton: {
    backgroundColor: '#F97316', // Oranye (disamakan dengan tombol +)
    paddingVertical: 16,
    borderRadius: 9999, // Jadi pill/kapsul
    alignItems: 'center',
  },
  // 'bookText' diperbesar font-nya
  bookText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 18,
  },
});