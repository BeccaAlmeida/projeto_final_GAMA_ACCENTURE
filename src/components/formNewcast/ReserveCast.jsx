import React from 'react';
import ListActress from './Actress';
import DateTime from './DateTime';
import Grid from '../Grid';
import ButtonReserv from './ButtonReserve';
import Producer from './Producer';
import regeneratorRuntime from "regenerator-runtime";

function ReserveCast() {
    return (
        <div>
            <Grid >
                <DateTime />
                <ListActress />
                <Producer />
                <ButtonReserv />
            </Grid>
        </div>
    )
}

export default ReserveCast
