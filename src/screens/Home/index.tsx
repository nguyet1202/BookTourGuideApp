import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Dimensions,
  FlatList,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import MainLayout from '../../shared/MainLayout';
import Banner from '../../shared/Banner';
import Header from '../../shared/Header';
import RecommendPost from '../RecommendPost';
import images from '../../assets/image';
import Hotplaces from '../Hotplaces';
import React, {useContext, useState, useEffect} from 'react';
import {PostContext} from '../../context/PostContext';
import CardItem from '../../component/CardItem';

const windowHeight = Dimensions.get('window').height;
const width = Dimensions.get("window").width;


const Home = () => {
  const navigation = useNavigation();
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
      if(datasearched.length===0){

        setIsSearch(true)
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
    <MainLayout>
      <View style={{width: '100%'}}>
        <Header />
        <Banner />
        <ScrollView style={styles.mainContent}>
          <View style={styles.bodyTop}>
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
            <View>
              <Image
                style={styles.iconFilter}
                source={images.icons.filterIcon}
              />
            </View>
          </View>
          {isSearch && 
          renderEmpty()}
          {!dataSearch ? (
            <>
              <View style={styles.topmain}>
                <Text
                  style={{color: '#FF7029', fontSize: 18, fontWeight: 'bold'}}>
                  Đề Xuất Cho Bạn
                </Text>
                <RecommendPost />
              </View>
              <View style={styles.topmain}>
                <Text
                  style={{color: '#FF7029', fontSize: 18, fontWeight: 'bold'}}>
                  Khám phá
                </Text>
                <Hotplaces />
              </View>
            </>
          ) : (
            <View style={styles.topmain}>
              <View style={styles.containerSearch}>
            {dataSearch.map((item: any, index: number) => (
              <View key={index}>
                <CardItem item={item} />
              </View>
            ))}
          </View>
            </View>
          )}
        </ScrollView>
      </View>
    </MainLayout>
  );
};

export default Home;

const styles = StyleSheet.create({
  containerSearch: {
    width: width,
    height:"auto",
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom:270,
    // justifyContent: 'space-between',
  },
  emptyMessageStyle: {
    textAlign: 'center',
    fontSize:20,
    fontWeight: 'bold',
   
  },
  container: {
    width: '92%',
    marginLeft: 21,
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
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    overflow: 'hidden',
  },
  topmain: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 10,
    paddingTop: 20,
  },
  seeAllBtn: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  hotplaces: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 0,
    paddingRight: 25,
    paddingBottom: 15,
    paddingTop: 7,
    marginLeft: 10,
    marginTop: 15,
  },
  bodyTop: {
    width: '83%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 40,
    marginLeft: 25,
  },
  inputContainer: {
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#ECE8E8',
    borderRadius: 50,
    height: 40,
    width: 300,
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
  iconFilter: {
    width: 25,
    height: 20,
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
