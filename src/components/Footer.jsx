import { logo, instagram, facebook, twitter } from "../assets";
import styles from "../style";
import { footerLinks } from "../constants";

const Footer = () => {
  return (
    <div>
        <div className={`flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between mb-10`}>
            <div className="flex flex-col  items-center md:items-start mb-8 md:mb-0">
                <img src={logo} alt="logo" className="w-[262.4px] h-[72.3px] mb-4 md:mb-6" />
                <p className={`${styles.paragraph} font-poppins font-normal text-[14px] md:text-[18px] max-w-[312px] text-center md:text-left`}>
                    A new way to make the payments easy, reliable and secure.
                </p>
            </div>
            <div className=" flex flex-col mx-auto md:flex-row md:items-start ">
                {footerLinks.map((footerLink, index) => (
                    <div className={`w-full flex flex-col items-center md:items-start justify-center ${index !== footerLink.length - 1 ? 'mr-20' : 'mb-0'} `}>
                        <h3 className="text-[16px] md:text-[20px] text-white mt-6 md:mt-0 mb-4 md:mb-6">{footerLink.title}</h3>
                        {footerLink.links.map((links, index) => (
                            <p className={`${index !== footerLink.links.length - 1 ? 'mb-2 md:mb-4' : 'mb-0'} ${styles.paragraph} font-poppins font-normal text-[11px] md:text-[16px]`}><a href={`${links.link}`} target="_blank" className="cursor-pointer hover:text-white transition ease 0.3s">{links.name}</a></p>
                        ))}

                    </div>
                ))}
            </div>
        </div>
        <div className="w-full h-[2px] bg-[#3F3E45] mb-8" />
        <div className="mb-8 md:mb-12 flex flex-col md:flex-row justify-between items-center">
            <p className={`${styles.paragraph} font-poppins font-normal text-[12px] md:text-[18px] text-center mb-4 md:mb-0`}>Copyright &copy; 2021 HooBank. All Rights Reserved.</p>

            <div className="flex gap-6">
                <img src={instagram} alt="instagram" className="w-[21px] h-[21px] cursor-pointer hover:opacity-50 transition ease 0.3s" />
                <img src={facebook} alt="facebook" className="w-[21px] h-[21px] cursor-pointer hover:opacity-50 transition ease 0.3s" />
                <img src={twitter} alt="twitter" className="w-[21px] h-[21px] cursor-pointer hover:opacity-50 transition ease 0.3s" />
            </div>
        </div>
    </div>
  )
}

export default Footer