import React from 'react';
import Navigation from './src/navigation';
import { PostProvider } from './src/context/PostContext';

const App = () => {
  return (
    <>
    <PostProvider>
      <Navigation />
    </PostProvider>
    </>
  );
};

export default App;
