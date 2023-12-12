import {
  StyleSheet,
  Text,
  SafeAreaView,
  TextInput,
  ScrollView,
  FlatList,
  ActivityIndicator,
  View,
  Image,
  Dimensions,
} from 'react-native';
import React, {useContext, useState, useEffect, useCallback} from 'react';
import {PostContext} from '../../context/PostContext';
import CardItem from '../../component/CardItem';
import images from '../../assets/image';
import CardSearch from '../../component/CardSearch';
const windowHeight = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const Search = ({navigation}) => {
  // const navigation = useNavigation();
  const {isloading, data, setdata, getListRecomPosts} = useContext(PostContext);
  const [dataSearch, setDataSearch] = useState<any>(null);
  const [isSearch, setIsSearch] = useState<boolean>(false);

  const [search, setSearch] = useState('');
  const searchFilterFunction = (text: string) => {
    if (text !== '') {
      const datasearched = data.filter(item =>
        item.tilte
          .toUpperCase()
          .includes(text.toUpperCase().trim().replace(/\s/g, '')),
      );
      setDataSearch(datasearched);
      if (datasearched.length === 0) {
        setIsSearch(true);
      }
    } else {
      setDataSearch(null);
    }
    setSearch(text);
  };

  useEffect(() => {
    getListRecomPosts();
  }, []);

  const renderEmpty = () => {
    return (
      <View style={styles.mainContent}>
        <Text style={styles.emptyMessageStyle}>Trống</Text>
      </View>
    );
  };

  return (
    <SafeAreaView>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Tìm kiếm"
          underlineColorAndroid="transparent"
          onChangeText={text => searchFilterFunction(text)}
          value={search}
        />
        <View style={styles.IconRounded}>
          <Image
            source={images.icons.searchIcon}
            style={{width: 12, height: 12}}
          />
        </View>
      </View>
      
       {isSearch && 
          renderEmpty()}

            <>
            <FlatList
            style={styles.container}
            numColumns={2}
            data={!dataSearch?data:dataSearch}
            keyExtractor={item => item.post_id}
            renderItem={({item}) => {
              return <CardSearch item={item} navigation={navigation} />;
            }}
          />
            </>

    </SafeAreaView>
  );
};
export default Search;

const styles = StyleSheet.create({
  container: {
    width: '92%',
    marginLeft: 21,
  },
  emptyMessageStyle: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  mainContent: {
    position: 'absolute',
    width: '100%',
    height: windowHeight,
    top: 200,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 80,
    borderTopRightRadius: 80,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  contentContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  inputContainer: {
    paddingLeft: 20,
    paddingRight: 20,
    margin: 20,
    backgroundColor: '#ECE8E8',

    borderRadius: 50,
    height: 40,
    width: '90%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    height: 40,
    width: 180,
    borderColor: '#E0DFDF',
    padding: 5,
  },
  placeholder: {
    color: '#A6A1A1',
  },
  icon: {
    width: 15,
    height: 15,
  },
  IconRounded: {
    padding: 7,
    borderRadius: 100,
    backgroundColor: '#2F80ED',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
