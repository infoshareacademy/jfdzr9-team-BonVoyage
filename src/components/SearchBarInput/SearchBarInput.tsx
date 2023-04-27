import usePlacesAutocomplete, { getGeocode, getLatLng } from "use-places-autocomplete";
import { List, ListButton, ListItem, SearchBarWrapper } from "./SearchBarInput.styled";
import { TextInput } from "../../ui/TextInput/TextInput.styled";

type SearchBarInputProps = {
  setCity: (position: google.maps.LatLngLiteral) => void;
};

const SearchBarInput = ({ setCity }: SearchBarInputProps) => {
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
      <TextInput
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        disabled={!ready}
        placeholder="Type here"
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
};

export default SearchBarInput;
