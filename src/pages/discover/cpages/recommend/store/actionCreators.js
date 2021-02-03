import * as actionTypes from './constants';

import { 
  getTopBanners,
  getHotRecommends,
  getNewAlbums, 
  getTopList
} from '@/services/recommend';
import hotRecommend from '../c-cpns/hot-recommend';
import { getNewAlbums } from '../../../../../services/recommend';
import newAlbum from '../c-cpns/new-album';

const changeTopBannerAction = (res) => ({
  type: actionTypes.CHANGE_TOP_BANNERS,
  topBanners: res.banners
})

const changeHotRecommendAction = (res) => ({
  type: actionTypes.CHANGE_HOT_RECOMMEND,
  hotRecommends: res.result
});

const changeNewAlbumAction = (res) => {
  type: actionTypes.CHANGE_NEW_ALBUM;
  newAlbums: res.albums
}

const changeUpRankingAction = (res) => ({
  type: actionTypes.CHANGE_UP_RANKING,
  upRanking: res.playlist
})

const changeNewRankingAction = (res) => ({
  type: actionTypes.CHANGE_New_RANKING,
  upRanking: res.playlist
})

const changeOriginRankingAction = (res) => ({
  type: actionTypes.CHANGE_Origin_RANKING,
  upRanking: res.playlist
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

export const getHotRecommendAction = (limit) => {
  return dispatch => {
    getHotRecommends(limit).then(res => {
      console.log(res);
      dispatch(changeTopBannerAction(res))
    })
  }
} 

export const getNewAlbumAction = (limit) => {
  return dispatch => {
    getNewAlbums(limit).then(res => {
      // const albums = res.albums;
      dispatch(changeNewAlbumAction(res));
      // console.log(res);
    });
  }
}

export const getTopListAction = (idx) => {
  return dispatch => {
    getTopList(idx).then(res => {
      // console.log(res);
      switch (idx) {
        case 0: 
          dispatch(changeUpRankingAction(res));
          break;
        case 2: 
          dispatch(changeNewRankingAction(res));
          break;
        case 3:
          dispatch(changeOriginRankingAction(res));
          break;
        default:
      }
    })
  }
}

// export const getTopBannerAction;