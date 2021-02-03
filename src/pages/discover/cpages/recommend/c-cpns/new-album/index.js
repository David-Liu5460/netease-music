import React, { memo, useState, useEffect, useRef } from 'react';

// import { getNewAlbums } from '@/services/recommend';
import { shallowEqual, useDispatch } from 'react-redux';

import { Carousel } from 'antd';
import HYThemeHeaderRCM from '@/components/theme-header-rcm';

import { getNewAlbumAction } from "../../store/actionCreators";
import { AlbumWrapper } from "./style";

export default memo(function HYNewAlbum() {
  // const [albums, setAlbums] = useState([]);

  const { newAlbums } = useSelector(state => {
    newAlbums: state.getIn(["recommend", "newAlbums"])
  }, shallowEqual);

  // redux hooks
  const dispatch = useDispatch();

  // useEffect(() => {
  //   getNewAlbums(10).then(res => {
  //     console.log(res);
  //     setAlbums(res.albums);
  //   })
  // }, []);

  useEffect(() => {
    // dispatch(函数);
    dispatch(getNewAlbumAction(10));
  }, [dispatch])

  // pageRef
  const pageRef = useRef();

  return (
    <AlbumWrapper>
      <HYThemeHeaderRCM title="新碟上架"></HYThemeHeaderRCM>
      <div className="content">
        <button className="arrow arrow-left sprite_02"
                onClick={e => pageRef.current.prev()}></button>
          <Carousel dots={false} ref={pageRef}>
            {
              [0, 1].map(item => {
                return (<div key={item} className="page">
                  {
                    [0, 1].map(item => {
                      return (
                        <div>
                          {
                            newAlbums.slice(item*5, (item + 1) * 5).map(iten => {
                              // return <div key={iten.id}>{iten.name}</div>
                              return <HYAlbumCover key={iten.id}
                                                   info={iten}
                                                   size={100}
                                                   width={118}
                                                   bgp="-570px "></HYAlbumCover>

                            })
                          }
                        </div>
                      )
                    })
                  }


                </div>)
              })
            }
          </Carousel>
        <button className="arrow arrow-left sprite_02"
                onClick={e => {pageRef.current.next()}}></button>
        {
          newAlbums.map((item, index)=> {
            return <div key={item.id}>{item.name}</div>
          })
        }
      </div>
    </AlbumWrapper>
  )
})
