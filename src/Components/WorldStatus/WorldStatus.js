import React, { useContext, useEffect } from "react";
import {
    Row,
    Col,
    Card,
    CardTitle
} from "reactstrap";
import "./WorldStatus.css";

// Utilities
import GlobalVariables from "../../Utilities/GlobalVariables";

const WorldStatus = () => {

    const {
        getSummary,
        globalConfirmed,
        globalRecovered,
        globalDeaths,
        newGlobalConfirmed,
        newGlobalRecovered,
        newGlobalDeaths,
    } = useContext(GlobalVariables);

    useEffect(() => {
        getSummary();
    }, []);

    return (
        <Row className="mb-2">
            <Col className="world-status gutter-bottom" lg="4" xs="12">
                <Card className="text-center">
                    <p className="font-weight-bolder big-font confirmed">{globalConfirmed.toLocaleString('en-US')}</p>
                    <p className="font-weight-bolder confirmed">↑ {newGlobalConfirmed.toLocaleString('en-US')} today</p>
                    <CardTitle className="text-uppercase font-weight-bolder">Confirmed</CardTitle>
                </Card>
            </Col>
            <Col className="world-status gutter-bottom" lg="4" xs="12">
                <Card className="text-center">
                    <p className="font-weight-bolder big-font recovered">{globalRecovered.toLocaleString('en-US')}</p>
                    <p className="font-weight-bolder recovered">↑ {newGlobalRecovered.toLocaleString('en-US')} today</p>
                    <CardTitle className="text-uppercase font-weight-bolder">Recovered</CardTitle>
                </Card>
            </Col>
            <Col className="world-status" lg="4" xs="12">
                <Card className="text-center">
                    <p className="font-weight-bolder big-font deaths">{globalDeaths.toLocaleString('en-US')}</p>
                    <p className="font-weight-bolder deaths">↑ {newGlobalDeaths.toLocaleString('en-US')} today</p>
                    <CardTitle className="text-uppercase font-weight-bolder">Deaths</CardTitle>
                </Card>
            </Col>
        </Row>
    )
}

export default WorldStatus