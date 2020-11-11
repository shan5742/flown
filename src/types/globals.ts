export interface Values {
  top: number;
  left: number;
  right: number;
  bottom: number;
}

export interface ImageCropFeedbackProps {
  imageUrl: string;
  top: number;
  left: number;
  right: number;
  bottom: number;
  onAreaSelect: (
    top: number,
    left: number,
    right: number,
    bottom: number
  ) => void;
}
