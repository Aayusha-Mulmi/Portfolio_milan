import Image from "next/image";
import Navbar from "./navbar/page";
import Main from "./main/page";
import About from "./About/page";
import Works from "./Works/page";
import Skills from "./skills/page";
import Contacts from "./contacts/page";
import Footer from "./footer/page";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Main />
      <About/>
      <Works/>
      <Skills/>
      <Contacts/>
      <Footer/>
    </div>
  );
}
