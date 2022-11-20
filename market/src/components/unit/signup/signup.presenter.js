import { Button } from "@mui/material";
import Input from "../../commons/mui/input";

export default function SignUpUI(props){
  return(
    
      <form onSubmit={props.handleSubmit(props.onClickSubmit)}>
        <Input title="name" register={props.register} value="name"/>
        <Input title="email" register={props.register} value="email"/>
        <Input title="password" register={props.register} value="password"/>
        

        <Button type="submit" onClick={props.onClickSubmit}>가입하기</Button>
      </form>
    
  )
}