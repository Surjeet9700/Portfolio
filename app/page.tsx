import Grid from "@/components/Grid";
import Hero from "@/components/Hero";

import { FloatingNavbar } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";
import Clients from "@/components/Clients"
import Experience from "@/components/Experience";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";
import RecentProject from "@/components/RecentProject";

export default function Home() {
  return (
   <main className="relative bg-black-100 
   flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5 ">
      <div className="max-w-7xl w-full">
      <FloatingNavbar navItems={navItems}/>
       <Hero/>
       <Grid/>
       <RecentProject/>
       {/* <RecentProjects/> */}
       {/* <Clients/> */}
       {/* <Experience/> */}
       <Approach/>
       <Footer/>
      </div>
   </main>
  );
}
