import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Fontisto';
import {globalStyles} from '../utils/styles';

const DetailMovie = ({navigation, route}) => {
  const {data} = route.params;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="angle-left" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={globalStyles.H3}>Detail Movie</Text>
        <Icon name="favorite" size={24} color="#000" />
      </View>
      <Image source={{uri: data.image}} style={styles.poster} />
      <View>
        <Text style={{...globalStyles.titleText, marginTop: 10}}>
          {data.judul}
        </Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{...globalStyles.bodyText2, fontSize: 15}}>
            Director: {data.director} | {data.rating}{' '}
            <Icon name="star" size={15} color="#FBDA3A" />
          </Text>
          <Text style={globalStyles.bodyText2}>Country: {data.negara}</Text>
        </View>
        <Text
          style={[
            globalStyles.titleText,
            {
              marginTop: 10,
            },
          ]}>
          Description
        </Text>
        <Text
          style={{
            ...globalStyles.bodyText,
            textAlign: 'justify',
            marginTop: 5,
          }}>
          {data.deskripsi}
        </Text>
      </View>
    </ScrollView>
  );
};

export default DetailMovie;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 32,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 12,
  },
  poster: {
    width: '80%',
    height: 350,
    alignSelf: 'center',
    marginTop: 20,
    borderRadius: 25,
  },
});
