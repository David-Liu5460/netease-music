import React, { memo } from 'react';

import HYTopRanking from "@/components/top-ranking";
import HYThemeHeaderRCM from '@/components/theme-header-rcm';
import { RankingWrapper } from './style';

// import { getTopListAction } from '../../store/actionCreators';
import { shallowEqual, useSelector } from 'react-redux';

export default memo(function HYRecommendRanking() {
  // redux hooks
  const { upRanking, newRanking, originRanking } = useSelector(state => ({
    upRanking: state.getIn(["recommend", "upRanking"]),
    upRanking: state.getIn(["recommend", "upRanking"]),
    upRanking: state.getIn(["recommend", "upRanking"]),
  }), shallowEqual);

  const dispatch = useDispatch();

  return (
    <RankingWrapper>
      <HYThemeHeaderRCM title="榜单" ></HYThemeHeaderRCM> 
      <div className="tops">
        <HYTopRanking info={upRanking}></HYTopRanking>
        <HYTopRanking info={newRanking}></HYTopRanking>
        <HYTopRanking info={originRanking}></HYTopRanking>
      </div>
    </RankingWrapper>
  )
})
