import { ArrowForwardIcon, AutoModeIcon, VideoSettingsIcon } from "@/components/icons/svgIcons";
import React from "react";
import CountUpNumber from "../CountUpNumber";

const OurFacts = () => {
  return (
    <section className="mb-[60px]">
      <div className="max-w-[1200px] px-5 md:px-5 lg:px-[30px] w-full m-auto">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-5 md:gap-5 lg:gap-[30px]">
          <CountUpNumber count={7000} label="Học viên Đổi mới dậy học" icon={<AutoModeIcon/>}/>
          <CountUpNumber count={20} label="Khóa Học IT" icon={<VideoSettingsIcon/>}/>
          <CountUpNumber count={70000} label="Youtube Subscribers" icon={<ArrowForwardIcon/>}/>
        </div>
      </div>
    </section>
  );
};

export default OurFacts;
