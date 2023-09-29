import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, Button, StyleSheet } from 'react-native';
import axios from 'axios';
import { useSelector } from 'react-redux';

const ExploreScreen = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const authToken = useSelector((state) => state.auth.authToken);
  const urlBe = useSelector((state) => state.auth.urlBe);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(urlBe + 'order', {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      setData(response.data.results);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Fetched Data</Text>
      {loading ? (
        <ActivityIndicator size="large" color="blue" />
      ) : (
        <View>
          {data.map((item) => (
            <Text key={item.order_id}>{item.client_name} - {item.item} - {item.amount}</Text>
          ))}
        </View>
      )}
      <Button title="Refresh Data" onPress={fetchData} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default ExploreScreen;
