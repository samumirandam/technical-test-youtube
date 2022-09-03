/* eslint-disable import/no-unresolved */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getVideoDetailAction } from '@actions';

import useLocalStorage from '@hooks/useLocalStorage';

import VideoList from '@containers/video-list';
import Modal from '@containers/modal';

import Loader from '@components/loader';
import Error from '@components/error';
import VideoCard from '@components/video-card';

import InputButton from '@ui/input-button';

import { getVideoId } from '@utils/get-video-id';

import './home.scss';

const Home = () => {
  const dispatch = useDispatch();

  const [error, setError] = useState('');
  const [isOpenModalDelete, setIsOpenModalDetele] = useState(false);
  const [videoToDelete, setVideoToDetele] = useState('');

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

  const handleClickDelete = (videoId) => {
    setIsOpenModalDetele(true);
    setVideoToDetele(videoId);
  };

  const handleDeleteVideo = () => {
    const index = videos.indexOf(videoToDelete);
    if (index > -1) {
      videos.splice(index, 1);
      changeVideos([...videos]);
    }
    setVideoToDetele('');
    setIsOpenModalDetele(false);
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
      {(videosError || error || isError) && (
        <Error error={videosError || error || errorDetail} />
      )}
      <VideoList>
        {videoDetailList
          && videoDetailList.map((video) => (
            <VideoCard
              key={video?.id}
              image={video?.snippet?.thumbnails?.medium?.url}
              name={video?.snippet?.title}
              onClickDelete={() => handleClickDelete(video?.id)}
            />
          ))}
      </VideoList>
      {(videosLoading || isLoading) && <Loader />}
      <Modal
        isOpen={isOpenModalDelete}
        closeModal={() => {
          setVideoToDetele('');
          setIsOpenModalDetele(false);
        }}
        primaryButton="Eliminar"
        secondaryButton="Cancelar"
        primaryAction={handleDeleteVideo}
      >
        <p className="Home__delete-text">
          ¿Seguro que quieres eliminar este video?
        </p>
      </Modal>
    </section>
  );
};

export default Home;
