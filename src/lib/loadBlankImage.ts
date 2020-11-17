export const loadBlankImage = (imageUrl: string, canvas: HTMLCanvasElement) => {
  const canvasContext = canvas.getContext("2d");
  const image = new Image();
  image.src = imageUrl;
  image.onload = () => {
    canvasContext!.drawImage(image, 0, 0);
  };
};
