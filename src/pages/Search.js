import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {globalStyles} from '../utils/styles';

const Search = ({navigation}) => {
  const [search, setSearch] = useState();
  const [result, setResult] = useState();
  const [notFound, setNotFound] = useState(false);
  const [loading, setLoading] = useState(false);

  const searchItem = search => {
    if (search == '') {
      return false;
    } else {
      setLoading(true);
      fetch(`http://192.168.1.5/api-movies/public/film/search/${search}`)
        .then(response => response.json())
        .then(json => {
          if (json.status == '404') {
            setResult(null);
          } else {
            setResult(json);
            console.log(json);
          }
          setLoading(false);
        })
        .catch(error => console.error(error));
    }
  };

  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('home');
          }}>
          <View style={styles.buttonBack}>
            <Icon name="arrow-back" size={24} color="#000" />
          </View>
        </TouchableOpacity>
        <View style={styles.searchContainer}>
          <Icon name="search" size={24} color="#c3c3c3" style={styles.icon} />
          <TextInput
            placeholder="Cari film"
            style={styles.input}
            autoFocus
            autoCapitalize="none"
            placeholderTextColor="#c3c3c3"
            onChangeText={text => setSearch(text)}
            onSubmitEditing={() => searchItem(search)}
          />
        </View>
      </View>
      {loading ? (
        <ActivityIndicator />
      ) : result === null ? (
        <Text style={{marginTop: 20}}>Maaf, Data film tidak ada...</Text>
      ) : (
        <FlatList
          data={result}
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
                  <Text
                    style={{...globalStyles.bodyText, alignSelf: 'flex-end'}}>
                    More
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.divider} />
            </View>
          )}
          ListFooterComponent={() => <View style={{height: 70}} />}
        />
      )}
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    flex: 1,
  },
  searchContainer: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 25,
    marginTop: 20,
    marginBottom: 5,
    borderColor: '#bfbdb8',
    borderWidth: 1,
  },
  icon: {marginLeft: 10},
  input: {
    fontSize: 14,
    fontWeight: '600',
    flex: 1,
    marginLeft: 5,
    paddingRight: 30,
    fontFamily: 'Montserrat-Regular',
  },
  buttonBack: {
    alignItems: 'center',
    marginRight: 10,
    marginTop: 10,
  },
  card: {
    marginTop: 18,
  },
  poster: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
});
