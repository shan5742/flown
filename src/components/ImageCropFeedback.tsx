import React, { useRef, useEffect, useState } from "react";
import { loadImage } from "../lib/loadImage";
import { ImageCropFeedbackProps, Values } from "../types/globals";

export default function ImageCropFeedback(props: ImageCropFeedbackProps) {
  const { top, left, bottom, right, imageUrl } = props;
  const img = useRef(null);
  const cnv = useRef(null);
  const [clicks, setClicks] = useState<number>(0);
  const [coords, setCoords] = useState<Values>({
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  });
  const [drawn, setDrawn] = useState<boolean>(false);

  const onUserClickedImage = (
    e: React.MouseEvent<HTMLCanvasElement, MouseEvent>
  ) => {
    const canvas = document.getElementById("appCanvas") as HTMLCanvasElement;
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
  };

  useEffect(() => {
    const { top, right, left, bottom } = coords;
    if (clicks === 2 && !drawn) {
      props.onAreaSelect(top, bottom, left, right);
      setDrawn(true);
    }
  }, [coords, props, clicks, drawn]);

  useEffect(() => {
    const canvas = document.getElementById("appCanvas") as HTMLCanvasElement;
    const canvasContext = canvas.getContext("2d");
    if (canvasContext)
      loadImage(imageUrl, canvasContext, { top, left, right, bottom });
  }, [bottom, imageUrl, left, right, top]);

  return (
    <div>
      <canvas
        id="appCanvas"
        ref={cnv}
        width={600}
        height={600}
        onClick={(e) => onUserClickedImage(e)}
      />
      <img alt="cat" ref={img} src={props.imageUrl} className="hidden" />
    </div>
  );
}
