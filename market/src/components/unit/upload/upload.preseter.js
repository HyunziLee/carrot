import { Button } from "@mui/material";
import Input from "../../commons/mui/input";
import UploadButton from "../../commons/mui/uploadBtn";

export default function UploadUI(props){
  return(

  <form onSubmit={props.handleSubmit(props.onChangeInput)}>
    <Input title="제목" register={props.register} value="title"/>
    <Input title="상세설명" register={props.register} value="contents"/>
    <Input title="가격" register={props.register} value="price" />
  
    <UploadButton uploadFile={props.uploadFile} />
    <Button type="submit" onClick={props.onChangeInput}>등록하기</Button>
  </form>
  )
}
