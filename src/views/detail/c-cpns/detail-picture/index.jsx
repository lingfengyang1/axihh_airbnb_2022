import React, { memo, useState } from 'react'
import { PictureWrapper } from './style'
import { PropTypes } from 'prop-types';
import PictureBrowser from '@/base-ui/picture-browser';

const DetailPicture = memo((props) => {
  const {detailInfo} = props

  const [isShowBrowser, setIsShowBrowser] = useState(false)

  return (
    <PictureWrapper>
      <div className="picture">
        <div className="left">
          <div className="item" onClick={e => setIsShowBrowser(true)}>
            <img src={detailInfo?.picture_urls?.[0]} alt="" />
            <div className="cover"/>
          </div>
        </div>
        <div className="right">
          {
            detailInfo?.picture_urls?.slice(1, 5)?.map(item => (
              <div className="item" key={item} onClick={e => setIsShowBrowser(true)}>
                <img src={item} alt='' />
                <div className="cover"/>
              </div>
            ))
          }
        </div>
        <div className="show-btn" onClick={e => setIsShowBrowser(true)}>
          显示照片
        </div>
        {
          isShowBrowser && <PictureBrowser pictureUrls={detailInfo.picture_urls} closeClick={e => setIsShowBrowser(false)}/>
        }
      </div>

    </PictureWrapper>
  )
})

DetailPicture.propTypes = {
  detailInfo: PropTypes.object
}

export default DetailPicture