import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, Button, StyleSheet, ScrollView } from 'react-native';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { DataTable } from 'react-native-paper';

const DatatableScreen = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const authToken = useSelector((state) => state.auth.authToken);
  const urlBe = useSelector((state) => state.auth.urlBe);
  const [page, setPage] = useState(0);
  const [perPageList] = useState([2, 3, 4, 5]);
  const [itemPerPage, itemPerPageChange] = useState(perPageList[3]);
  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(0);
  const [countData, setCountData] = useState(0);

  useEffect(() => {
    fetchData(0, itemPerPage);
  }, [itemPerPage]);

  const fetchData = async (page, perPage) => {
    setPage(page);
    itemPerPageChange(perPage);
    setFrom(page * itemPerPage);
    setTo((page * itemPerPage) + perPage);
    console.log([page, perPage]);
    try {
      setLoading(true);
      console.log(`${urlBe}order?length=${itemPerPage}&start=${page * itemPerPage}`);
      const response = await axios.get(`${urlBe}order?length=${itemPerPage}&start=${page * itemPerPage}`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      setData(response.data.results);
      setCountData(response.data.countData);
    //   console.log(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View vertical={true} style={styles.container}>
      <Text style={styles.heading}>Data Order</Text>
      {loading ? (
        <ActivityIndicator size="large" color="blue" />
      ) : (
        // <View>
        //   {data.map((item) => (
        //     <Text key={item.order_id}>{item.client_name} - {item.item} - {item.amount}</Text>
        //   ))}
        // </View>
        <DataTable>
            <DataTable.Header>
                <DataTable.Title>No</DataTable.Title>
                <DataTable.Title>Client</DataTable.Title>
                <DataTable.Title>Item</DataTable.Title>
                <DataTable.Title>Amount</DataTable.Title>
            </DataTable.Header>

            {data.map((item, index) => (
                <DataTable.Row key={item.order_id}>
                    <DataTable.Cell style={{flex: 1}}>{(index + 1) + (page * itemPerPage)}</DataTable.Cell>
                    <DataTable.Cell style={{flex: 4}}>{item.client_name}</DataTable.Cell>
                    <DataTable.Cell style={{flex: 2}}>{item.item}</DataTable.Cell>
                    <DataTable.Cell  style={{flex: 2}}>{item.amount}</DataTable.Cell>
                </DataTable.Row>
            ))}

            <DataTable.Pagination
                page={page}
                numberOfPages={Math.ceil(countData / itemPerPage)}
                onPageChange={(page) => fetchData(page, itemPerPage)}
                label={`${from + 1} - ${to} of ${countData}`}
                numberOfItemsPerPageList={perPageList}
                onItemsPerPageChange={itemPerPageChange}
                showFastPaginationControls
                selectPageDropdownLabel={'Rows per page'}
            />
        </DataTable>
      )}
      {/* <Button title="Refresh Data" onPress={fetchData} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default DatatableScreen;
