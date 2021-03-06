import React, { memo } from 'react';

import { getSizeImage } from '@/utils';

import { getSongDetailetion} from "@/pages/player/store/actionCreators";

import { TopRankingWrapper } from './style';
import { useDispatch } from 'react-redux';

export default memo(function () {
  // props 
  const { info } = props;
  const { tracks = [] } = info;

  // redux hooks
  const dispatch = useDispatch();

  // other handle
  const playMusic = (item) => {
    console.log(item.id);
    dispatch(getSongDetailetion(item.id));
  }

  return (
    <TopRankingWrapper>
      <div className="header">
        <div className="image">
          <img src={getSizeImage(info.coverImgUrl)} alt=""></img>
          <a href="/todo" className="image_cover">ranking</a>
        </div>
        <div className="info">
          <a href="/todo">{info.name}</a>
          <div>
            <button className="btn play sprite_02"></button>
          </div>
        </div>
      </div>
      <div className="list">
        {
          tracks.slice(0, 10).map((item, index) => {
            return (
              <div key={item.id} className="list-item">
                <div className="rank">{index + 1}</div>
                <div className="info">
                  <div className="name">{item.name}</div>
                  <div className="btn sprite">
                    <button className="btn sprite_02 play" onClick={e => {playMusic(item)}}></button>
                    <button className="btn sprite_icon2 addto"></button>
                    <button className="btn sprite_02 favor"></button>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
      <div className="footer">
        <a href="/todo">查看全部 &gt</a>
      </div>
    </TopRankingWrapper>
  )
})
