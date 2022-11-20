import { useForm } from "react-hook-form";
import SignUpUI from "./signup.presenter";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

export default function SignUpContainer(){
  const auth = getAuth();
  const {
    register,
    handleSubmit,
    formState
  } = useForm();
  const onClickSubmit = (data)=>{
    console.log(data.email)
    if(!data) return
    createUserWithEmailAndPassword(auth, data.email, data.password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    updateProfile(auth.currentUser,{
      displayName: data.name
    }).then(result=>console.log(result)).catch(error=>console.log(error))
    // ...
    console.log(user)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

  }
  return(
    <SignUpUI 
      register={register} 
      handleSubmit={handleSubmit} 
      onClickSubmit={onClickSubmit}
      formState={formState}
    />
   
  )
}