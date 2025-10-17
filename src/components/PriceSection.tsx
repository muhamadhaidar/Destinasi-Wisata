import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ViewStyle } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface PriceSectionProps {
  quantity: number;
  price: number;
  onAdd: () => void;
  onMinus: () => void;
  style?: ViewStyle;
}

const PriceSection: React.FC<PriceSectionProps> = ({
  quantity,
  price,
  onAdd,
  onMinus,
  style,
}) => {
  const total = price * quantity;

  return (
    <View style={[styles.container, style]}>
      <View style={styles.topRow}>
        <View style={styles.qtyContainer}>
          <TouchableOpacity onPress={onMinus} style={styles.qtyButtonMinus}>
            <Ionicons name="remove" size={20} color="#000" />
          </TouchableOpacity>
          <Text style={styles.qtyText}>{quantity}</Text>
          <TouchableOpacity onPress={onAdd} style={styles.qtyButtonAdd}>
            <Ionicons name="add" size={20} color="#fff" />
          </TouchableOpacity>
        </View>

        <View style={styles.totalContainer}>
          <Text style={styles.totalLabel}>Total Amount</Text>
          <Text style={styles.totalValue}>
            ${total.toLocaleString('de-DE')}
          </Text>
        </View>
      </View>

      <TouchableOpacity style={styles.bookButton}>
        <Text style={styles.bookText}>Book Now</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PriceSection;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#131E2E80',
    flexDirection: 'column',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 30,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  qtyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  qtyButtonAdd: {
    backgroundColor: '#ffffffff',
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  qtyButtonMinus: {
    backgroundColor: '#F97316',
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  qtyText: {
    fontWeight: '700',
    fontSize: 24,
    color: '#FFFFFF',
  },
  totalContainer: {
    alignItems: 'flex-end',
  },
  totalLabel: {
    color: '#B0B0B0',
    fontSize: 14,
  },
  totalValue: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '700',
  },
  bookButton: {
    backgroundColor: '#F97316',
    paddingVertical: 16,
    borderRadius: 9999,
    alignItems: 'center',
  },
  bookText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 18,
  },
});
