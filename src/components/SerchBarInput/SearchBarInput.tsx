import usePlacesAutocomplete, { getGeocode, getLatLng } from "use-places-autocomplete";
import { Combobox, ComboboxPopover, ComboboxList, ComboboxOption } from "@reach/combobox";
import "@reach/combobox/styles.css";
import { SearchBar } from "./SearchBarInput.styled";

type SearchBarInputProps = {
  setOffice: (position: google.maps.LatLngLiteral) => void;
};

export default function SearchBarInput({ setOffice }: SearchBarInputProps) {
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete();

  const handleSelect = async (val: string) => {
    setValue(val, false);
    clearSuggestions();

    const results = await getGeocode({ address: val });
    const { lat, lng } = await getLatLng(results[0]);
    setOffice({ lat, lng });
  };

  return (
    <Combobox onSelect={handleSelect}>
      <SearchBar
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={!ready}
        placeholder="Find your place"
      />
      <ComboboxPopover>
        <ComboboxList>
          {status === "OK" &&
            data.map(({ place_id, description }) => <ComboboxOption key={place_id} value={description} />)}
        </ComboboxList>
      </ComboboxPopover>
    </Combobox>
  );
}
