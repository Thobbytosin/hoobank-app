import styles, { layout } from "../style";
import { feedback } from "../constants";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => {
  return (
    <div id="testimonials" className={`${styles.paddingY}`}>
        <div className={`${layout.section}`}>
            <h1 className={`font-poppins font-semibold text-[24px] md:text-[48px] leading-[42px] md:leading-[76.8px] text-white mb-4 md:mb-6`}>What people are saying about us</h1>
            <p className={`${styles.paragraph} text-[14px] md:text-[18px] mb-6 md:mb-8`}>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
        </div>

        <div className="flex-1 flex flex-wrap justify-center md:justify-start ">
            {feedback.map((feedback) => <FeedbackCard key={feedback.id} {...feedback} /> )}
        </div>
    </div>
  )
}

export default Testimonials