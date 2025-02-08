import BlogCarousel from "../molecules/BlogCarousel";




const Blog = () => {
    return (

        <section className="text-white w-full flex items-center justify-center flex-col bg-red-600 " >
          <header className=" w-full max-w-[1034px] flex items-center justify-between  font-syne mx-auto" >
            <h1 className="max-w-[504px] font-bold text-[42px] leading-[47.88px] " >Read From <br/> Our Blog</h1>

            <div>
                button
            </div>
          </header>


          <BlogCarousel/>



        </section>

    )
}

export default Blog;