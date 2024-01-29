import Image from "next/image"

export default function Hero(){
    return (
    <>

<div className="">

    <div className="h-svh gap-48 flex items-center justify-center ">


    <div className=" text-4xl font- ">
        <h1>Carlos Susanto</h1>
        <h1 className="text-2xl">A Front End Developer</h1>
    </div>

    <div className="w-72">
    <Image className="rounded-full"
      src="/pro.jpeg"
      width={500}
      height={500}
      alt="profile"
      />
    </div>
    
      </div>
      </div>
    </>
)
}