import { useState } from "react";
import { firestore } from "../../../commons/firebase"
import MainUI from "./main.presenter";

export default function MainContainer(){
  const db = firestore;
  // const data = [];
  // db.collection('product').get().then((snapshot)=>{
  //   snapshot.forEach((doc)=>{
  //     data.push(doc.data())
  //   })
  // })

  const getData = async()=>{
    try{
      const product = db.collection('product');
      const result = (await product.get()).docs.map(snapshot =>snapshot.data() )
      console.log(result)
     
      return result
 
    }catch(error){

    }
  }
  let a =   getData();
  console.log(a)


  
  return(
    <MainUI data={"D"}/>
  )
}