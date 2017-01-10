/* @flow */
import { render } from 'react-dom'

import './index.css'

const rootEl = document.getElementById('container')

render(
  <div>
    <h1>Hello, React!</h1>
  </div>,
  rootEl,
)
