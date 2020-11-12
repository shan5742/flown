import React, { useRef, useEffect } from "react";

export default function CroppedImage(props: any) {
  const { top, left, bottom, right } = props;
  const cnv = useRef<HTMLCanvasElement>(null);
  const img = useRef(null);
  let imageSrc = "https://placekitten.com/600/600";
  useEffect(() => {
    const canvas = cnv.current;
    const canvasContext = canvas!.getContext("2d");
    const image = new Image();
    image.src = imageSrc;
    //image.src = canvas!.toDataURL("image/png");
    image.crossOrigin = "Anonymous";
    image.onload = () => {
      canvasContext!.drawImage(image, 0, 0);
    };
  }, [bottom, left, right, top]);

  return (
    <div>
      <canvas ref={cnv} width={left} height={right} />
      <img
        alt="cat"
        ref={img}
        src={imageSrc}
        crossOrigin="anonymous"
        className="hidden"
      />
    </div>
  );
}
