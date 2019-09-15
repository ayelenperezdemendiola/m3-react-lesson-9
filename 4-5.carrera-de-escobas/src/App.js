import React from 'react';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [
        { name: 'Nymphadora Tonks', time: 9 },
        { name: 'Cedric Diggory', time: 28 },
        { name: 'Cho Chang', time: 35 },
        { name: 'Luna Lovegood', time: 45 },
        { name: 'Gregory Goyle', time: 56 }
      ]
    }
  }
  render() {
    const [first, second, third] = this.state.data; 
    const {name : nameWinner, time: timeWinner} = first;
    const {name : nameSecond, time : timeSecond} = second;
    const {name : nameThird, time : timeThird} = third;

    return (
      <React.Fragment>
        {
          console.log (`Primer lugar para ${nameWinner} que hizo un tiempo de ${timeWinner}, segundo lugar para ${nameSecond}, con un tiempo de ${timeSecond}; y tercer lugar para ${nameThird}, con un tiempo de ${timeThird}`)
        }
      </React.Fragment>
    )
  }
}

// EJERCICIO 5
// De nuevo la carrera de escobas
// Revisa el ejercicio 4 para acceder al nombre y tiempo de los ganadores usando destructuring de array y de objeto para imprimirlos en la consola.
export default App;
