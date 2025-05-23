const BannerMain = () => {
  return (
    <section className="relative max-w-full overflow-hidden ">
      <video
        autoPlay
        loop
        muted
        className="max-w-full min-w-full min-h-[calc(100vh-55px)] max-h-[calc(100vh-55px)] object-cover overflow-auto z-10"
      >
        <source
          src="/videos/course-video.mp4"
          type="video/mp4"
          media="(min-width: 1024px)"
        />
      </video>
      <div className="absolute bg-[rgba(31,39,43,0.75)] top-0 left-0 bottom-0 right-0 w-full">
        <div className="max-w-[1200px] m-auto w-full px-5 md:px-5 lg:px-[30px]">
          <div className="absolute top-1/2 -translate-y-1/2">
            <h5 className="mt-0 text-[16px] uppercase text-[#fff] tracking-[1px]">
              Hi There !
            </h5>
            <h2 className="my-5 text-[34px] md:text-[37px] lg:text-[37px] uppercase font-extrabold text-[#fff] tracking-[1px]">
              Beyond ... Your Coding Skills ...
            </h2>
            <p className="text-[#fff] text-[13px] md:text-[14px] lg:text-[14px] max-w-[570px] ">
              Mình tên là Dev Linh, người sáng lập&nbsp;
              <a
                href="https://www.youtube.com/@DevLinh00"
                className="no-underline text-[#3cf] hover:text-[#fc3]"
              >
                kênh Youtube &quot;Dev Linh&quot;
              </a>
              , cựu sinh viên CNTT trường đại học Bách Khoa Đà Nẵng, và đang là
              một &quot;thằng DEV&quot; tại một ngân hàng (nào đó) :D
            </p>
            <div className="mt-8">
              <button className="no-underline bg-[#20ad96] rounded-[22px] text-[#fff] inline-block text-[13px] font-medium py-3 px-[30px] uppercase cursor-pointer transition-all duration-300 hover:opacity-90">
                Xem lộ trình
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerMain;
