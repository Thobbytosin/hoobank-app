import { clients } from "../constants"
import styles from "../style"

const Clients = () => {
  return (
    <div className={`flex justify-around items-center md:items-start  flex-wrap gap-6 md:gap-0 ${styles.marginY}`} >
        {clients.map((img) => (
            <img src={img.logo} alt={`${img.id}`} className="h-[38.64px] w-[192.5px] object-contain"/>
        ))}
    </div>
  )
}

export default Clients