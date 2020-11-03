import React, { useContext } from 'react';
import {
    Table,
    Card,
    InputGroup,
    InputGroupText,
    InputGroupAddon,
    Input,
    Container,
    Row,
    Col,
} from 'reactstrap';
import sort from 'fast-sort';
import ReactCountryFlag from "react-country-flag";
import "./DataTable.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

// Utilities
import GlobalVariables from "../../Utilities/GlobalVariables";

const DataTable = (props) => {

    const {
        allCountries,
        searchCountryInput,
        handleCountryFilterInputChange
    } = useContext(GlobalVariables);



    let allCountriesSorted = sort(allCountries).desc(u => u.TotalConfirmed);

    const renderFilteredCountries = () => {

        if (searchCountryInput !== "") {
            let filteredCountry = [];

            console.log(searchCountryInput);

            for (let i = 0; i < allCountries.length; i++) {
                if (allCountries[i].Country.toLowerCase().includes(searchCountryInput.toLowerCase())) {
                    filteredCountry.push(allCountries[i]);
                };
            };

            return filteredCountry.map((countryData, i) => (
                <tr key={i} className={i % 2 === 0 ? "text-center odd-key-data" : "text-center"} >
                    <td className="text-left text-truncate">
                        <ReactCountryFlag
                            countryCode={countryData.CountryCode}
                            svg
                            style={{
                                width: '20px',
                                height: '20px',
                                marginRight: '5px',
                            }}
                            title={countryData.CountryCode}
                        />
                        {countryData.Country.toLocaleString('en-US')}
                    </td>
                    <td className="confirmed" >{countryData.TotalConfirmed.toLocaleString('en-US') !== "0" ? countryData.TotalConfirmed.toLocaleString('en-US') : "No Data"}</td>
                    <td className="confirmed" >{countryData.NewConfirmed.toLocaleString('en-US') !== "0" ? "↑" + countryData.NewConfirmed.toLocaleString('en-US') : "No Data"}</td>
                    <td className="recovered" >{countryData.TotalRecovered.toLocaleString('en-US') !== "0" ? countryData.TotalRecovered.toLocaleString('en-US') : "No Data"}</td>
                    <td className="recovered" >{countryData.NewRecovered.toLocaleString('en-US') !== "0" ? "↑" + countryData.NewRecovered.toLocaleString('en-US') : "No Data"}</td>
                    <td className="deaths" >{countryData.TotalDeaths.toLocaleString('en-US') !== "0" ? countryData.TotalDeaths.toLocaleString('en-US') : "No Data"}</td>
                    <td className="deaths" >{countryData.NewDeaths.toLocaleString('en-US') !== "0" ? "↑" + countryData.NewDeaths.toLocaleString('en-US') : "No Data"}</td>
                </tr>
            ));

        } else {
            return allCountriesSorted.map((countryData, i) => (
                <tr key={i} className={i % 2 === 0 ? "text-center odd-key-data" : "text-center"} >
                    <td className="text-left text-truncate">
                        <ReactCountryFlag
                            countryCode={countryData.CountryCode}
                            svg
                            style={{
                                width: '20px',
                                height: '20px',
                                marginRight: '5px',
                            }}
                            title={countryData.CountryCode}
                        />
                        {countryData.Country.toLocaleString('en-US')}
                    </td>
                    <td className="confirmed" >{countryData.TotalConfirmed.toLocaleString('en-US') !== "0" ? countryData.TotalConfirmed.toLocaleString('en-US') : "No Data"}</td>
                    <td className="confirmed" >{countryData.NewConfirmed.toLocaleString('en-US') !== "0" ? "↑" + countryData.NewConfirmed.toLocaleString('en-US') : "No Data"}</td>
                    <td className="recovered" >{countryData.TotalRecovered.toLocaleString('en-US') !== "0" ? countryData.TotalRecovered.toLocaleString('en-US') : "No Data"}</td>
                    <td className="recovered" >{countryData.NewRecovered.toLocaleString('en-US') !== "0" ? "↑" + countryData.NewRecovered.toLocaleString('en-US') : "No Data"}</td>
                    <td className="deaths" >{countryData.TotalDeaths.toLocaleString('en-US') !== "0" ? countryData.TotalDeaths.toLocaleString('en-US') : "No Data"}</td>
                    <td className="deaths" >{countryData.NewDeaths.toLocaleString('en-US') !== "0" ? "↑" + countryData.NewDeaths.toLocaleString('en-US') : "No Data"}</td>
                </tr>
            ));
        }
    };

    const renderUndefined = () => {
        return (
            <>
                <tr className="text-center">
                    <th></th>
                    <th></th>
                    <th>Error in</th>
                    <th>loading data</th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
            </>
        )
    }

    // Component Return ------------->
    return (
        <Card>
            <Container>
                <Row className="mt-2">
                    <Col xs="6">
                        <h2>World Data</h2>

                    </Col>
                    <Col xs="6">
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText><FontAwesomeIcon icon={faSearch} /></InputGroupText>
                            </InputGroupAddon>
                            <Input
                                placeholder="Country"
                                name="searchCountryInput"
                                value={searchCountryInput}
                                onChange={(e) => handleCountryFilterInputChange(e)}
                            />
                        </InputGroup>
                    </Col>
                </Row>
                <Row className="data-table-margin d-flex justify-content-center mb-4">
                    <Card className="data-table-card border-top-0">
                        <Table>
                            <thead>
                                <tr className="text-center">
                                    <th>Country</th>
                                    <th>Confirmed</th>
                                    <th>New Confirmed</th>
                                    <th>Recovered</th>
                                    <th>New Recovered</th>
                                    <th>Deaths</th>
                                    <th>New Deaths</th>
                                </tr>
                            </thead>
                            <tbody>
                                {allCountriesSorted !== undefined !== "0" ? renderFilteredCountries() : renderUndefined()}
                            </tbody>
                        </Table>
                    </Card>
                </Row>
            </Container>
        </Card>
    );
}

export default DataTable;