import React from 'react';

class Collapsible extends React.Component {
render(){
    const {id, handleChange, coId, name, from} = this.props;
    return(
        <section id={id} className="section--container">
        <div data-id={id} className="click--container" onClick={handleChange}>
          <h2 className="palette--name">{name}</h2>
        </div>
        <div className={`collapsible--container${coId === id ? 'open--container' : ''}`}>
          <p className="palette--movie">{from}</p>
        </div>
        </section>
    )
}
}

export default Collapsible;