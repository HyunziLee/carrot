import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../../commons/firebase";
import MainUI from "./main.presenter";

export default function MainContainer(){

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
      const usersCollectionRef = collection(db, "product");
      
      const data = await getDocs(usersCollectionRef);
      const newData = data.docs.map(doc => ({
        ...doc.data()
      }));
      console.log(newData)
      setResult(newData)
 
    }catch(error){
      console.log(error)
    }
  }

  return(
    <MainUI result={result}/>
  )
}