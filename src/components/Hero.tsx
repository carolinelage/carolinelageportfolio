import './../utils/i18n'
import { useTranslation } from 'react-i18next'

const Hero = () => {
    const { t} = useTranslation();
    
  return (
    <div className="pb-4 lg:mb-35">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start">
                    <h2 className="pb-7 font-thin text-sm tracking-tight lg:mt-15 lg:text-7xl">Caroline Lage</h2>
                    <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
                        {t('Desenvolvedora')}
                    </span>
                    <p className="my-2 max-w-xl py-3 font-light tracking-tighter">
                        {t('Apresentacao')}
                    </p>
                </div>
            </div>
            <div className="w-full lg:w-1/2 lg:p-8">
                <div className="flex justify-center">
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero