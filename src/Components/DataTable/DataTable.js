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
        allCountries
    } = useContext(GlobalVariables);

    let allCountriesSorted = sort(allCountries).desc(u => u.TotalConfirmed);

    const renderFilteredCountries = () => {
        return allCountriesSorted.map((countryData, i) => (
            <tr key={i} className="text-center">
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
                <td>{countryData.TotalConfirmed.toLocaleString('en-US')}</td>
                <td>{countryData.NewConfirmed.toLocaleString('en-US')}</td>
                <td>{countryData.TotalRecovered.toLocaleString('en-US')}</td>
                <td>{countryData.NewRecovered.toLocaleString('en-US')}</td>
                <td>{countryData.TotalDeaths.toLocaleString('en-US')}</td>
                <td>{countryData.NewDeaths.toLocaleString('en-US')}</td>
            </tr>
        ));
    };

    const renderUndefined = () => {
        return (
            <>
                <tr className="text-center">
                    <th>Undefined</th>
                    <th>Undefined</th>
                    <th>Undefined</th>
                    <th>Undefined</th>
                    <th>Undefined</th>
                    <th>Undefined</th>
                    <th>Undefined</th>
                </tr>
                <tr className="text-center">
                    <th>Undefined</th>
                    <th>Undefined</th>
                    <th>Undefined</th>
                    <th>Undefined</th>
                    <th>Undefined</th>
                    <th>Undefined</th>
                    <th>Undefined</th>
                </tr>
                <tr className="text-center">
                    <th>Undefined</th>
                    <th>Undefined</th>
                    <th>Undefined</th>
                    <th>Undefined</th>
                    <th>Undefined</th>
                    <th>Undefined</th>
                    <th>Undefined</th>
                </tr>
            </>
        )
    }


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
                            <Input />
                        </InputGroup>
                    </Col>
                </Row>
                <Row className="data-table-margin">
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
                                {allCountriesSorted !== undefined ? renderFilteredCountries() : renderUndefined()}
                            </tbody>
                        </Table>
                    </Card>
                </Row>
            </Container>
        </Card>
    );
}

export default DataTable;