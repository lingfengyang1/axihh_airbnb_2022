import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { ItemWrapper } from './style'

const LongforItem = memo((props) => {
  const {itemData} = props

  return (
    <ItemWrapper>
        <div className="longfor-item">
            {/* 如果bg-cover的存在覆盖掉了cover的左下和右下的圆角的话 那么可以在此多包裹一层元素 */}
            <div className="longfor-info">
                {/* webpack在处理图片资源时 会通过import导入模块的方式采用相应的加载器来识别和处理他 
                    对于css来说 他内部所依赖的图片只能由import导入 因为css中的图片只会交由webpack处理而浏览器是不会处理css的图片的 因此导入图片模块方可使得webpack采用合适的加载器来识别和处理图片
                    对于jsx来说 他依赖的图片可以交由webpack处理 也可以在浏览器运行代码时交由浏览器处理 浏览器处理时可以识别图片路径并加载他
                 */}
                <img src={itemData.picture_url} alt="" className="cover" />
                <div className="bg-cover"/>
                <div className="info">
                    <div className="city">{itemData.city}</div>
                    <div className="price">均价 {itemData.price}</div>
                </div>
            </div>
            
        </div>
    </ItemWrapper>
  )
})

LongforItem.propTypes = {
    itemData: PropTypes.object
}

export default LongforItem