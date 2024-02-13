import { useEffect, useState } from "react";
import "./App.css";
import Display from "./components/display/Display";
import Form from "./components/form/Form";

function App() {
  const [bill, setBill] = useState("");
  const [tip, setTip] = useState("");
  const [people, setPeople] = useState("");
  const [calculatedTip, setCalculatedTip] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    console.table({ bill, tip, people });
    if (bill > 0 && people > 0 && tip > 0) {
      setCalculatedTip((bill * tip) / 100);
      setTotal(calculatedTip + bill);
    }
  }, [bill, tip, people, calculatedTip]);

  const handleResetBtn = () => {
    setBill("");
    setTip("");
    setPeople("");
    setCalculatedTip(0);
    setTotal(0);
  };

  return (
    <div className="Wrapper">
      <img className="logo" src="/Splt-tter.svg" alt="splitter logo" />
      <div className="container">
      {/* form-data */}
        <Form
          bill={bill}
          setBill={setBill}
          tip={tip}
          setTip={setTip}
          people={people}
          setPeople={setPeople}
        />
        {/* display data */}
        <Display
          people={people}
          total={total}
          calculatedTip={calculatedTip}
          handleResetBtn={handleResetBtn}
        />
      </div>
    </div>
  );
}

export default App;
