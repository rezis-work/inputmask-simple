import InputMask from "react-input-mask";

function App(): JSX.Element {
  return (
    <div style={{ width: "1000px", margin: "auto" }}>
      <label>Cardholder Name</label>
      <input
        placeholder="e.g. Jane Appleseed"
        type="text"
        style={{ display: "block" }}
      />
      <label>Put card details</label>
      <InputMask
        placeholder="e.g. 1234 5678 9123 0000"
        mask="9999 9999 9999 9999"
        style={{ display: "block" }}
      />
      <div style={{ display: "flex", gap: "20px" }}>
        <div>
          <label style={{ display: "block" }}>Exp. Date (MM/YY)</label>
          <InputMask placeholder="MM" mask="99" style={{ width: "80px" }} />
          <InputMask placeholder="YY" mask="9999" style={{ width: "80px" }} />
        </div>
        <div>
          <label style={{ display: "block" }}>Put card details</label>
          <InputMask mask="999" placeholder="e.g 123" />
        </div>
      </div>
    </div>
  );
}

export default App;
