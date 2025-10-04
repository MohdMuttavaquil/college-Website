import React from 'react'
import { useInView } from '../utils/Scroll'

const About = () => {

    const [ref1, inView1] = useInView(0.5);
    const [ref2, inView2] = useInView(0.5);
    const [ref3, inView3] = useInView(0.5);
    const [ref4, inView4] = useInView(0.5);

    return (
        <>

            {/* About College */}
            <div ref={ref1} className="about flex flex-col py-12 gap-6">

                <div className='college-photo flex gap-10'>

                    <div className={`text-[1rem] sm:mt-4 opacity-0 mt-2 ${inView1 ? "fadeIn opacity-100" : ""} `}>

                        <div className={`font-[600] md:text-[1.5rem] mb-4 sm:mb-10 opacity-0 ${inView1 ? "typing opacity-100" : ""} `}>Durga Modren Inter College</div>

                        DMIC At we offer a well-rounded CBSE education from LKG to 12th, with dedicated streams
                        in Science, Commerce, and Arts. Our campus features smart classrooms, fully-equipped science
                        and computer labs, commerce and art studios, a library, and large playgrounds for sports
                        and physical activities. With experienced teachers and a focus on both academics and life
                        skills, we help every student grow into a confident, future-ready individual.

                        <br></br>
                        <a href='#program' className="inline-block mt-4 border border-black px-2 py-1 text-xl rounded-lg hover:text-white cursor-pointer hover:bg-slate-900" >Read More</a>

                    </div>
                    <img src="./photos/college.png" className={`h-[20rem] w-[50%] mt-6 rounded-3xl hidden md:flex opacity-0 ${inView1 ? "card4 opacity-100" : ""} `}></img>
                </div>

            </div>


            {/* Student achievement */}
            <div className='py-16'>

                <div ref={ref2} >
                    <div className={`font-[600] md:text-[1.5rem] opacity-0 ${inView2 ? "typing opacity-100" : ""} `}>Our Students Achievement</div>
                    <div className={`text-[1rem] sm:my-6 opacity-0 my-2 sm:w-[75%] ml-[10%]  ${inView2 ? "fadeIn opacity-100" : ""} `}>
                        Our school proudly announces a 100% result in both Class 10 and Class 12 board examinations! In Class 10, we achieved an
                        impressive 96% as the top score, becoming the city topper, with six students scoring above 90% and two students securing
                        places in the top 100 in Uttarakhand. Additionally, 75% of Class 10 students passed with first division. In Class 12,
                        our topper from the Science stream scored 94% overall, with 96 in Chemistry and 95 in Mathematics, ranking 29th in
                        Uttarakhand, and two students featured in the top 100. 69% of Class 12 students passed with first division, marking a
                        year of remarkable success.
                    </div>
                </div>

                <div ref={ref4} className="topper flex justify-evenly flex-wrap">

                    <div className={`${inView4 ? "card1 opacity-100" : ""} opacity-0 flex-col w-[45%] sm:w-[23%] bg-gray-200 sm:pb-4 text-center rounded-xl`}>
                        <img className='md:h-[18rem] h-[10rem] w-full rounded-lg' src='./photos/rihan.jpg'></img>
                        <div className='bg-[#812972] text-center text-white text-xl'>10th Topper<br></br> 95.4%</div>
                        <p className='pt-3.5 text-[1rem] hidden sm:flex'>Lorem ipsum dolor sit amet consectetur adipisicing elit somthing extra. </p>
                    </div>

                    <div className={`${inView4 ? "card2 opacity-100" : ""} opacity-0 flex-col w-[45%] sm:w-[23%] bg-gray-200 sm:pb-4 text-center rounded-xl`}>
                        <img className='md:h-[18rem] h-[10rem] w-full rounded-lg' src='./photos/afseen.jpg'></img>
                        <div className='bg-[#812972] text-center text-white text-xl'>10th Topper <br></br> 95.4%</div>
                        <p className='pt-3.5 text-[1rem] hidden sm:flex'>Lorem ipsum dolor sit amet consectetur adipisicing elit somthing extra. </p>
                    </div>

                    <div className={`${inView4 ? "card3 opacity-100" : ""} opacity-0 flex-col w-[45%] sm:w-[23%] bg-gray-200 sm:pb-4 text-center rounded-xl sm:mt-0 mt-6`}>
                        <img className="md:h-[18rem] h-[10rem] w-full rounded-lg" src='./photos/arman.jpg'></img>
                        <div className='bg-[#812972] text-center text-white text-xl'>10th Topper <br></br> 95.4%</div>
                        <p className='pt-3.5 text-[1rem] hidden sm:flex'>Lorem ipsum dolor sit amet consectetur adipisicing elit somthing extra.</p>
                    </div>

                    <div className={`${inView4 ? "card4 opacity-100" : ""} opacity-0 flex-col w-[45%] sm:w-[23%] bg-gray-200 sm:pb-4 text-center rounded-xl sm:mt-0 mt-6`}>
                        <img className="md:h-[18rem] h-[10rem] w-full rounded-lg" src='./photos/sachin.jpg'></img>
                        <div className='bg-[#812972] text-center text-white text-xl'>10th Topper <br></br> 95.4%</div>
                        <p className='pt-3.5 text-[1rem] hidden sm:flex'>Lorem ipsum dolor sit amet consectetur adipisicing elit somthing extra.</p>
                    </div>

                </div>

            </div>

            {/* Message to socity */}
            <div ref={ref3} className={`${inView3 ? "fadeIn opacity-100" : ""} opacity-0 w-full py-3 pl-2 sm:w-[80%] my-10 bg-[#812972] flex mx-auto items-center md:gap-8 text-white rounded-2xl`} >

                <img src="photos/logo.png" className='md:h-52 h-24 w-[60%] hidden md:flex px-2'></img>

                <div className='flex-col'>

                    <div className='font-[600] text-white md:text-[1.5rem] text-[1.25rem] sm:mb-4 mb-1'>Our messege to society</div>
                    <div className='md:mr-8 text-[1rem]'>Education is the key to a better future. It gives us
                        knowledge, confidence, and the power to achieve our dreams.
                        Education helps fight poverty, builds character, and teaches
                        us to respect others. It shapes our lives and our world.
                        Let's value and promote education for a brighter tomorrow. </div>
                </div>

            </div>

            <div id="program"></div>

        </>
    )
}

export default About
