import { styles } from '../styles'
import Button from './Button'
import ProfileImage from './ProfileImage'

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute w-full justify-between inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-1 flex-col justify-center items-center mt-5' >
          <div className='w-5 h-5 rounded-full bg-[#b30000]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>
        <div className='max-lg:flex-col  flex w-full '>
          <div>
            <h1 className={`${styles.heroHeadText}`} >Hi, I'm <span className="text-[#b30000]">Rakesh</span></h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              As a Full Stack Developer specializing <br className='sm:block hidden' /> in  web and mobile
              development
            </p>
            <div className='mt-10 flex sm:gap-12 gap-2'>
              <Button text="Explore My Works" bg="bg-[#b30000]" />
              <Button text="Download CV" bg="bg-transparent border-2" />
            </div>
          </div>
          <ProfileImage />
        </div>
      </div>
    </section>
  )
}

export default Hero