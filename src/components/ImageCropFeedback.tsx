import React, { useRef, useEffect } from "react";

interface ImageCropFeedbackProps {
  imageUrl: string;
  top: number;
  left: number;
  right?: number;
  bottom?: number;
  width: number;
  height: number;
}

export default function ImageCropFeedback(props: ImageCropFeedbackProps) {
  const img = useRef(null);
  const cnv = useRef(null);

  useEffect(() => {
    const canvas = document.getElementById("appCanvas") as HTMLCanvasElement;
    const canvasContext = canvas.getContext("2d");

    const image = new Image();
    image.src = props.imageUrl;
    image.onload = () => {
      canvasContext!.strokeStyle = "red";
      canvasContext!.lineWidth = 5;
      canvasContext!.drawImage(image, 0, 0, props.width, props.height);
      canvasContext!.strokeRect(props.left, props.top, 250, 250);
    };
  }, []);

  return (
    <div>
      <canvas
        id="appCanvas"
        ref={cnv}
        width={props.width}
        height={props.height}
        onClick={(e) => {
          alert(e.clientX);
        }}
      />
      <img alt="cat" ref={img} src={props.imageUrl} className="hidden" />
    </div>
  );
}
