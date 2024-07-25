import './Header.css'
import Operac from '@/assets/svg/OperaC.svg'
import ThreeLine from '@/assets/svg/ThreeLine.svg'

const Header = () => {
    return (
        <header className="sticky top-0 left-0 right-0 bg-white z-10">
            <div className='bgHeader'>
                <div className='HeaderMain'>
                    <div className='Operac'>
                    <Operac/>
                    </div>
                    <div className='threeline'>
                        <ThreeLine/>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header 