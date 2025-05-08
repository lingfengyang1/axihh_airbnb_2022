import React, { memo, useState } from 'react'
import { DemoWrapper } from './style'
import Indicator from './../../base-ui/indicator/index';

const Demo = memo((props) => {
  const names = ["abc", "cba", "nba", "mba", "aac", "cca", "bba", "aab"]

  // 记录一下当前展示的item的索引值 该索引值变化不需要引起重新渲染 所以不需要使用useState来保存这个记录状态
  // const itemIndexRef = useRef(0)
  // 后来发现 界面还是对这个状态有所依赖(需要将该状态传递给子组件) 因此的话 还是需要通过useState去记录该状态 才能够在状态改变时重新渲染
  const [itemIndex, setItemIndex] = useState(0)

  function btnClickHandle(isRight = true) {
    // isRight ? setItemIndex(itemIndex + 1) : setItemIndex(itemIndex - 1)
    // console.log(itemIndexRef.current)

    // 考虑到边界情况 我们就不按照上述写法去写了
    let newItemIndex = isRight ? itemIndex + 1 : itemIndex - 1
    // 如果越过左边边界或者右边边界时 就需要重置索引值
    if (newItemIndex > names.length - 1) newItemIndex = 0
    if (newItemIndex < 0) newItemIndex = names.length - 1
    setItemIndex(newItemIndex)
  }

  return (
    <DemoWrapper>
        <div className="control">
            <button onClick={e => btnClickHandle(false)}>上一个</button>
            <button onClick={e => btnClickHandle()}>下一个</button>
        </div>
        <div className="indicator">
          <Indicator itemIndex={itemIndex}>
              {
                  names.map(item => (<button key={item}>{item}</button>))
              }
          </Indicator>
        </div>   
    </DemoWrapper>
  )
})

Demo.propTypes = {}

export default Demo