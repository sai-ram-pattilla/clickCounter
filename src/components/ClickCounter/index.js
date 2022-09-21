import {component} from 'react'
import './index.css'

class ClickCounter extends component {
  render() {
    return (
      <div>
        <h1 className="heading">The button has been clicked 0 times</h1>
      </div>
    )
  }
}

export default ClickCounter
