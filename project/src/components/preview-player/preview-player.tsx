import {useEffect, useRef} from 'react';

type PreviewPlayerProps = {
  posterUrl: string,
  videoUrl: string
}

function PreviewPlayer({posterUrl, videoUrl}: PreviewPlayerProps){
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const delay: NodeJS.Timeout = setTimeout(
      () => videoRef.current?.play(),
      1000);
    return () => clearTimeout(delay);
  });

  return (
    <video ref={videoRef} poster={posterUrl} width="280" height="175" loop muted>
      <source src={videoUrl} type='video/mp4'/>
    </video>
  );
}

export default PreviewPlayer;
