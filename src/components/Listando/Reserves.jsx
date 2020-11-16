import React from 'react';
import Api from '../../service/api';

class List extends React.Component {
    state = {
        reservas: []
    };

    componentDidMount() {
        const url =  Api.get('/reserve/list').then((response) => {
            console.log(response.data);
            this.setState({reservas: response.data});
          });
        fetch(url)
            .then(res => res.json())
            .then(res => {
                this.setState({
                  reservas: res
                });
            });
    }
    render() {
      const { reservas } = this.state;
      if(reservas.length === 0){ return <h1>Não há reservas</h1>}
        return (
            <div>
                <h1>Lista de reservas</h1>

                <ul>
                    {this.state.reservas.map(reserva => (
                        <li key={reserva.reserveDate}>
                            <p><b>Data:</b> {reserva.reserveDate}</p>                           
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default List;