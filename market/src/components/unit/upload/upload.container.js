import { useState } from "react";
import { useForm } from 'react-hook-form';
import { firestorage, firestore } from "../../../commons/firebase";
import UploadUI from "./upload.preseter";

export default function UploadContainer(){
  const {
    register,
    handleSubmit,
    formState
  } = useForm();
  
  const db = firestore;
  const storage = firestorage;
   // db.collection('product').doc('상품3').set({title: "키보드"})

   // 보통 add()로 많이 씀 => 파일명 알아서 생성해줌
   db.collection('product').add({})

   const onChangeInput = async(data)=>{
    try{
       await db.collection('product').add({
        title: data.title,
        contents: data.contents, 
        price: data.price,
        date: new Date()
      }).then((result)=>{
        console.log(result);
      }).catch(()=>{

      })
      
    }catch(error){}
    

   }

  return(
    <UploadUI 
      register={register} 
      handleSubmit={handleSubmit} 
      onChangeInput={onChangeInput}
      formState={formState}
      />
  )
}