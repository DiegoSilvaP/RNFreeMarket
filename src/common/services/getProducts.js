import React, {Component} from 'react';
import {ProductsListComponent} from '../components/productsList';
import axios from 'axios';
import {View, Text, TouchableOpacity} from 'react-native';
import {Card, Paragraph, Title} from 'react-native-paper';
import styles from '../styles';

class ProductsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      axiosData: null,
      navigation: props.navigation,
    };
  }

  goForAxios = () => {
    this.setState({
      fromFetch: false,
      loading: true,
    });
    axios
      .get('https://freemarketfunc.azurewebsites.net/api/getProducts')
      .then((response) => {
        this.setState({
          loading: false,
          axiosData: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  _onPressItem = (data) => {
    console.log(data);
  };

  renderItem = (data) => {
    return (
      <TouchableOpacity
        style={styles.list}
        onPress={() => this._onPressItem(data)}>
        <Card elevation={5}>
          {data.item.image ? (
            <Card.Cover
              source={{uri: data.item.image}}
              style={{
                height: 170,
                width: 170,
                resizeMode: 'center',
                alignSelf: 'center',
              }}
            />
          ) : null}
          <Card.Content>
            <Paragraph>{data.item.title}</Paragraph>
            <Title style={{color: 'green'}}>$ {data.item.price}</Title>
            <Paragraph>Envio gratis</Paragraph>
          </Card.Content>
        </Card>
      </TouchableOpacity>
    );
  };

  render() {
    const {loading, axiosData} = this.state;
    return (
      <ProductsListComponent
        goForAxios={this.goForAxios}
        loading={loading}
        axiosData={axiosData}
        renderItem={this.renderItem}
      />
    );
  }
}

export default ProductsList;
