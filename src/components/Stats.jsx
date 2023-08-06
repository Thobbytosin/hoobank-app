import { stats } from "../constants"
import styles from "../style"

const Stats = () => {
  return (
    <div className={`${styles.marginY}`}>
        <div className={`flex items-center justify-center w-[100%]  md:gap-6 gap-4 flex-wrap`}>
            {stats.map((stat, index) => (
                <div id={stat.id} className={`flex items-center justify-between md:justify-start md:gap-6 gap-2 bg-black-gradient md:bg-0 px-4 py-2  rounded-xl cursor-pointer hover:opacity-50 ease-in duration-200`}>
                    <h1 className="text-white font-poppins font-semibold md:text-[40.89px] text-[23.6px] ">{stat.value}</h1>
                    <p className="font-poppins font-medium text-gradient text-[14px] md:text-[20.45px] uppercase ">{stat.title}</p>
                    {/* <div className="md:h-[23px] w-[2px] bg-blue-gradient" /> */}
                </div>
            ))}
        </div>

    </div>
  )
}

export default Stats