import React from 'react';
import ShakaPlayer from 'shaka-player-react';
import 'shaka-player/dist/controls.css';
import mpd from '../manifest/dash.mpd'
import playlist from '../hls/playlist.m3u8';
import playlisttest from '../hlsall/playlist.m3u8'


function VideoPlayer() {
  const ref = React.useRef(null);

  React.useEffect(() => {
    window.getShakaInst = () => ref.current;
    console.log(ref.current.player);
  }, []);

  return (
    <div>
      <ShakaPlayer ref={ref} src={mpd}/>
      {/*<ShakaPlayer ref={ref} src='http://localhost:2015/playlist.m3u8'/>*/}
      {/*<ShakaPlayer ref={ref} src={playlisttest}/>*/}
      {/*<ShakaPlayer ref={ref} src='https://5b44cf20b0388.streamlock.net:8443/vod/smil:hls-maudios-prod.smil/playlist.m3u8'/>*/}
      {/*<ShakaPlayer ref={ref} src='https://storage.googleapis.com/shaka-demo-assets/bbb-dark-truths-hls/hls.m3u8'/>*/}
    </div>
  );
}

export default VideoPlayer;

