import { LinkButton } from "@/components/LinkButton"
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaInstagramSquare} from "react-icons/fa"
import { AiFillInstagram, AiFillYoutube, AiFillGithub} from "react-icons/ai"

const Home = () => {
  return (
    <div className="flex h-screen w-screen justify-between bg-[#F0F0F6]  gap-[26px] debug ">
      <aside className="flex flex-col w-96 bg-white debug">
        <div className="flex flex-col gap-10"> 
        <h1>Aside1</h1>
        <h1>Aside1</h1>
        </div>
      </aside>
      <main className="flex flex-col w-full content-center gap 5pxdebug">
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
      <aside className="flex flex-col w-24 bg-white debug">
        <div className="flex flex-col gap-[15px] justify-center place-items-center"> 
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