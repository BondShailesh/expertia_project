import { useEffect, useState } from "react";
import CustomButton from "./CustomButton";
import CustomInput from "./CustomInput";
import axios from 'axios'
import { useRouter } from "next/router";

export default function Dashboard() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
  const [name, setName] = useState("")

  let [todoInput, setTodoInput] = useState({})
  //handling Input box
  const handleChange = (e) => {
    let { name, value } = e.target;
    setTodoInput({
      ...todoInput,
      [name]: value
    })
  }

  const handleAddTodo = async () => {
    let id = localStorage.getItem("userId") || ""

    try {
      let x = await fetch("https://frail-blue-hippo.cyclic.app/todos", {
        method: "POST",
        body: JSON.stringify({
          todo: todoInput.todo,
          user_id: id
        }),
        headers: {
          'content-type': "application/json"
        }
      })
      x = await x.json()
      getTodos(id)
    }
    catch (e) {
      alert('Daily limit exceeded')
    }
  }

  const getTodos = (id) => {
    axios.get("https://frail-blue-hippo.cyclic.app/todos/todaystodo", {
      headers: { uid: id }
    })
      .then((r) => {
        setData(r.data)

      })
  }

  const handleLogout = async () => {
    let token = localStorage.getItem("token") || ""

    try {
      let x = await fetch("https://frail-blue-hippo.cyclic.app/logout", {
        method: "PATCH",
        headers: {
          token: JSON.parse(token)
        }
      })

      router.push("/user/login")
      return
    }
    catch (e) {
      console.log("error")
    }
  }

  useEffect(() => {

    let token = localStorage.getItem("token") || ""
    if (!token) {
      router.push("/user/register")
      return
    }
    try {
      axios("https://frail-blue-hippo.cyclic.app/verifytoken", {
        method: "GET",
        headers: {
          token: JSON.parse(token)
        }
      })
        .then((r) => {
          if (!r.data.loggedIn) {
            router.push("/user/register")
            return
          }
          localStorage.setItem("userId", r.data._id)
          setName(r.data.userName)
          getTodos(r.data._id)

          setLoading(false)
        })
    } catch (e) {
      setLoading(false)
    }

  }, [])

  if (loading) {
    return <div>Loading....</div>
  }
  return (
    <div >
      <div className='lg:w-[400px] lg:h-[540px] w-[329px] h-[550px]
        mt-[60px] p-[30px]
        mx-auto
        border-2 rounded-xl '>

        <p className='text-xl'>Hello</p>

        <h1 className='font-medium text-2xl leading-[45px]'>{name}</h1>

        <p className='leading-[24px] mt-[23px] mb-[23px]'>Good to see you here</p>

        <p className='leading-[24px] font-bold mb-[20px]'>Tasks for <span>24Dec,2022:</span></p>

        {data.map((el) => (
          <li key={el._id}> {el.todo}</li>
        ))}

        <div className='relative bottom-[-50px]'>

          <CustomInput placeholderValue='Eg. Need to finish assig...' typeValue='text' handleChange={handleChange} name="todo" />

          <CustomButton innerText='Add New Task' handleClick={handleAddTodo} />

          <div className='flex justify-center'><button onClick={handleLogout}>Logout</button></div>
        </div>

      </div>
    </div>
  )
}
