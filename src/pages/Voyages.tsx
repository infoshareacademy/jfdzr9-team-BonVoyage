import { Link } from "react-router-dom";

const Voyages = () => {
  return (
    <div style={{ marginTop: "100px" }}>
      <Link to={"/add-new-trip"}>Add new trip</Link>
      <Link to={"/voyages/Swiat-15903816"}>Testowy</Link>
    </div>
  );
};

export default Voyages;
