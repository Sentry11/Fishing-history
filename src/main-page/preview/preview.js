import { Component } from "react";
import "./preview.scss"
import backvideo from '../../image/backvideo.mp4'

const Video = (props) => {
  return (
    <video className="video" autoPlay muted loop>
      <source src={props.videoUrl}  type={props.type} />
    </video>
   );
} 


class Preview extends Component {
  constructor(props){
    super(props);
    this.state ={
      videoUrl: backvideo,
      type: "video/mp4"
    }
  }
    render(){
   
    return (
      <>
      <div className="container-header">
          <div className="for-video"> 
             <Video className="video" videoUrl = {this.state.videoUrl} type =   {this.state.type}/>
          </div>
      </div>

      </>
     
     )
    }
}

export default Preview;
