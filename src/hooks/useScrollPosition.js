import { useEffect, useState } from "react";
import { throttle } from "underscore";

export function useScrollPosition() {
    // 定义变量用于记录滚动的水平位置和垂直位置
    const [scrollX, setScrollX] = useState(0)
    const [scrollY, setScrollY] = useState(0)

    // 添加事件监听这种事情只需要做一次 因此的话 无需添加任何的依赖项
    useEffect(() => {

        // 而且这个滚动事件会触发的十分频繁 因此的话 我们需要通过underscore中的节流函数来降低触发频率 也可以让组件不那么频繁的重新渲染
        // function scrollHandle() {
        //     setScrollX(window.scrollX)
        //     setScrollY(window.scrollY)
        // }
        const scrollHandle = throttle(() => {
            setScrollX(window.scrollX)
            setScrollY(window.scrollY)
        })

        window.addEventListener("scroll", scrollHandle)

        return () => {
            window.removeEventListener("scroll", scrollHandle)
        }
    }, [])

    // 用数组包裹这两个返回值明显不如用对象包裹 因为解构时如果只是想要获取后面的值 对于数组而言解构必须要对前面的值进行占位而对象不需要
    return {scrollX, scrollY}
}