import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function useScrollTo() {
    const location = useLocation()
    // 当切换路由组件时 路径也会随之改变 监听路径的改变然后让新的路由组件立马回到顶部显示
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [location.pathname])
}