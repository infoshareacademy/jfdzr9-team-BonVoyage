import { PinPhoto } from "./PinPreview.styled";

type Props = {
  src: string;
};

const PinPreview = ({ src }: Props) => {
  return <PinPhoto src={src} />;
};

export default PinPreview;
