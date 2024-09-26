
import RightMenu from "@/components/organisms/RightMenu";
import React from "react";
import LeftMenu from "@/components/organisms/LeftMenu";
import MainContent from "@/components/organisms/MainContent";

export default function Home() {
  return (
    <div className='flex justify-center h-screen'>
       <LeftMenu/>
       <MainContent/>
       <RightMenu/>

    </div>
  );
}
