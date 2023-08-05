export interface IndexData {
  image: Image;
  title?: string;
  description: string;
  footer?: string;
  button?: Button;
  bgColor: string;
  color: string;
  border?: string;
  invertir: boolean;
}
export interface Image {
  source: string;
  alt: string;
}
export interface Button {
  text: string;
  url: string;
}