import Load from "@components/Animations/Load";
import { Video } from "expo-av";
import { useState } from "react";
import * as S from "./styles";

interface IVideoPlayrops {
  video: string;
}

const VideoPlay = ({ video }: IVideoPlayrops) => {
  const [videoReady, setVideoReady] = useState(false);
  return (
    <S.Container>
      <S.ImageView>
        <Video
          isMuted={true}
          shouldPlay
          audioPan={0}
          resizeMode="cover"
          videoStyle={{
            height: "100%",
            width: "100%",
            backgroundColor: "transparent",
          }}
          style={{
            height: 220,
            width: "100%",
            backgroundColor: "transparent",
          }}
          source={{
            uri: video,
          }}
          renderToHardwareTextureAndroid
          isLooping
          onPlaybackStatusUpdate={() => setVideoReady(true)}
        >
          {!videoReady && <Load />}
        </Video>
      </S.ImageView>
    </S.Container>
  );
};

export default VideoPlay;
