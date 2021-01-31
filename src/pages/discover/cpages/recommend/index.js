import React, { memo,  useEffect } from 'react';

import { connect, useSelector, useDispatch, shallowEqual} from "react-redux";

import { getTopBannerAction } from './store/actionCreators';

// redux hooks中的使用
function HYRecommend(props) {
  // 组件和redux关联，获取数据和进行操作
  const {topBanners} = useSelector(state => ({
    topBanners: state.recommend.topBanners
  }), shallowEqual); // 浅层比较
  const dispatch = useDispatch();
  
  // 发送网络请求
  useEffect(() => {
    dispatch(getTopBannerAction())
  }, [dispatch]);

  // const {getBanners, topBanners} = props;
  
  // useEffect(() => {
  //   getBanners();
  // }, [getBanners])

  return (
    <div>
      HYRecommend: {topBanners.length}
    </div>
  ) 
}

export default memo(HYRecommend);

// const mapStateToProps = state => ({
//   topBanners: state.recommend.topBanners
// })

// const mapDispatchToProps = dispatch => ({
//   getBanners: () => {
//     dispatch(getTopBannerAction());
//   }
// })

// export default connect(mapStateToProps, mapDispatchToProps)(memo(HYRecommend));
