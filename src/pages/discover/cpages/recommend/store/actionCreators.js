import * as actionTypes from './constants';

import { getTopBanners } from '@/services/recommend';

const changeTopBannerAction = (res) => ({
  type: actionTypes.CHANGE_TOP_BANNERS,
  topBanners: res.banners
})

// dispatch(函数) 
// action reducer store

export const getTopBannerAction = () => {
  return dispatch => {
    getTopBanners().then(res => {
      console.log(res);
      getTopBanners().then(res => {
        dispatch(changeTopBannerAction(res));
      })
    })
  }
}

// export const getTopBannerAction;