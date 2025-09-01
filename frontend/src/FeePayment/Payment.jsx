import React from 'react'
import { useForm } from "react-hook-form"
import axios from 'axios'
import { useAuth0 } from '@auth0/auth0-react'

const Payment = () => {

     const { isAuthenticated } = useAuth0()

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isSubmitting },
    } = useForm()

    //const url = "http://localhost:3000"

    const url = "https://college-website-beckend.onrender.com"

    const onSubmit = async (data) => {

        const info = {
            studentName: data.studentName,
            rollNo: data.rollNo,
            phoneNo: data.phoneNo,
            className: data.class
        }

        const res = await axios.post(`${url}/api/onlinepay`, { info })
        
        if(isAuthenticated===true){ 
        onlinepay(res.data)}else{
        alert("please singin")
    }
    }

    const onlinepay = async (order) => {
        const options = {
            key: 'rzp_test_QXiPiAaXY4WeKN',
            amount: order.amount,
            currency: order.currency,
            name: "DMIC",
            description: 'Test Transaction',
            order_id: order.id,
            handler: async function (response) {
                const res  = await axios.post(`${url}/api/verifypay`, {
                    order_id: response.razorpay_order_id,
                    payment_id: response.razorpay_payment_id,
                    signature: response.razorpay_signature,
                })

                if (res.data.success) {
         alert("Open link and download fee recipt")
         window.open(`${url}/api/receipt`, "_blank")

         } else {
        alert("Payment verification failed!");
      }
    },
            prefill: {
                name: 'Test User',
                email: 'test@example.com',
                contact: '9999999999',
            },
            theme: {
                color: '#812972',
            },
        };

        const rzp = new window.Razorpay(options);
        rzp.open();

    }


    return (
        <div className='sm:w-[80%] w-[95%] mx-auto min-h-screen'>

            <div className='fadeIn font-[600] md:text-[1.4rem] sm:w-[70%] mt-10 mx-auto'>Secure & Hassle-Free Online Fee Payment</div>
            <div className='fadeIn sm:w-[70%] mt-2 mx-auto'>
                We provide a convenient and secure online platdiv for fee payment, ensuring parents can complete transactions anytime,
                anywhere. Our payment gateway supports UPI, Net Banking, Credit/Debit Cards, and popular digital wallets, making the
                process fast and easy.
            </div>
            <div className='fadeIn sm:w-[70%] mt-2 mx-auto'><span className='font-bold'>Note: </span>This fee is first sesstion. Our college has two sesstion in a year so students can pay fee in two diffrent section</div>

            <form onSubmit={handleSubmit(onSubmit)} className='my-10 md:w-[30%] rounded flex justify-center flex-col mx-auto shadow border-2 border-white'>

                <div>
                    <label>
                        <div className="px-8 mt-2 text-xl">Student Name</div>
                        <input className=" w-[80%] focus:outline-0 text-xl rounded-xl border-b-2 pb-2 border-b-white ml-8 " placeholder="Student Name" type="text" {...register("studentName", { required: true })} />
                        {errors.studentName && <div className="px-8 text-red-600">This field is required</div>}
                    </label>
                </div>

                <div>
                    <label>
                        <div className="px-8 mt-2 text-xl">Roll Number</div>
                        <input className=" w-[80%] focus:outline-0 text-xl rounded-xl border-b-2 pb-2 border-b-white ml-8 " placeholder="Roll Number" type="number" {...register("rollNo", { required: true })} />
                        {errors.rollNo && <div className="px-8 text-red-600">This field is required</div>}
                    </label>
                </div>

                <div>
                    <label>
                        <div className="px-8 mt-2 text-xl">Class</div>

                        <select className=" focus:outline-0 text-xl rounded-xl border-b-2 pb-2 border-b-white ml-8 " {...register("class", { required: true })} >
                            <option value="Nursery">Nursery</option>
                            <option value="LKG">LKG</option>
                            <option value="UKG">UKG</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                        </select>

                        {errors.class && <div className="px-8 text-red-600">This field is required</div>}
                    </label>
                </div>

                <div>
                    <label>
                        <div className="px-8 mt-2 text-xl">Phone No</div>
                        <input className=" w-[80%] focus:outline-0 text-xl rounded-xl border-b-2 pb-2 border-b-white ml-8 " placeholder="Phone Number" type="number" {...register("phoneNo", { required: true })} />
                        {errors.phoneNo && <div className="px-8 text-red-600">This field is required</div>}
                    </label>
                </div>

                <input className="px-2 py-1 my-4 mb-8 text-2xl cursor-pointer font-bold bg-[#2563EB] hover:bg-[#1E40AF] fadeIn rounded-lg border-1 border-white" type="submit" value="Payment" />
            </form>
        </div>
    )
}

export default Payment
