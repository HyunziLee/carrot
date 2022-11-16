import ResponsiveAppBar from "../mui/navBar";


export default function Layout(props){
  return(
    <>
      <ResponsiveAppBar />
      <div>{props.children}</div>
    </>
  )
}