import React, { memo } from 'react'
import { FooterWrapper } from './style'
import footer from "@/assets/data/footer.json"
import FooterItem from './c-cpns/footer-item'

const AppFooter = memo(() => {

  console.log("AppFooter")

  return (
    <FooterWrapper>
      <ul className='footer-list'>
        {
          footer?.map((item, index) => (
            <FooterItem itemData={item} key={index}/>
          ))
        }
      </ul> 
    </FooterWrapper>
  )
})

export default AppFooter