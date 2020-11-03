import React from "react";
import {
    Container,

} from "reactstrap";

// Components
import Navibar from "../../Components/Navibar";
import WorldStatus from "../../Components/WorldStatus";
import DataTable from "../../Components/DataTable"

const Home = () => {
    return (
        <>
            <Navibar />
            <Container>
                <WorldStatus />
                <DataTable />
            </Container>
        </>
    );
};

export default Home;