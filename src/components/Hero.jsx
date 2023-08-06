import { discount, robot } from "../assets"
import styles from "../style"
import GetStarted from "./GetStarted"

const Hero = () => {
  return (
    <section id="home" className={`${styles.paddingY} flex flex-col  items-center md:flex-row`}>
        <div className={`flex-1 ${styles.paddingX}`}>
            <div className="flex items-center bg-discount-gradient py-[2px] md:py-[6px] px[4px]  rounded-lg">
                <img src={discount} alt="discount" className="w-[38px] h-[38px] sm:h-[24px]w-[24px]"/>
                <p className={`md:${styles.paragraph} text-[14px] uppercase`}>
                    <span className="text-white">20%</span> Discount For {" "}
                    <span className="text-white">1 Month</span> Account
                </p>
            </div>

            <div className={`flex items-start py-6`}>
                <h1 className={`text-white font-poppins font-semibold md:text-[72px] text-[48px] md:leading-[100.8px] leading-[64px] mr-8`}>The Next <br className="hidden md:block" /> 
                <span className="text-gradient">Generation</span>
                </h1>
                <div className=" hidden md:flex">
                    <GetStarted />
                </div>
            </div>

            <h1 className="text-white font-poppins font-semibold md:text-[68px] text-[48px] md:leading-[100.8px] leading-[64px] -mt-4 mb-8 min-w-0 md:min-w-[611px] ">Payment Method.
            </h1>

            <p className={`text-[14px] md:text-[18px] ${styles.paragraph} max-w-[470px]`}>Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. We examine annual percentage rates, annual fees.</p>

        </div>


        <div className="flex items-center justify-center md:my-0 my-12 relative">
            <img src={robot} alt="robot" className="w-[100%] h-[100%] z-5" />

            {/* gradients styles */}
            <div className="absolute z-0 w-[40%] h-[35%] pink__gradient top-0" />
            <div className="absolute z-1 w-[80%] h-[80%] white__gradient rounded-full bottom-40" />
            <div className="absolute z-0 w-[50%] h-[50%] blue__gradient right-20" />
        </div>
    </section>
  )
}

export default Hero