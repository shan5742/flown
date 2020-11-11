import { Values } from "../types/globals";

export const loadImage = (
  imageUrl: string,
  canvas: HTMLCanvasElement,
  coords: Values
) => {
  const { left, right, top, bottom } = coords;
  const canvasContext = canvas.getContext("2d");
  const image = new Image();
  image.src = imageUrl;
  image.onload = () => {
    canvasContext!.drawImage(image, 0, 0);
    canvasContext!.strokeStyle = "red";
    canvasContext!.lineWidth = 5;
    canvasContext!.beginPath();
    canvasContext!.moveTo(left, top);
    canvasContext!.lineTo(left, bottom);
    canvasContext!.lineTo(right, bottom);
    canvasContext!.lineTo(right, top);
    canvasContext!.closePath();
    canvasContext!.stroke();
  };
};
