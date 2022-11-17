import { useEffect, useState } from "react";
import { firestore } from "../../../commons/firebase"
import MainUI from "./main.presenter";

export default function MainContainer(){
  const db = firestore;
  const [result, setResult] = useState([])
  // const data = [];
  // db.collection('product').get().then((snapshot)=>{
  //   snapshot.forEach((doc)=>{
  //     data.push(doc.data())
  //   })
  // })
  useEffect(()=>{
    getData()
  },[])

  const getData = async()=>{
    try{
      const product = db.collection('product');
      const result = (await product.get()).docs.map(snapshot =>snapshot.data() )
      setResult(result)
 
    }catch(error){
      console.log(error)
    }
  }

  return(
    <MainUI result={result}/>
  )
}