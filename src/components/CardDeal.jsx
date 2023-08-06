
import styles, {layout} from '../style';
import Button from './Button';
import { card } from '../assets';

const CardDeal = () => {
  return (
    <div className={`${layout.section} `}>
      <div className={`mr-0 md:mr-10`}>
        <h1 className={`font-poppins font-semibold text-[24px] md:text-[48px] leading-[42px] md:leading-[76.8px] text-white mb-4 md:mb-6`}>Find a better card deal in few easy steps.</h1>
        <p className={`${styles.paragraph} text-[14px] md:text-[18px] mb-6 md:mb-8`}>Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.</p>
        <Button styles={'mt-10'}  />
      </div>

      <div className='w-[100%] flex justify-center mt-10 md:mt-0'>
        <img src={card} alt="card" className='w-[90%] object-contain' />
      </div>
    </div>
  )
}

export default CardDeal