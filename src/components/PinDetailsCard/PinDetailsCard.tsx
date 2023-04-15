import { Pin } from "../Map/Map";

type Props = {
  selectedPlace: Pin | undefined;
};

const PinDetailsCard = ({ selectedPlace }: Props) => {
  return (
    <div>
      <h2>{selectedPlace?.name}</h2>
      <div>
        {selectedPlace?.imageRefs?.map((url) => (
          <img key={url} src={url} style={{ width: "150px", height: "100px" }} />
        ))}
      </div>
      <p>{selectedPlace?.description}</p>
      <div></div>
    </div>
  );
};

export default PinDetailsCard;
