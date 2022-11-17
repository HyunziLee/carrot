import ActionAreaCard from "../../commons/mui/card";
import { v4 as uuidv4 } from 'uuid';

export default function MainUI(props){
  
  return(
    <>
    {
      props.result && (
        props.result.map((el)=>(
          <ActionAreaCard result={el} key={uuidv4()}/>
        ))
      )
      
    }

    </>
  )
}