import React from 'react'
import { useInView } from '../utils/Scroll'
import { Link } from 'react-router'

const Program = () => {

  const [ref1, inView1] = useInView(0.5);
  const [ref2, inView2] = useInView(0.5);
  const [ref5, inView5] = useInView(0.7);
  const [ref3, inView3] = useInView(0.5);
  const [ref4, inView4] = useInView(0.7);

  return (

    <>

      {/* class and program */}
      <div ref={ref1}>

        <div className={`font-[600] md:text-[1.4rem] opacity-0 ${inView1 ? "typing opacity-100" : ""} `}>From Early Learning to Senior Secondary Success</div>

        <div className={`text-[1rem] mt-10 sm:w-[75%] ml-[10%] opacity-0 ${inView1 ? "fadeIn opacity-100" : ""} `}>
          At our school, we offer a well-structured learning journey from LKG to Class 12, focusing on holistic development
          and academic excellence. Our Pre-Primary section LKG & UKG emphasizes joyful, activity-based learning, while the
          Primary classes 1-5 build strong foundations in literacy, numeracy, and creativity. In the Middle section 6-8, we
          encourage critical thinking through project-based learning and hands-on experiments. Our High School 9-10 focuses
          on board exam preparation, while Senior Secondary 11-12 offers Science, Commerce, and Humanities streams, empowering
          students for competitive exams and higher education.
        </div>

        <div className='sm:mt-6 mt-3'>
          <Link className="px-2 py-1 ml-[10%] text-xl rounded-lg text-white shadow cursor-pointer bg-[#2563EB] hover:bg-[#1E40AF]" to="/adimisson">Adimission</Link>
        </div>

      </div>

      <div className='md:w-[80%] mx-auto my-10 '>

        <div ref={ref2} >
          <p className='md:text-[1.2rem] font-semibold'>Friende Environment With Children</p>
          <div className='md:flex my-10 justify-evenly'>
            <img src="photos/play.avif" className={`h-[25rem] md:w-[45%] rounded-3xl opacity-0 ${inView2 ? "card3 opacity-100" : ""}`}></img>
            <img src="photos/class.avif" ref={ref5} className={`h-[25rem] md:w-[45%] mt-6 sm:mt-0 rounded-3xl opacity-0 ${inView5 ? "card3 opacity-100" : ""}`}></img>
          </div>
        </div>

        <div ref={ref3} >
          <p className='md:text-[1.2rem] font-semibold'>Neat & Clean Classroom and Library</p>
          <div className='md:flex my-10 justify-evenly'>
            <img src="photos/classroom.avif" className={`h-[25rem] md:w-[45%] rounded-3xl opacity-0 ${inView3 ? "card3 opacity-100" : ""}`}></img>
            <img src="photos/librery.avif" ref={ref4} className={`h-[25rem] md:w-[45%]  mt-6 sm:mt-0 rounded-3xl opacity-0 ${inView4 ? "card3 opacity-100" : ""}`}></img>
          </div>
        </div>

      </div>

    </>
  )
}

export default Program
