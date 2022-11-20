import { Button } from "@mui/material";
import Input from "../../commons/mui/input";

export default function SignInUI(props){
  return(
    <form onSubmit={props.handleSubmit(props.onClickSubmit)}>
      <Input title="email" register={props.register} value="email"/>
      <Input title="password" register={props.register} value="password"/>
      

      <Button type="submit" onClick={props.onClickSubmit}>로그인</Button>
    </form>
  )
}