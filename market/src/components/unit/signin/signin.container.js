import { useForm } from "react-hook-form";
import SignInUI from "./signin.presenter";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


export default function SignInContainer(){
  const auth = getAuth();
  const {
    register,
    handleSubmit,
    formState
  } = useForm();
  const onClickSubmit = (data)=>{
    signInWithEmailAndPassword(auth, data.email, data.password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
  }
  return(
    <SignInUI 
      register={register} 
      handleSubmit={handleSubmit} 
      onClickSubmit={onClickSubmit}
      formState={formState}
    />
  )
}