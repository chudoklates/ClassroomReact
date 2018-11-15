import React, {Component} from 'react'
import { fetchStudentArray } from './constants'
import { Student } from './components'

export default class Classroom extends Component {
  constructor(props){
    super(props)
    console.log(fetchStudentArray)
    this.state = {
      teacher: {
        name: "Wojciech J.",
        _id:"666999momishot"
      },
      isFull: false,
      currentStudentCount: 0
    }
  }

  handleClick = (e, _) => {
    e.preventDefault()
    if(_) {
      console.log(_)
    }
    this.setState({teacher: {name: 'prod', _id:'dorp'}})
  }

  render() {
    return (
      <div>
         <p>{`Welcome b Mr. ${this.state.teacher.name}`}</p>

         <Student {...fetchStudentArray.data[0]} customFunction = {this.handleClick}/>

         {
           fetchStudentArray.data.map((item, i) => (
             <div key={item._id}> 
               {`[${i}]: ${item._id} = ${item.name}`}
            </div>
           ))
         }
         <button onClick = {e => this.handleClick(e, 'sex')}/>
      </div>
    );
  }
}

