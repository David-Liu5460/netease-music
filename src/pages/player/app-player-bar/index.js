import React, { memo, useCallback, useEffect } from 'react'

import { Slider } from "antd";

import {
  PlaybarWrapper,
  Control,
  PlayInfo,
  Operator
} from './style'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { getSizeImage, formatDate, getPlaySong } from "@/utils/format-utils";

import { changeCurrentSong, getSongDetailAction } from '../store/actionCreator';
import { changeSequenceAction } from '../store/actionCreator';

export default memo(function HYAppPlayer() {
  // props state
  const [currentTime, setcurrentTime] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isChanging, setIsChanging] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  // redux-hook
  const {currentSong, sequence} = useSelector(state => {
    currentSong: state.getIn(['player', 'currentSong']);
    sequence: state.getIn(["player", "sequence"]);
  }, shallowEqual)
  // redux-hooks
  const dispatch = useDispatch();

  const audioRef = useRef();

  useEffect(() => {
    dispatch(getSongDetailAction(167876));
  }, [dispatch]);

  useEffect(() => {
    audioRef.current.src = getPlaySong(currentSong.id); 
    audioRef.current.play().then(res => {
      setIsPlaying(true);
    }).catch(err => {
      setIsChanging(false);
    });
  }, [currentSong]);

  // otherHandel
  const picUrl = (currentSong.al && currentSong.al.picUrl) || "";
  const SingerName = (currentSong.ar && currentSong.ar[0].name) || "" ;
  const duration = currentSong.dt || 0;
  const showDuration = formatDate(duration, "mm:ss");
  const showCurrentTime = formatDate(currentTime, "mm:ss");
  // const progress = currentTime / duration * 100;
  
  // handle function
  const playMusic = useCallback(() => {
    isPlaying ? audioRef.current.pause() : audioRef.current.play();
    setIsPlaying(!isPlaying);
  }, [isPlaying]);

  const timeUpdate = (e) => {
    console.log(e.targer.currentTime);   
    if (!isChanging) {
      // setProgress()
      setcurrentTime(e.target.currentTime * 1000);
      setProgress(currentTime / duration * 100);
    }  
  }

  const changeSequence = () => {
    let currentSequence = sequence + 1;
    if(currentSequence > 2) {
      currentSequence = 0;
    }
    dispatch(changeSequenceAction(currentSequence));
  }

  const changeMusic = (tag) => {
    changeCurrentSong(tag);
  }

  const sliderChange = useCallback((value) => {
      console.log("change" + value);
      // progress = value;
      setIsChanging(true);
      setProgress(value);
      const currentTime = value / 100 * duration;
      setcurrentTime(currentTime);
    },[duration]
  )

  const sliderAfterChange = useCallback((value) => {
    console.log("after" + value);
    // value / 100 * duration / 1000 => ms
    const currentTime = value / 100 * duration / 1000;
    audioRef.current.currentTime = currentTime;
    setcurrentTime(currentTime * 1000);
    setIsChanging(false);

    if(!isPlaying) {
      playMusic();
    }
  }, [duration, isPlaying, playMusic]);

  const handleMusicEnded = () => {
    if (sequence === 2) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    } else {
      dispatch(changeCurrentSong(1));
    }
  }

  return (
    <PlaybarWrapper className="sprite_player">
      <div className="content wrap-v2 ">
        <Control isPlaying={isPlaying}>
          <button className="sprite_player prev"
                  onClick={e => changeMusic(-1)}></button>
          <button className="sprite_player play" onClick={e => playMusic()}></button>
          <button className="sprite_player next"
                  onClick={e => changeMusic(1)}></button>
        </Control>
        <PlayInfo>
          <div href="/#">
            <NavLink to="/discover/player">
              <img src={picUrl} />
            </NavLink>
          </div>
          <div className="info">
            <div className="song"> 
              <span className="song-name">{currentSong.name}</span> 
              <a href="#/" className="singer-name">{SingerName}</a>
            </div>
            <div className="progress">
              <Slider 
                defaultValue={30} 
                value={progress}
                onChange={sliderChange}
                onAfterChange={sliderAfterChange}></Slider>
              <div className="time">
                <span className="now-time">{showCurrentTime}</span>
                <span className="divider">/</span>
                <span className="duration">{showDuration}</span>
              </div>
            </div>
          </div>
        </PlayInfo>
        <Operator sequence={sequence}>
            <button className="sprite_player btn volume"></button>
            <button className="sprite_player btn loop" onClick={e => changeSequence()}></button>
            <button className="sprite_player btn playlist"></button> 
        </Operator>
      </div>
      <h2>HYAppPlayer</h2>
      <audio ref={audioRef} 
            onTimeUpdate={timeUpdate} 
            onEnded={handleMusicEnded}></audio>
    </PlaybarWrapper>
  )
})
// url 歌曲流媒体数据
