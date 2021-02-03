import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import HYThemeHeaderRCM from '@/components/theme-header-rcm';
import HYSongsCover from '@/components/songs-cover';
import {
  HotRecommendWrapper
} from './style';
import { getHotRecommendAction } from '../../store/actionCreators';

export default memo(function HYHotRecommend() {
  // state

  // redux hooks
  const { hotRecommends } = useSelector(state => ({
    hotRecommends: state.getIn(["recommend", "hotRecommends"])
  }), shallowEqual)
  const dispatch = useDispatch();

  // other hooks
  useEffect(() => {
    dispatch(getHotRecommendAction(8));
  }, [dispatch]);

  // redux-hooks
  return (
    <HotRecommendWrapper>
      <HYThemeHeaderRCM title="热门推荐" keywords={["华语", "流行", "民谣", "摇滚", "电子"]}/>
      <div className="recommend-list">
        {
          hotRecommends.map((item, index) => {
            // return <div>{item.name}</div>
            return <HYSongsCover key={item.id} info={item}></HYSongsCover>
          })
        }
      </div>
    </HotRecommendWrapper>
  )
})
