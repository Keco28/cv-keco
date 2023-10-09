import { LinkButton } from "@/components/LinkButton"
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaInstagramSquare} from "react-icons/fa"
import { AiFillInstagram, AiFillYoutube, AiFillGithub} from "react-icons/ai"
import { PiExcludeSquareDuotone} from "react-icons/pi"
import Image from 'next/image'
import { PercentageBar } from "@/components/PercentageBar"
import { Inter } from 'next/font/google'
import { SectionTitle } from "@/components/SectionTitle"
import { KnowledgeItem } from "@/components/KnowledgeItem"
import { EducationItem } from "@/components/EducationItem"
import { PortfolioItem } from "@/components/PortfolioItem"
import { HireMeDialog } from "@/components/Dialogs/HireMeDialog"
import { useState } from "react"
import { PortfolioDialog } from "@/components/Dialogs/PortfolioDialog"

const Home = () => {

  const [HireMeDialogOpen, setHireMeDialogOpen] = useState<boolean>(false)

  const handleHireMeClick = () => {
    setHireMeDialogOpen(true)
  }

  return (
    <div className="flex font-[Inter] h-full justify-between bg-[#F0F0F6]">
      <aside className="flex flex-col w-80 fixed h-full bg-white">
        <div className="flex flex-col gap-5 place-items-center">
        <br/>
          <div className="flex flex-col gap-1 place-items-center"> 
          <img className="w-[150px] h-[150px] rounded-full" src="/media/keco.png" alt="Imagen personal"/>
            <br/>
            <h1 style={{fontWeight: 500, fontSize: 18}}>Kevin Correa Reyes</h1>
            <h1 style={{color: "#767676"}}>Front-End Developer</h1>
          </div>
          <hr className="w-4/5 bg-[#F0F0F6]"/>
          <div className="flex flex-col justify-between w-4/5 "> 
            <div className="flex justify-between w-full">
              <h1>Age:</h1>
              <h1>21</h1>
            </div>
            <div className="flex justify-between w-full">
              <h1>Residence:</h1>
              <h1>Medellín,Colombia</h1>
            </div>
            <div className="flex justify-between w-full ">
              <h1>Freelance: </h1>
              <h1 style={{color: "red"}}>Unavailable</h1>
            </div>
            <div className="flex justify-between w-full">
              <h1>Email:</h1>
              <a style={{color: "#2D8F1D"}} href="mailto://kevincorrea2803@gmail.com">kevincorrea2803@gmail.com</a>
            </div>
          </div>
          <hr className="w-4/5 bg-[#F0F0F6]"/>
          <div className="flex flex-col w-4/5 gap-3"> 
            <h1 style={{fontWeight: 500, fontSize: 18}}>Languages</h1>
            <div className="flex flex-col gap-2 w-full ">
              <PercentageBar language="English" percentage={90}/>
              <PercentageBar language="Spanish" percentage={100}/>
            </div>
          </div>
          <hr className="w-4/5 bg-[#F0F0F6]"/>
          <div className="flex flex-col gap-3 w-4/5"> 
            <h1 style={{fontWeight: 500, fontSize: 18}}>Programming languages</h1>
            <div className="flex flex-col gap-2 w-full ">
              <PercentageBar language="Html" percentage={70}/>
              <PercentageBar language="CSS" percentage={70}/>
              <PercentageBar language="Python" percentage={80}/>
              <PercentageBar language="JS" percentage={50}/>
            </div>
          </div>
          <hr className="w-4/5 bg-[#F0F0F6]"/>
          <div className="flex flex-col gap-3 w-4/5"> 
            <h1 style={{fontWeight: 500, fontSize: 18}}>Extra Skills</h1>
            <div className="flex flex-col gap-2 w-full ">
              <div className="flex gap-3"> 
                <PiExcludeSquareDuotone style={{ color: "2D8F1D" }}/> 
                <h1 style={{ color: "2D8F1D" }}>
                  Great communication skills
                </h1>
              </div>
              <div className="flex gap-3"> 
                <PiExcludeSquareDuotone style={{ color: "2D8F1D" }}/> 
                  High adaptability
              </div>
            </div>
          </div>
        </div>
      </aside>
      <aside className="w-[23%]"></aside>
      <main className="flex flex-col max-w-[65%] content-center gap-[50px]">
        <section className="flex justify-around px-14 bg-white "> 
          <div className="flex flex-col  justify-center gap-6 w-3/5 h-full">
            <div className="flex flex-col">
              <h1 style={{fontWeight: 700, fontSize: 48}}>I’m Kevin Correa</h1>
              <div style={{fontWeight: 700, fontSize: 48}} className="flex gap-3 "> 
                <h1 style={{color: "#2D8F1D"}}>Front-end</h1>
                Developer
              </div>
            </div>
            <h1 className= "w-7/12" style={{fontWeight: 400, fontSize: 16, color: "#767676"}}>Junior Front-End Developer: Proficient in HTML, CSS, Python, collaborating with design teams to create visually engaging and user-friendly websites. Eager to learn and contribute to web development projects.
            </h1>
            <button className="flex justify-center  place-items-center w-[154px] h-[51px] bg-[#2D8F1D] rounded" onClickCapture={handleHireMeClick}>
              <h1 style={{fontWeight: 500, fontSize: 16}}> HIRE ME ➔</h1>
              <HireMeDialog open={HireMeDialogOpen} setHireMeDialogOpen={setHireMeDialogOpen}/>
            </button>
          </div>
          <div>
            <img className=" h-[459px] object-cover" src="/media/keco2.png" alt="Imagen personal" onDoubleClick={() => window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley')}/>
          </div>
        </section>
        <section className="flex flex-col gap-10 "> 
          <SectionTitle title="My Knowledge" description="I bring a versatile skill set to the table, with experience in web research, web development (HTML, CSS, JavaScript), video editing, game development, and virtual assistance. My expertise spans multiple domains, making me a valuable asset in various digital contexts."/>  
          <div className="flex flex-wrap justify-center gap-6">
            <KnowledgeItem icon="/media/internet.png" title="Web Research" description="Online research and data collection"/>
            <KnowledgeItem icon="/media/coding.png" title="Web Development" description="Blog, E-Commerce"/>
            <KnowledgeItem icon="/media/video-editing.png" title="Video Editing" description="Creating and improving video content"/>
            <KnowledgeItem icon="/media/game-development.png" title="Game Development" description="Character Design, Props & Objects"/>
            <KnowledgeItem icon="/media/assistant.png" title="Virtual Assistance" description="Remote administrative assistance"/>
          </div>
        </section>
        <section className="flex flex-col gap-10"> 
          <SectionTitle title="Education" description="My education is focused on building a strong foundation in programming, software development and soft skills for my professional career."/>
          <div className="flex flex-col bg-white">
            <EducationItem institution="Avelino Saldarriaga" dates="jan 2008 - nov 2018" certificate="High School Degree" description="Completed my high school education, gaining a solid academic foundation and essential knowledge across various subjects. This educational milestone laid the groundwork for my future pursuits."/>
            <hr className="flex self-center w-[94%] bg-[#F0F0F6]"/>
            <EducationItem institution="CENSA" dates="jan 2017 - nov 2018" certificate="B2 English Certificate" description="Achieved a B2-level English certificate. This certification demonstrates my ability to communicate effectively in this language, a valuable skill for both academic and professional endeavors"/>
            <hr className="flex self-center w-[94%] bg-[#F0F0F6]"/>
            <EducationItem institution="University of Antioquia" dates="jul 2019 - nov 2024" certificate="Software Engineering Degree" description="Currently pursuing a degree in software engineering at the University of Antioquia. This program equips me with the skills and expertise needed to excel in the dynamic field of technology and software development"/>
          </div>
        </section>
        <section className="flex flex-col gap-10"> 
        <SectionTitle title="Portfolio" description="My portfolio showcases a collection of projects. Each project tells a story of my journey as a student. I&apos;m committed to continually adding more pieces to this portfolio."/>
          <div style={{ overflowX: 'scroll', overflowY: "-moz-hidden-unscrollable" }} className="flex gap-20">
            <PortfolioItem link= "https://github.com/a-zambrano1/app_WebTorneos" icon="/media/Rap-Rumble.png" title="Rap Rumble" description="Rap Rumble is a web-mobile app used for managing rap battle tournaments. It offers event organizers an array of tools for managing and promoting tournaments, while participants can register, showcase their skills, and engage in battles with real-time scoring and feedback. The app also boasts a thriving rap community, educational resources, and live audience interaction, making it a one-stop platform for rap enthusiasts, artists, and fans to connect, compete, and celebrate the art of rap."/>
            <PortfolioItem link= "https://docs.google.com/document/d/1gG0SOt9C2NHEoWbRlHrcOKyDEvqv6CwfMD9CFmGGEvg" icon="/media/Nashe-Bike.png" title="Nashe Bike" description="Nashe Bike is a straightforward 2D bike racing game that keeps things simple and fun. It offers one map and a multiplayer mode, making it accessible for players of all levels. Race against your friends in real-time. Easy controls ensure a seamless experience, allowing you to dive right into the action and enjoy the thrill of 2D bike racing with ease."/>
            <PortfolioItem link= "https://docs.google.com/document/d/1H6YxCxDxUjvdMthxQgxFQihOpJtIGZTra3dz4CcoO0w" icon="/media/Free-Rating.png" title="Free Rating" description="Free Rating is a mobile app designed for rap battle enthusiasts. It offers three distinct formats for voting on battles: 4x4, easy mode, and hard mode. Additionally, the app allows users to keep a record of these battles, creating a personal archive of memorable showdowns. Free Rating fosters a sense of community by enabling discussions and connections among rap fans, making it a go-to platform for anyone passionate about rap battles and the art of lyrical competition." />
            <PortfolioItem icon="/media/Tienditas-Udea.png" title="Tienditas UdeA" description="Tienditas UdeA is a mobile app designed to simplify navigation within the University of Antioquia&apos;s campus. It helps users easily locate stores, cafeterias, bookshops, and more. The app provides a detailed map, store information like working hours and products. It&apos;s a handy tool for students, faculty, and visitors to make the most of their time on campus."/>
          </div>
        </section>
        <footer className="flex justify-center bg-white">
          <h1>2023 All Rights Reserved. Keco28</h1>
        </footer >
      </main>
      <aside className="w-[12%]"></aside>      
      <aside className="flex flex-col py-[50px] w-28 h-full fixed right-0 bg-white">
        <div className="flex flex-col gap-[10px] justify-center place-items-center"> 
          <h1 style={{fontWeight: 700, fontSize: 18}}>Links</h1>
          <LinkButton icon={FaFacebookF} text="https://www.facebook.com/KevinCR283"/>
          <LinkButton icon={AiFillInstagram} text="https://www.instagram.com/kevincr_28/"/>
          <LinkButton icon={FaLinkedinIn} text="https://www.linkedin.com/in/kevin-c-186718126/"/>
          <LinkButton icon={AiFillGithub} text="https://github.com/Keco28"/>
        </div>
      </aside>
    </div>   
  )
}


export default Home