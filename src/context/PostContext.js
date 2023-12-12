import axios from 'axios';
import React, {createContext, useEffect, useState} from 'react';
export const PostContext = createContext();
const BASE_URL = 'https://6395736090ac47c6806b55bc.mockapi.io';
export const PostProvider = ({children}) => {
  const [data, setdata] = useState();
  const [dataRecommend, setdataRecommend] = useState();
  const [auth,setAuth] =useState()
  const [isListHotPostsloading, setisListHotPostsloading] = useState(true);
  const [isListRecomPostsloading, setListRecomPostsloading] = useState(true);
  const [isloading, setIsloading] = useState(true);

  const getListRecomPosts = () => {
    const apiURL = `${BASE_URL}/posts`;
    axios
      .get(apiURL)
      .then(json => setdataRecommend(json.data))
      .catch(error => {
        console.log('error: ', error);
      })
      .finally(() => setListRecomPostsloading(false));
  };

  const getListHotPosts = () => {
    const apiURL = `${BASE_URL}/Hots`;
    axios
      .get(apiURL)
      .then(json => setdata(json.data))
      .catch(error => {
        console.log('error: ', error);
      })
      .finally(() => setisListHotPostsloading(false));
  };

  const getListUser = () => {
    const apiURL = `${BASE_URL}/users`;
    axios
      .get(apiURL)
      .then(json => setdata(json.data))
      .catch(error => {
        console.log('error: ', error);
      })
      .finally(() => setIsloading(false));
  };


  return (
    <PostContext.Provider
      value={{
        auth,
        setAuth,
        getListUser,
        isloading,
        dataRecommend,
        setdataRecommend,
        isListHotPostsloading,
        isListRecomPostsloading,
        setisListHotPostsloading,
        setListRecomPostsloading,
        data,
        setdata,
        getListHotPosts,
        getListRecomPosts,
      }}>
      {children}
    </PostContext.Provider>
  );
};
