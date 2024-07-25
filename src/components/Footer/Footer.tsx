import './Footer.css'
import Instagram from '@/assets/svg/Instagram.svg'
import FaceBook from '@/assets/svg/Facebook.svg'
import Twitter from '@/assets/svg/Twitter.svg'
import LinkedIn from '@/assets/svg/Linkedin.svg'
import Link from 'next/link'
import OpenLink from '@/assets/svg/LinkOpen.svg'
import opencorelogo from '@/assets/images/opencorelogo.png'
import Image from 'next/image'

const Footer = () => {

    return (
      <footer className='footer'>
          <div className='container'>
            <div className='footerWhiteMenu'>
                <div className='flex items-center flex-wrap justify-between xl:mb-[64px] subMenu'>
                    <div className='firstTopSection'>
                      <p className='font-[600] text-primary mb-[8px]'>Say Hello!</p>
                      <p className='font-[400] text-secoundry mb-[24px] emailOpenlink'>
                        <Link href='mailto:opencoregroup@gmail.com' className='flex gap-[8px] items-center w-full justify-center'>
                          <span>opencoregroup@gmail.com</span>
                          <OpenLink/>
                        </Link>
                      </p>
                      <p className='font-[400] text-secoundry mb-[24px] desktopOpenLink'>
                      <Link href='mailto:opencoregroup@gmail.com'>opencoregroup@gmail.com </Link>
                      </p>
                      <div className='iconListMenu'>
                        <ul>
                          <li><Link href='/'><Instagram/></Link></li>
                          <li><Link href='/'><FaceBook/></Link></li>
                          <li><Link href='/'><Twitter/></Link></li>
                          <li><Link href='/'><LinkedIn/></Link></li>
                        </ul>
                      </div>
                    </div>
                    <div className='SecoundTopSection'>
                      <ul>
                        <li>
                          <Link href='/'>
                            Home
                          </Link>
                        </li>
                        <li>
                          <Link href='/'>
                            About us
                          </Link>
                        </li>
                        <li>
                          <Link href='/'>
                            Work
                          </Link>
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <Link href='/'>
                          Services
                          </Link>
                        </li>
                        <li>
                          <Link href='/'>
                          Contact us
                          </Link>
                        </li>
                      </ul>
                    </div>
                </div>
                <div className='lasttextBox'>
                    <div className='footerTitletext'>Toronto, ON Canada </div>
                    <div className='footerTitletext'> OpenCore. All Rights Reserved</div>
                </div>
                <div className='opencoreLogo miniopencoreLogo'>
                <Image src={opencorelogo} alt='opencorelogo' />
                </div>
            </div>
          </div>
      </footer>
    )
}

export default Footer