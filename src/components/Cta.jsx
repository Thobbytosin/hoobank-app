import Button from "./Button"
import styles, { layout } from "../style"

const Cta = () => {
  return (
    <div className={`${layout.section} items-start my-20 md:my-40 md:items-center gap-4 md:gap-40 bg-black-gradient-2 px-8 py-8 md:py-12 md:px-12 rounded-[20px]`}>
        <div>
            <h1 className="font-poppins font-semibold text-[24px] md:text-[48px] leading-[42px] md:leading-[76.8px] text-white mb-4 md:mb-6">
                Let’s try our service now!
            </h1>
            <p className={`${styles.paragraph} text-[14px] md:text-[18px] mb-6 md:mb-8 max-w-[445px]`}>
                Everything you need to accept card payments and grow your business anywhere on the planet.
            </p>
        </div>
        <div>
            <Button />
        </div>
    </div>
  )
}

export default Cta