import React, { Component } from 'react';
import {  Table } from 'react-bootstrap';



export class personaConsulta extends Component {
    static displayName = personaConsulta.name;
    
    render () {
        return (
            <div class="container">
                <h1 class="text-center"> Tabla De Personas</h1> <br></br>
            
<Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>#</th>
      <th>Identificacion</th>
      <th>Nombre</th>
      <th>Edad</th>
      <th>Sexo</th>
      <th>Pulsacion</th>

    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td>@fat</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td colSpan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</Table>
</div>
 );
}
}