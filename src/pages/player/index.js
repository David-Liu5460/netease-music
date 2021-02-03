import React, { memo } from 'react';

import {
  PlayerWrapper, 
  PlayerLeft,
  PlayerRight
} from './style';

export default memo(function HYPlayer() {
  return (
    <PlaybarWrapper>
      <div className="content wrap-v2">
        <PlayerLeft>
          <h2>HYPlayerInfo</h2>
          <h2>HYSongContent</h2>
        </PlayerLeft>
        <PlayerRight>
          <h2>HYSemiPlaylist</h2>
          <h2>HYSemiSong</h2>
        </PlayerRight>
      </div>
    </PlaybarWrapper>
  )
})
