import usePlacesAutocomplete, { getGeocode, getLatLng } from "use-places-autocomplete";
import { List, ListButton, ListItem, SearchBar, SearchBarWrapper } from "./SearchBarInput.styled";

type SearchBarInputProps = {
  setCity: (position: google.maps.LatLngLiteral) => void;
};

export default function SearchBarInput({ setCity }: SearchBarInputProps) {
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
    setCity({ lat, lng });
  };

  return (
    <SearchBarWrapper>
      <SearchBar
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        disabled={!ready}
        placeholder="Find your place"
      />
      {status === "OK" && (
        <List>
          {data.map((suggestion) => (
            <ListItem key={suggestion.place_id}>
              <ListButton
                onClick={() => {
                  handleSelect(suggestion.description);
                }}
              >
                {suggestion.description}
              </ListButton>
            </ListItem>
          ))}
        </List>
      )}
    </SearchBarWrapper>
  );
}
