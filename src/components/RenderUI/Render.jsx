import React from 'react'
import './style.css'

// export default function Render(props) {
//   return (
//     <div className='products'>
//         <div>
//             <img src={props.img} alt="" />
//         </div>
//         <div className='infor'>
//             <h1>{props.name}</h1>
//             <p>{props.desc}</p>
//             <span>{props.price}</span>
//             <button>MUA NGAY</button>
//         </div>
//     </div>
//   )
// }

class Render extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: props
    }

    this.handleDelete = (id) => {
      console.log(this.state.data.id);
    }
  }

  render() {
    return(
      <div className='products' id={this.props.id}>
        <div>
            <img src={this.props.img} alt="" />
        </div>
        <div className='infor'>
            <h1>{this.props.name}</h1>
            <p>{this.props.desc}</p>
            <span>{this.props.price}</span>
            <button>MUA NGAY</button>
            <button onClick={() => this.props.onDelete(this.props.id)}>Delete</button>
        </div>
    </div>
    )
  }
}
export default Render;

