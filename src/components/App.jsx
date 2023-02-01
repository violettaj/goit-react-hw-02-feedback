import { Component } from 'react'
import { Feedback } from './Feedback/Feedback';

class App extends Component {
    render() {
      return (
        <div>
            <Feedback step={1} />
        </div>
      );

    }
}

