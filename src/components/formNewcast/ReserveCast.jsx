import React from 'react';
import ListActress from './Actress';
import DateTime from './DateTime';
import Card from '../CardNewCast';
import Grid from '../Grid';
import ButtonReserv from './ButtonReserve';
import Producer from './Producer';
import regeneratorRuntime from "regenerator-runtime";

function ReserveCast() {
    return (
        <div>
            <Card>
                <Grid >
                    <DateTime />
                    <ListActress />
                    <Producer />
                    <ButtonReserv />
                </Grid>
            </Card>
        </div>
    )
}

export default ReserveCast
