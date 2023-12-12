import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  View,
  Image,
} from 'react-native';
import React, { useEffect, useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import { PostContext } from '../../context/PostContext';
import CardItem from '../../component/CardItem';

const RecommendPost = () => {
  const {isListRecomPostsloading,dataRecommend,getListRecomPosts} = useContext(PostContext);
  const navigation = useNavigation();
  useEffect(() => {
    getListRecomPosts();
    return () => {};
  }, [isListRecomPostsloading]);
  const renderEmpty = () => {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyMessageStyle}>Empty</Text>
      </View>
    );
  };

  return (
    <>
      {isListRecomPostsloading ? (
        <ActivityIndicator color="#00ff00" size="large" />
      ) : (
        <FlatList
          style={styles.container}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          scrollEnabled={true}
          ListEmptyComponent={renderEmpty}
          contentContainerStyle={styles.contentContainer}
          data={dataRecommend}
          keyExtractor={item => item.post_id}
          // renderItem={renderItem}
          renderItem={({item}) => {
            return <CardItem item={item} />;
          }}
        />
      )}
    </>
  );
};

export default RecommendPost;

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  contentContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  img: {
    width: 75,
    height: 75,
    borderRadius: 20,
    opacity: 0.9,
    // borderRadius: 100,
  },
  item: {
    position: 'relative',
    width: 90,
    display: 'flex',
    flexDirection: 'row',
    height: 120,
    marginTop: 0,
  },
  tilte: {
    position: 'absolute',
    top: 80,
    textAlign: 'center',
    width: 80,
    height: 60,
    opacity: 1.5,
    borderRadius: 7,
  },
  tilteText: {
    textAlign: 'center',
    color: '#044040',
    fontSize: 11,
    fontWeight: 'bold',
    paddingTop: 6,
  },
  emptyMessageStyle: {
    textAlign: 'center',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink',
  },
  buttoninfor: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 5,
    paddingRight: 5,
  },
  smallinfor: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingLeft: 3,
    paddingRight: 3,
  },
});
