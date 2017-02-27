import React from 'react';
import {render} from 'react-dom';
import {Header} from './Header'
import {Footer} from './Footer'
import {Form} from './Form'
import {Details} from './Details'


class App extends React.Component{
  render(){
    return (
      <div>
        <Header />
        <Form />
        <Details />
        <Footer />
      </div>

    )
  }
}

render(<App/>, document.getElementById('app'));
