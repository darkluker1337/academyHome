import { Component } from "../../../core";

export class Menu extends Component{
    constructor(){
        super();
    }

    static get observedAttributes(){
        return ['items'];
        }
    render(){
        console.log(this.props.items)
        const items = JSON.parse(this.props.items)
        return`
            <ul>
                ${items.map((item)=>(`
                    <li>
                        <a href='${item.href}'>${item.label}</a>
                    </li>
                `)).join(' ')}
            </ul>
        `
    }
}
customElements.define('my-menu',Menu)