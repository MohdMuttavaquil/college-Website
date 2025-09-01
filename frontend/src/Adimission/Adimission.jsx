import { useForm } from "react-hook-form"
import { useState } from "react"
import axios from "axios"
import { useAuth0 } from "@auth0/auth0-react"

export default function Adimission() {
   const { isAuthenticated } = useAuth0()

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm()

  // const url = "http://localhost:3000"
  const url = "https://college-website-beckend.onrender.com"

  const [show, setShow] = useState(true)
  const [code, setCode] = useState(0)

  const onSubmit = async (data) => {
    const info = {
      fullName: data.fullName,
      fatherName: data.fatherName,
      phoneNo: data.phoneNo,
      dateOfBearth: data.dateOfBearth,
      className: data.class
    }
    console.log(isAuthenticated)
     
    if (isAuthenticated==true) {
    const res = await axios.post(`${url}/api/ragistration`, { info })
    setCode(res.data)
    setTimeout(() => {
      setShow(false)
    }, 1000);} else {
      alert("please singin")
    }
  }

  return (
    <div>

      <div className={show ? `sm:w-[25rem] w-[96%] fadeIn bg-gray-500 my-[5rem] shadow-2xl shadow-gray-500 rounded-3xl text-white mx-auto` : `hidden`}><div />
        <h1 className="pt-8 text-2xl font-bold text-center">Ragistration For Adimission</h1>
        <form className="pt-4" onSubmit={handleSubmit(onSubmit)}>

          <div>
            <label>
              <div className="px-8 mt-2 text-xl">Student Name</div>
              <input className=" w-[80%] focus:outline-0 bg-gray-500 text-xl rounded-xl border-b-2 pb-2 border-b-white ml-8 text-white " placeholder="Full Name" type="text" {...register("fullName", { required: true })} />
              {errors.fullName && <div className="px-8 text-red-600">This field is required</div>}
            </label>
          </div>

          <div>
            <label>
              <div className="px-8 text-xl my-1 ">Fathert Name</div>
              <input className=" w-[80%] focus:outline-0 bg-gray-500 text-xl rounded-xl border-b-2 pb-2 border-b-white ml-8 text-white " placeholder="Father Name" type="text" {...register("fatherName", { required: true })} />
              {errors.fatherName && <div className="px-8 text-red-600">This field is required</div>}
            </label>
          </div>

          <div>
            <label>
              <div className="px-8 text-xl mt-2 ">Phone No</div>
              <input className=" w-[80%] focus:outline-0 bg-gray-500 text-xl rounded-xl border-b-2 pb-2 border-b-white ml-8 text-white " placeholder="Phone No" type="text" {...register("phoneNo", { required: true })} />
              {errors.pnoneNo && <div className="px-8 text-red-600">This field is required</div>}
            </label>
          </div>

          <div>
            <label>
              <div className="px-8 text-xl mt-2 ">Date Of Berth</div>
              <input className=" w-[80%] focus:outline-0 bg-gray-500 text-xl rounded-xl border-b-2 pb-2 border-b-white ml-8 text-white " placeholder="Date Of Berth" type="date" {...register("dateOfBearth", { required: true })} />
              {errors.dateOfBearth && <div className="px-8 text-red-600">This field is required</div>}
            </label>
          </div>

          <div>
            <label>
              <div className="px-8 text-xl mt-2 ">Class</div>
              <select className="px-8 mt-2 bg-gray-500 focus:outline-0 text-xl" {...register("class", { required: true })}>
                <option value="Nursery">Nursery</option>
                <option value="9th">9th</option>
                <option value="11th">11th</option>
              </select>
            </label>
          </div>

          <input disabled={isSubmitting} className="px-2 py-1 cursor-pointer bg-emerald-500 text-white my-2 mb-8 mx-[10rem] font-bold rounded-lg" type="submit" value="Submit" />
        </form>
      </div>

      {//msg after ragistration complet
      }

      <div className={show ? `hidden` : `bg-gray-100 h-[26rem] md:w-[25rem] flex flex-col items-center sm:my-10 shadow-2xl shadow-gray-100 sm:rounded-3xl mx-auto`}>
        <div className="mt-16"> <img src="./photos/right.png" className="h-[12rem]"></img></div>
        <div className="text-2xl text-center mt-5">{code}</div>
        <div className="text-2xl text-center">For more query you can contact us </div>
      </div>

    </div>
  )
}