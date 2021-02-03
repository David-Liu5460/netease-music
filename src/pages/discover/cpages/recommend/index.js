import React, { memo,  useEffect } from 'react';

import HYTopBanner from './c-cpns/top-banner';
import { 
  RecommendWrapper,
  Content,
  RecommendLeft,
  RecommendRight
 } from './style';

// redux hooks中的使用
function HYRecommend(props) {

  // const {getBanners, topBanners} = props;
  
  // useEffect(() => {
  //   getBanners();
  // }, [getBanners])

  console.log(topBanners.length);

  return (
    <RecommendWrapper>
      <HYTopBanner></HYTopBanner>
      <Content>
      <RecommendLeft>
        <HYHotRecommend/>
        <HYNewAlbum/>
        <HYRecommendRanking/>
      </RecommendLeft>
      <RecommendRight></RecommendRight>
      </Content>
    </RecommendWrapper>
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
