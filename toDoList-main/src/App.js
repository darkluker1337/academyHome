import { Component } from "./core";
import './components/moleculs/GroupMenu/MenuGroup'

export class App extends Component {



  render() {
    return `
      <div class='container mt-5'>
        <my-group-menu></my-group-menu>
      </div>
        `
  }
}

customElements.define("my-app", App);
