import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {globalStyles} from '../utils/styles';
import {API} from '../utils/global';

const Home = ({navigation}) => {
  const [film, setFilm] = useState();

  useEffect(() => {
    getMoviesFromApi();
  }, []);

  const getMoviesFromApi = () => {
    return fetch(`${API}/film`)
      .then(response => response.json())
      .then(json => {
        setFilm(json);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={globalStyles.header}>New Movies</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('search');
          }}>
          <Icon name="search" size={28} color="#000" />
        </TouchableOpacity>
      </View>
      <FlatList
        data={film}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <View style={styles.card}>
            <Image
              source={{
                uri: item.image,
              }}
              style={[styles.poster, styles.shadow]}
            />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: 10,
              }}>
              <Text style={globalStyles.titleText}>{item.judul}</Text>

              <View style={{flexDirection: 'row'}}>
                {[...Array(5)].map((x, i) =>
                  i < parseInt(item.rating) / 2 ? (
                    <Icon name="star" size={18} color="#FBDA3A" />
                  ) : (
                    <Icon name="star" size={18} color="#D3D2D7" />
                  ),
                )}
              </View>
            </View>
            <View
              style={{
                marginTop: 10,
              }}>
              <Text style={globalStyles.bodyText2}>{item.genre}</Text>
              <Text
                style={{...globalStyles.bodyText, marginTop: 3}}
                numberOfLines={2}>
                {item.sinopsis}
              </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('detail', {data: item})}>
                <Text style={{...globalStyles.bodyText, alignSelf: 'flex-end'}}>
                  More
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.divider} />
          </View>
        )}
        ListFooterComponent={() => <View style={{height: 70}} />}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    paddingHorizontal: 32,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  card: {
    marginTop: 18,
  },
  poster: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  shadow: {
    elevation: 9,
    shadowColor: '#52006A',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2.5,
    elevation: 4,
  },
  divider: {
    height: 3,
    backgroundColor: '#F6F6F6',
    marginTop: 4,
  },
});
