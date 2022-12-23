import Dashboard from "../component/Dashboard";
import axios from "axio"
export default function Home() {
  return (
    <>
     <Dashboard />
    </>
  )
}
export const getServerSideProps = async()=>{
  let data = await axios.get("http://localhost:8080/todos/",
  {
    headers:{uid:'63a41068673812b80e77eaff'}
  })
  data = await data.json()
  console.log(data,"fgfd");
  return {
    props: {name:data}   
   }
  }