// Dependencies
import React, { useState } from "react";
import {
  Switch,
  Route
} from "react-router-dom";
import axios from "axios";

// Pages
import Home from "./Pages/Home";

// Utilities
import GlobalVariables from "./Utilities/GlobalVariables";

function App() {

  /* ------------ GLOBAL VARIABLE STATES ------------ */
  const [globalVariableState, setGlobalVariableState] = useState({
    globalConfirmed: "",
    globalRecovered: "",
    globalDeaths: "",
    newGlobalConfirmed: "",
    newGlobalRecovered: "",
    newGlobalDeaths: "",
    searchCountryInput: "",
    allCountries: [],
  })

  /* ------------ Input Change Handlers ------------ */
  globalVariableState.handleCountryFilterInputChange = ({ target }) => {
    setGlobalVariableState({ ...globalVariableState, [target.name]: target.value })
  }

  // Get all country data
  globalVariableState.getSummary = async () => {

    await axios.get("https://api.covid19api.com/summary", {
      headers: { 'X-Access-Token': '5cf9dfd5-3449-485e-b5ae-70a60e997864' },
    })
      .then(({ data }) => {
        console.log(data)

        setGlobalVariableState({
          ...globalVariableState,
          allCountries: data.Countries,
          globalConfirmed: data.Global.TotalConfirmed,
          globalRecovered: data.Global.TotalRecovered,
          globalDeaths: data.Global.TotalDeaths,
          newGlobalConfirmed: data.Global.NewConfirmed,
          newGlobalRecovered: data.Global.NewRecovered,
          newGlobalDeaths: data.Global.NewDeaths,
        })
      })
      .catch((e) => console.error(e));
    // console.log("Saving request data!")
      
  }


  return (
    <>
      <GlobalVariables.Provider value={globalVariableState}>
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </GlobalVariables.Provider>
    </>
  );
};

export default App;
