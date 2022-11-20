import { useState } from "react";
import { useForm } from 'react-hook-form';
import { db } from "../../../commons/firebase";
import UploadUI from "./upload.preseter";
import {ref, getStorage, uploadBytes, getDownloadURL} from 'firebase/storage'
import {collection, addDoc} from "firebase/firestore"

export default function UploadContainer(){
  const [files, setFiles] = useState([])
  const {
    register,
    handleSubmit,
    formState
  } = useForm();
  
  
  // const storage = firestorage;
   // db.collection('product').doc('상품3').set({title: "키보드"})
   // 보통 add()로 많이 씀 => 파일명 알아서 생성해줌
  //  db.collection('product').add({})

  const uploadFile = (event)=>{
    
    setFiles((prev)=>[...prev, event.target.files[0]])
  }

   const onChangeInput = async(data)=>{
    const storage = getStorage(); 
    const storageRef = ref(storage, `images/${files[0].name}`);
    console.log("나는스토리지",storage,"나는 스토리지 Ref",storageRef);
    uploadBytes(storageRef, files[0]).then((snapshot) => {
      console.log(snapshot,'이건 스냅샷');
      
      getDownloadURL(storageRef).then((url)=>{
          try {
            const docRef =  addDoc(collection(db, "product"), {
              title: data.title,
              contents: data.contents, 
              price: data.price,
              date: new Date(),
              image: url
            });
          
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }
      })
    });


   
   

    
    

   }

  return(
    <UploadUI 
      register={register} 
      handleSubmit={handleSubmit} 
      onChangeInput={onChangeInput}
      formState={formState}
      uploadFile={uploadFile}
      />
  )
}