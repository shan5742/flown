import React, { useRef, useEffect, useState } from "react";
import { loadImage } from "../lib/loadImage";
import { loadBlankImage } from "../lib/loadBlankImage";
import { ImageCropFeedbackProps, Values } from "../types/globals";
import "./style.css";

export default function ImageCropFeedback(props: ImageCropFeedbackProps) {
  const { top, left, bottom, right, imageUrl } = props;
  const img = useRef(null);
  const cnv = useRef<HTMLCanvasElement>(null);
  const [clicks, setClicks] = useState<number>(0);
  const [coords, setCoords] = useState<Values>({
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  });
  const [drawn, setDrawn] = useState<boolean>(false);

  const handleNewSelection = () => {
    setDrawn(false);
    setClicks(0);
    const canvas = cnv.current;
    if (canvas) loadBlankImage(imageUrl, canvas);
  };

  const onUserClickedImage = (
    e: React.MouseEvent<HTMLCanvasElement, MouseEvent>
  ) => {
    const canvas = cnv.current;
    if (canvas) {
      const canvasContext = canvas.getContext("2d");
      if (clicks === 0) {
        setCoords({
          top: e.clientY - canvasContext!.canvas.offsetTop,
          left: e.clientX - canvasContext!.canvas.offsetLeft,
          bottom: 0,
          right: 0,
        });
        setClicks(clicks + 1);
      } else if (clicks === 1) {
        setCoords({
          ...coords,
          right: e.clientX - canvasContext!.canvas.offsetLeft,
          bottom: e.clientY - canvasContext!.canvas.offsetTop,
        });
        setClicks(2);
      }
    }
  };

  useEffect(() => {
    const { top, right, left, bottom } = coords;
    if (clicks === 2 && !drawn) {
      props.onAreaSelect(top, bottom, left, right);
      setDrawn(true);
    }
  }, [coords, props, clicks, drawn]);

  useEffect(() => {
    const canvas = cnv.current;
    if (canvas) loadImage(imageUrl, canvas, { top, left, right, bottom });
  }, [bottom, imageUrl, left, right, top]);

  return (
    <div className="container">
      <canvas
        id="appCanvas"
        ref={cnv}
        width={600}
        height={600}
        onClick={(e) => onUserClickedImage(e)}
      />
      <img alt="cat" ref={img} src={imageUrl} className="hidden" />
      <button onClick={handleNewSelection}>Make new selection</button>
    </div>
  );
}
