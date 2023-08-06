import { quotes } from "../assets"
import styles from "../style"

const FeedbackCard = ({img, message, name, position}) => {
  return (
    <div className={`px-8 md:px-6 py-6 mb-8  rounded-[20px] feedback-container mr-4 feedback-card w-[360px]`}>
        <div>
            <img src={quotes} alt="quotes" className="w-[42.6px] h-[27.6px] mb-6 md:mb-8" />
        </div>
        <p className={`${styles.paragraph} text-[14px] md:text-[18px] mb-8 md:mb-6`}>{message}</p>
        <div className={`flex`}>
            <div className="mr-4 md:mr-6 w-[48px] h-[48px]">
                <img src={img} alt="" className="w-full object-contain" />
            </div>
            <div className={``}>
                <h3 className="font-poppins font-semibold text-[15px] md:text-[20px] leading-[6.3px] md:leading-[12px] text-white mb-1 md:mb-3`">{name}</h3>
                <p className={`${styles.paragraph} text-[12px] md:text-[16px]`}>{position}</p>
            </div>
        </div>
        
    </div>
  )
}

export default FeedbackCard