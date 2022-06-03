import { Component } from "react";
import videoback from './../image/videoback.mp4'
import "./preview.scss"

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
      videoUrl: videoback,
      type: "video/mp4"
    }
  }

 
    render(){
      console.dir(videoback)
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

console.log('Zalupko');
export default Preview;
