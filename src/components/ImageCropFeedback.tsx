import React, { useRef, useEffect } from "react";
interface ImageCropFeedbackProps {
  imageUrl: string;
  top: number;
  left: number;
  right: number;
  bottom: number;
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
      canvasContext!.drawImage(image, 0, 0);
      canvasContext!.strokeStyle = "red";
      canvasContext!.lineWidth = 5;
      canvasContext!.beginPath();
      canvasContext!.moveTo(props.left, props.top);
      canvasContext!.lineTo(props.left, props.bottom);
      canvasContext!.lineTo(props.right, props.bottom);
      canvasContext!.lineTo(props.right, props.top);
      canvasContext!.closePath();
      canvasContext!.stroke();
      //canvasContext!.strokeRect(props.left, props.top, 250, 250);
    };
  }, [props.bottom, props.imageUrl, props.left, props.right, props.top]);

  return (
    <div>
      <canvas id="appCanvas" ref={cnv} width={600} height={600} />
      <img alt="cat" ref={img} src={props.imageUrl} className="hidden" />
    </div>
  );
}
