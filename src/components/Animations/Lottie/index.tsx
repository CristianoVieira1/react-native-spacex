import LottieView, { AnimatedLottieViewProps } from "lottie-react-native";
import React, { useEffect, useRef } from "react";

interface ILottieProps extends AnimatedLottieViewProps {
  width?: number;
  height?: number;
}

export function Lottie({ ...rest }: ILottieProps) {
  const animationRef = useRef<LottieView>(null);

  useEffect(() => {
    animationRef.current?.play();

    animationRef.current?.play(50, 340);
  }, []);

  const { width = 200 } = rest;
  const { height = 200 } = rest;
  return (
    <LottieView
      style={{
        width: width,
        height: height,
        alignSelf: "center",
        marginTop: 20,
      }}
      ref={animationRef}
      autoPlay
      autoSize
      loop
      resizeMode="cover"
      {...rest}
    />
  );
}
