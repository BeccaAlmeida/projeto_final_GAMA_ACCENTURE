import React from 'react';
import ListActress from './Actress';
import ListProducer from './Producer';
import DateTime from './DateTime';
import Grid from '../Grid';
import ButtonReserv from './ButtonReserve';

function ReserveCast() {
    return (
        <div>
            <Grid >
                <DateTime />
                <ListActress />
                <ListProducer />
                <ButtonReserv />
            </Grid>
        </div>
    )
}

export default ReserveCast
