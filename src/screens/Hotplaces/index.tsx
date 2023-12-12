import {
    FlatList,
    StyleSheet,
    Text,
    ActivityIndicator,
    View,
    Dimensions,
  } from 'react-native';
  import React, { useEffect,useContext} from 'react';
  import { PostContext } from '../../context/PostContext';
import CardItemHot from '../../component/CardItemsHot';
  const width = Dimensions.get("window").width;
  const Hotplaces = () => {
    const {isListHotPostsloading,data,getListHotPosts} = useContext(PostContext);
    useEffect(() => {
      getListHotPosts();
    }, []);

    console.log("test",isListHotPostsloading)
    const renderEmpty = () => {
      return (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyMessageStyle}>Empty</Text>
        </View>
      );
    };
  
    return (
      <>
        {isListHotPostsloading ? (
          <ActivityIndicator color="#00ff00" size="large" />
        ) : (
            <View style={styles.container}>
            {data.map((item: any, index: number) => (
              <View key={index}>
                <CardItemHot item={item} />
              </View>
            ))}
          </View>
        )}
      </>
    );
  };
  
  export default Hotplaces;
  
  const styles = StyleSheet.create({
    container: {
        width: width,
        height:"auto",
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom:270,
        // justifyContent: 'space-between',
      },
    contentContainer: {
      flexGrow: 1,
      justifyContent: 'center',
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
  });
  