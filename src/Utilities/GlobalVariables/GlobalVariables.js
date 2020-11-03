import { createContext } from 'react';

const GlobalVariables = createContext({
    globalConfirmed: "",
    globalRecovered: "",
    globalDeaths: "",
    newGlobalConfirmed: "",
    newGlobalRecovered: "",
    newGlobalDeaths: "",
    getSummary: () => { },
    searchCountryInput: "",
    handleCountryFilterInputChange: () => { },
});

export default GlobalVariables;