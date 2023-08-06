import { features } from "../constants"
import styles, { layout } from "../style"
import Button from "./Button"

const FeatureCard = ({icon, title, text}) => (
    <div className={`flex items-center flex-row rounded-[20px] p-6 feature-card`}>
        <div className={`w-[64px] h-[64px] ${styles.flexCenter}  rounded-full bg-dimBlue`}>
            <img src={icon} alt="star" className="h-[50%] w-[50%] object-contain" />
        </div>

        <div className="flex-1 flex flex-col ml-6">
            <h2 className="text-white font-poppins font-semibold text-[18px] mb-1">{title}</h2>
            <p className={`${styles.paragraph} text-[16px]`}>{text}</p>
        </div>
    </div>
)

const Business = () => {
  return (
    <section id="business" className={`flex items-start md:flex-row flex-col ${styles.paddingY} `}>
        <div className={`${layout.sectionInfo}`}>
            <h1 className={`font-poppins font-semibold md:text-[48px] text-[32px] text-white leading-[52px] md:leading-[74px] mb-4 md:mb-8 `}>
                You do the business, we’ll handle the money.
            </h1>
            <p className={`${styles.paragraph}`}>
            With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.
            </p>

            <Button styles={`mt-10`} />
        </div>

        <div  className={`${layout.sectionImg} flex-col`}>
            {features.map((feature) => (
              <FeatureCard {...feature} />
            ))}
        </div>
    </section>
  )
}

export default Business