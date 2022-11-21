import { Component } from "../../../core";
import "../../atomcs/Menu/Menu";
import "../../atomcs/Button/Button";
import './MenuGroup.scss'

export class MenuGroup extends Component {
  constructor() {
    super();
    this.state = {
      isOpen:true,
      items: [
        {
          href: "#",
          label: "item-1"
        },
        {
          href: "#",
          label: "item-1"
        },
        {
          href: "#",
          label: "item-1"
        },
        {
          href: "#",
          label: "item-1"
        }
      ]
    };
  }

  onClick(){
    this.setState((state)=>{
        return {
            ...state,
            isOpen: !state.isOpen
        }
    })
  }

  componentDidMount(){
    this.addEventListener('show-menu', this.onClick)
  }

  componentWillUnmount(){
    
}


  render() {
    return `
            <my-button eventtype='show-menu' content='menu'></my-button>
            <my-menu items='${JSON.stringify(this.state.items)}' class='${this.state.isOpen ? 'show':'hidden'}' ></my-menu>
        `;
  }
}

customElements.define("my-group-menu", MenuGroup);
