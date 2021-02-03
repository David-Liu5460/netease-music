import React, { memo, useEffect, shallowEqual, useRef, useState, useCallback } from 'react';
import { useSelector, useDispatch } from "react-redux";

import { connect, useSelector, useDispatch, shallowEqual} from "react-redux";

import { getTopBannerAction } from '.././store/actionCreators';

import { Carousel } from 'antd';
import {
  BannerWrapper,
  BannerLeft,
  BannerRight,
  BannerControl
} from './style';

export default memo(function HYTopBanner() {
  const [currentIndex, setcurrentIndex  ] = useState(0);
  // 组件和redux关联，获取数据和进行操作
  const {topBanners} = useSelector(state => ({
    // topBanners: state.recommend.topBanners
    topBanners: state.get("recommend").get("topBanners")
  }), shallowEqual); // 浅层比较"
  const dispatch = useDispatch();
  
  // 其他hooks
  const bannerRef = useRef();
  // 发送网络请求
  useEffect(() => {
    dispatch(getTopBannerAction())
  }, [dispatch]);
  
  const bannerChange = useCallback((from, to)=> {
    setcurrentIndex(to);
  }, []);

  // 其他业务逻辑
  const bgImage = topBanners[currentIndex] && topBanners[currentIndex].imageUrl;

  return (
    <BannerWrapper bgImage={bgImage}> 
      <div className="banner wrap-v2">
        <BannerLeft>
        <Carousel autoplay ref={bannerRef} beforeChange={bannerChange}>
          {
            topBanners.map((item, index) => {
              return (
                <div className="banner-item" key={item.imageUrl}>
                  <img src={item.imageUrl} className="image"></img>
                </div>
              )
            })
          }
         </Carousel>
        </BannerLeft>
        <BannerRight></BannerRight>
        <BannerControl>
          <button className="btn left" onClick={e => bannerRef.current.prev()}></button>
          <button className="btn right" onClick={e => bannerRef.current.next()}></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  )
})
