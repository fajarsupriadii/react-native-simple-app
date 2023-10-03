import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, Button, StyleSheet } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
import axios from 'axios';
import { useSelector } from 'react-redux';

const ExploreScreen = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const authToken = useSelector((state) => state.auth.authToken);
  const urlBe = useSelector((state) => state.auth.urlBe);
  const tableHeader = [
    'Client Name', 'Item', 'Amount'
  ];

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
      <Text style={styles.heading}>Data Order</Text>
      {loading ? (
        <ActivityIndicator size="large" color="blue" />
      ) : (
        // <View>
        //   {data.map((item) => (
        //     <Text key={item.order_id}>{item.client_name} - {item.item} - {item.amount}</Text>
        //   ))}
        // </View>
        <Table borderStyle={{borderWidth: 2, borderColor: '#3E92CC'}}>
          <Row data={tableHeader} style={styles.tableHead} textStyle={styles.tableText} />
          {data.map((item) => (
            <Row 
              data={[
                item.client_name,
                item.item,
                item.amount
              ]} 
              textStyle={styles.tableText} 
            />
          ))}
        </Table>
      )}
      <Button title="Refresh Data" onPress={fetchData} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
  },
  tableHead: {
    height: 40,
    backgroundColor: '#E6FDFF'
  },
  tableText: {
    margin: 6
  }
});

export default ExploreScreen;
