import React, { useState, useEffect } from 'react'
import ImageList from './components/ImageList';
import useScrollBottom from './hooks/useScrollBottom';
import Loading from './components/Loading';

function App() {
  const [imageList, setImageList] = useState([]);
  const [fetchPage, setFetchPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  console.log('로딩중인가? : ', isLoading);
  const isBottom = useScrollBottom();

  useEffect(() => {
    fetchImages();
  }, [fetchPage]);

  useEffect(() => {
    if (isBottom) {
      setFetchPage((prevPage) => {
        return prevPage + 1
      })
    }
  }, [isBottom]);

  async function fetchImages() {
    setIsLoading(true);
    try {
      const response = await fetch(`https://picsum.photos/v2/list?page=${fetchPage}&limit=5`);
      if (!response.ok) {
        throw new Error('네트워크에 문제가 있습니다.');
      }
      const data = await response.json();

      setImageList((prevImages) => {
        return [...prevImages, ...data]
      });
      setIsLoading(false);
    } catch (error) {
      console.error("데이터를 가져오는데 문제가 생겼습니다.", error);
      setIsLoading(false);
    }
  }


  return (
    <div>
      hello world
      <ImageList imageList={imageList} />
      {isLoading && <Loading />}
    </div>
  );
}
export default App;
