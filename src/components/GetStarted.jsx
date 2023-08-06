import { arrowUp } from "../assets"

const GetStarted = () => {
  return (
    <div className="flex items-center justify-center flex-col  bg-blue-gradient h-[140px] w-[140px] rounded-full p-[2px]">
        <div className="h-full w-full bg-primary rounded-full flex items-center justify-center flex-col">
            <div className="flex flex-row items-start mb-[2px]">
                <p className="mr-2 font-poppins font-medium text-gradient text-[18px] leading-[23.4px]">Get</p>
                <img src={arrowUp} alt="" />
            </div>
            <p className="font-poppins font-medium text-gradient text-[18px] leading-[23.4px]">Started</p>

        </div>
    </div>
  )
}

export default GetStarted