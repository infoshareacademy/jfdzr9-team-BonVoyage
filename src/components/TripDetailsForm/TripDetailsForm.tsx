import { StyledForm } from "../../ui/form/form.styled";
import { TextInput } from "../../ui/TextInput/TextInput.styled";

const TripDetailsForm = () => {
  return (
    <StyledForm>
      <h2>Trip Details</h2>
      <TextInput placeholder="Pin name" type={"text"} />
      <TextInput placeholder="Add details" type={"text"} />
      <TextInput alt="Uppload photos" type={"image"} />
    </StyledForm>
  );
};

export default TripDetailsForm;
