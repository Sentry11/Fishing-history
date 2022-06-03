import { fishermen } from "../data/fishermen"
let result = null;


const getfisherman = (id) => {

     result = fishermen.filter( obj => {
        return obj.id === Number(id)
      })

      return(result[0])
  
}



export default getfisherman;