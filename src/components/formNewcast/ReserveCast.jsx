import React from 'react';
import ListActress from './Actress';
import DateTime from './DateTime';
import Card from '../CardNewCast';
import Grid from '../Grid';
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
                </Grid>
            </Card>
        </div>
    )
}

export default ReserveCast
