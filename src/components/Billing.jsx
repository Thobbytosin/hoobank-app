import styles, {layout} from "../style"
import { bill, apple, google } from "../assets"

const Billing = () => {
  return (
    <div id="billings" className={`${layout.sectionReverse} gap-8 `}>
      <div className="w-[100%] md:w-[50%] relative ">
        <img src={bill} alt="billing" className={`w-full object-contain`} />

        {/* gradient styles */}
        <div className="absolute top-0 -left-1/2 z-[3] h-[50%] w-[50%] rounded-full pink__gradient " />
        <div className="absolute bottom-0 z-[0] h-[50%] w-[50%] rounded-full white__gradient" />
      </div>

      <div className={`${layout.sectionInfo}`}>
        <h1 className="font-poppins font-semibold text-[24px] md:text-[48px] leading-[42px] md:leading-[76.8px] text-white mb-4 md:mb-6">
          Easily control your billing & invoicing.
        </h1>
        <p className={`${styles.paragraph} text-[14px] md:text-[18px] mb-6 md:mb-8`}>
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
        </p>
        <div className={`${styles.flexStart} gap-4`}>
          <img src={apple} alt="apple" />
          <img src={google} alt="google" />
        </div>
      </div>
    </div>
  )
}

export default Billing