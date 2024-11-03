import React from 'react'
import Container from './Container'
import WorkCard from './WorkCard'
import Work_one from '../assets/Image/work_one.jpg'
import Work_two from '../assets/Image/work_two.jpg'
import Work_three from '../assets/Image/work_three.jpg'
import Work_four from '../assets/Image/work_four.jpg'
import Work_five from '../assets/Image/work_five.jpg'
import WorkCardTwo from './WorkCardTwo'

const WorkPart = () => {
   return (
      <section className='py-20 bg-[#f6f7fe] mt-[150px]'>
         <Container>
            <div className="flex gap-x-24">
               <div className="">
                  <h3 className='font-bold font-Nunito  text-[40px] w-[410px]'>Do you want to know, How Us Work?</h3>

               </div>
               <div className="">
                  <p className='w-[510px] pt-5'>Let me show you the flow of our work. We want to transparent to
                     you. We believe, you must know what we work for you. We want to
                     educate you what you face today.</p>
               </div>
            </div>
            <div className="mt-20 flex gap-x-10">
               <WorkCard
                  src={Work_one}
                  num={1}
                  h3text={`Research First`}
                  ptext={`First of all, we usually research first . We take research for know grassroot of problem from our client.`}
               />
               <WorkCard
                  src={Work_two}
                  num={2}
                  h3text={`Wireframe Second`}
                  ptext={`The Second Flow, we move into wireframing process. It use to mapping the problem througt find the solution`}
               />
               <WorkCard
                  src={Work_three}
                  num={3}
                  h3text={`Execute for Last`}
                  ptext={`At last but no least. This is the last step is Execute. We execute the idea that we get from wireframing process.`}
               />
            </div>


         </Container>
         {/* 2nd part start here */}
         <div className="bg-white py-28 mt-32">
            <Container className={`flex gap-10`}>
               <div className="">
                  <WorkCardTwo
                     src={Work_four}
                     ptext={`We give you thousand recommendations of Apartment, House also Hotel that can make your life become easier than before. Let’s search what you want below. Cheerio guys.`}
                     atext={`About Us`}
                  />
               </div>
               <div className="">
                  <WorkCardTwo
                     src={Work_five}
                     ptext={`After we give you so so much more recommendations. You can choose whatever you want based on your needs. Don’t forget to apply code for discount 50%. Just for today`}
                     atext={`Start Searching`}
                  />
               </div>

            </Container>
         </div>
         {/* 2nd part end here */}

      </section>
   )
}

export default WorkPart