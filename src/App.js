import "./App.css";
import { useState } from "react";
import Axios from "axios";


function App() {
  const [catfact, setCatfact] = useState("");

  const fetchFact = () => {
    Axios.get("https://catfact.ninja/fact").then((res) => {
      setCatfact(res.data.fact);
    });
  };

  const [name, setName] = useState("");
  const [predictedResult, setPredictedResult] = useState({});
  const fetchPredicted = () => {
    Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
      console.log(res.data);
      setPredictedResult(res.data);
    });
  };

  const [generetExcuse, setGeneretExcuse] = useState("");

  const fetchExcuse = (excuse) => {
    Axios.get(`https://excuser-three.vercel.app/V1/excuse/${excuse}`).then(
      (res) => {
        console.log(res.data[0].excuse);
        setGeneretExcuse(res.data[0].excuse);
      }
    );
  };

  return (
    <div className="App">
      <h1>generet an excuser &#10003; </h1>
      <button className="btn-family" onClick={() => fetchExcuse("family")}>
        FAMILY
      </button>
      <button className="btn-office" onClick={() => fetchExcuse("office")}>
        OFFICE
      </button>
      <button className="btn-party" onClick={() => fetchExcuse("party")}>
        PARTY
      </button>
      <h3>{generetExcuse}</h3>
      <hr />
      <button className="btn-fetch" onClick={fetchFact}>
        fetch fact
      </button>
      <h3>{catfact}</h3>
      <hr />
      <button className="btn-pre" onClick={fetchPredicted}>
        predicted result
      </button>
      <input
        className="input-change"
        type="text"
        placeholder="ex,samaneh..."
        onChange={(event) => {
          setName(event.target.value);
        }}
      ></input>
      <h3>
        name is:<h4 className="p-co">{predictedResult.name}</h4>
      </h3>
      <h3>
        age is :<h4 className="p-co">{predictedResult.age}</h4>
      </h3>
      <hr />
    </div>
  );
}

export default App;
