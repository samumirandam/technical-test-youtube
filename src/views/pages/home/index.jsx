/* eslint-disable import/no-unresolved */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getVideoDetailAction } from '@actions';

import useLocalStorage from '@hooks/useLocalStorage';

import VideoList from '@containers/video-list';

import Loader from '@components/loader';
import Error from '@components/error';
import VideoCard from '@components/video-card';

import InputButton from '@ui/input-button';

import { getVideoId } from '@utils/get-video-id';

import './home.scss';

const Home = () => {
  const dispatch = useDispatch();

  const [error, setError] = useState('');

  const videoDetailList = useSelector(
    (state) => state.videoDetail?.data?.items,
  );
  // const totalPages = useSelector((state) => state.videoDetail?.data?.pageInfo);
  const isLoading = useSelector((state) => state.videoDetail?.isLoading);
  const isError = useSelector((state) => state.videoDetail?.isError);
  const errorDetail = useSelector((state) => state.videoDetail?.errorDetail);

  const {
    item: videos,
    saveItem: changeVideos,
    loading: videosLoading,
    error: videosError,
  } = useLocalStorage('VIDEOS', []);

  const handleAddVideo = (url) => {
    const videoId = getVideoId(url);
    if (videoId) {
      changeVideos([videoId, ...videos]);
    } else {
      setError('No logramos obtener el video');
    }
  };

  useEffect(() => {
    if (videos.length > 0) {
      dispatch(getVideoDetailAction(videos));
    }
  }, [videos]);

  return (
    <section className="Home" data-testid="Home">
      <h1 className="Home__title">Añadir nuevo video</h1>
      <InputButton
        className="Home__input"
        placeholderInput="Añadir"
        labelButton="Añadir"
        onClick={handleAddVideo}
      />
      <VideoList>
        {videoDetailList
          && videoDetailList.map((video) => (
            <VideoCard
              image={video?.snippet?.thumbnails?.medium?.url}
              name={video?.snippet?.title}
            />
          ))}
      </VideoList>
      {(videosLoading || isLoading) && <Loader />}
      {(videosError || error || isError) && (
        <Error error={videosError || error || errorDetail} />
      )}
    </section>
  );
};

export default Home;
