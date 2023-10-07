import { LinkButton } from "@/components/LinkButton"
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaInstagramSquare} from "react-icons/fa"
import { AiFillInstagram, AiFillYoutube, AiFillGithub} from "react-icons/ai"
import Image from 'next/image'
import { ProgressBars } from "@/components/ProgressBars"

const Home = () => {
  return (
    <div className="flex h-screen w-screen justify-between bg-[#F0F0F6]  gap-[30px] debug ">
      <aside className="flex flex-col w-80 fixed h-full bg-white debug">
        <div className="flex flex-col gap-5 place-items-center debug">
        <br/>
          <div className="flex flex-col gap-1 place-items-center debug"> 
            <Image className="rounded-full"
              src="/media/keco.jpg"
              width={150}
              height={150}
              alt="Imagen personal">
            </Image>
            <br/>
            <h1>Kevin Correa Reyes</h1>
            <h1>Full Stack Developer</h1>
          </div>
          <hr className="w-3/4 bg-[#F0F0F6]"/>
          <div className="flex flex-col justify-between w-3/4 "> 
            <div className="flex justify-between w-full">
              <h1>Age:</h1>
              <h1>21</h1>
            </div>
            <div className="flex justify-between w-full">
              <h1>Residence:</h1>
              <h1>BD</h1>
            </div>
            <div className="flex justify-between w-full ">
              <h1>Freelance: </h1>
              <h1 className="color">Unavailable</h1>
            </div>
            <div className="flex justify-between w-full">
              <h1>Address: </h1>
              <h1>Medellín,Colombia</h1>
            </div>
          </div>
          <hr className="w-3/4 bg-[#F0F0F6]"/>
          <div className="flex flex-col w-3/4 "> 
            <h1 className="font-bold">Languages</h1>
            <div className="flex flex-col w-full ">
              <ProgressBars language="English" percentage={90}/>
              <ProgressBars language="Spanish" percentage={100}/>
            </div>
          </div>
          <hr className="w-3/4 bg-[#F0F0F6]"/>
          <div className="flex flex-col place-items-center debug"> 
            <h1>nonaz</h1>
            <h1>Aside1</h1>
          </div>
          <hr className="w-3/4 bg-[#F0F0F6]"/>
          <div className="flex flex-col place-items-center debug"> 
            <h1>lucas</h1>
            <h1>Aside1</h1>
          </div>
        </div>
      </aside>
      <aside className="ml-[21%]"></aside>
      <main className="flex flex-col w-4/5 content-center gap 5pxdebug">
        <section className="flex flex-col bg-white"> 
          <h1>main</h1>
          <h1>main</h1>
        </section>
        <section className="flex flex-col "> 
          <h1>2</h1>
          <h1>2</h1>
        </section>
        <section className="flex flex-col "> 
          <h1>3</h1>
          <h1>3</h1>
        </section>
        <section className="flex flex-col "> 
          <h1>4</h1>
          <h1>4</h1>
        </section>
        <footer className="flex justify-center bg-white">
          <h1>2023 All Rights Reserved.DonKeco</h1>
        </footer >
      </main>
      <aside className="ml-[7.5%]"></aside>      
      <aside className="flex flex-col py-[50px] w-28 h-full fixed right-0 bg-white debug">
        <div className="flex flex-col gap-[10px] justify-center place-items-center"> 
          <h1 className="font-">Links</h1>
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