import React, {useEffect} from 'react';
import {View, Text, Button, FlatList, ActivityIndicator} from 'react-native';
import {useTheme} from 'react-native-paper';
import styles from '../styles';

export const ProductsListComponent = (props) => {
  const {colors} = useTheme();
  useEffect(() => {
    goForAxios();
  }, [axiosData]);
  const {
    goForAxios,
    axiosData,
    renderItem,
    FlatListItemSeparator,
    loading,
  } = props;
  return (
    <View style={styles.list}>
      {
        <FlatList
          data={axiosData}
          ItemSeparatorComponent={FlatListItemSeparator}
          renderItem={(item) => renderItem(item)}
          keyExtractor={(item) => item.id.toString()}
        />
      }
      {loading && (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color={colors.primary} />
        </View>
      )}
    </View>
  );
};
