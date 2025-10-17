import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface ReviewCardProps {
  user: string;
  review: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ user, review }) => {
  return (
    <View style={styles.container}>
      <View style={styles.userInfo}>
        <Image source={require('../assets/images/avatar.jpg')} style={styles.avatar} />
        <Text style={styles.name}>{user}</Text>
      </View>
      <Text style={styles.text}>{review}</Text>
    </View>
  );
};

export default ReviewCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginBottom: 20,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 20,
    marginRight: 10,
  },
  name: {
    fontWeight: '600',
    fontSize: 13,
    color: '#333',
  },
  text: {
    color: '#555',
    fontSize: 12,
    lineHeight: 18,
  },
});
