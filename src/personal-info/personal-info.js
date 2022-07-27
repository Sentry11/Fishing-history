
import { useParams } from "react-router-dom"
import { useEffect } from "react"

import Landing from "./landing/landing"
import About from "./about/about"
import FishermanTool from "./fisherman-tools/fishermen-tool"
import Sights from "./sights/sights"
import Vehicle from "./vehicles/vehicles"
import Skills from "./skills/skills"
import getfisherman from './../services/get-fisherman'

import "./personal-info.scss"



const PersonalInfo = () => {

    const {Id} = useParams();
    const data = getfisherman(Id);

    useEffect(() => {
    window.scrollTo(0,0);
      // eslint-disable-next-line
  }, [])


    
    return(
       <>
          <Landing name = {data.singleName} num = {data.singleNum} img = {data.singlePhoto}/>  
          <About aboutSmall = {data.about1} aboutLarge = {data.about2} /> 
          <FishermanTool imgRod = {data.imgRod} imgFeeder = {data.imgFeeder} imgHooks = {data.imgHook} /> 
          <Sights sights = {data.wherewas}/>
          <Vehicle veh1 = {data.imgVehicle1} veh2 = {data.imgVehicle2} veh3 = {data.imgVehicle3}/>
          <Skills skills = {data.skills} />
      </>
    )
}

export default PersonalInfo