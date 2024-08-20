import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Switch, ConfigProvider } from "antd";
import { useState } from 'react';

import './../utils/i18n'
import { useTranslation } from 'react-i18next'

const Navbar = () => {
  const { t, i18n: {changeLanguage, language} } = useTranslation();
    
    const [currentLanguage, setCurrentLanguage] = useState(language);

    const handleChangeLanguage = (checked: boolean) => {
      const newLang = checked ? 'pt' : 'en';
      changeLanguage(newLang);
      setCurrentLanguage(newLang);
    }

  return (
    <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <h2 className="text-2sm text-neutral-300 font-normal">{t('Desenvolvido')}</h2>
        </div>
        <div className="m-8 flex items-center justify-center gap-4">
        <ConfigProvider
          theme={{
            components: { 
              Switch: {
                colorPrimary: "#64748b ",
                colorPrimaryHover:"#0E0E14",
                fontFamily: "DM Sans",
              },
            },
          }}
        >
          <Switch 
          defaultChecked={true}
          checkedChildren="PT" 
          unCheckedChildren="EN" 
          onChange={handleChangeLanguage}
          />
        </ConfigProvider>
        <a href="https://www.linkedin.com/in/caroline-slage/" target="_blank">
          <FaLinkedinIn />
        </a>
        <a href="https://github.com/carolinelage" target="_blank">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/carolmoreiralage/" target="_blank">
          <FaInstagram />
        </a>
        </div>
    </nav>
  )
}

export default Navbar