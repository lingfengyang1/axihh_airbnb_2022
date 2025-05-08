import styled from "styled-components"

// 左边部分的logo颜色不要写死 因为该网站的多出地方都有用到这种颜色 因此的话 我们可以将其抽取为一个主题颜色
// 主题颜色的定义有两种方式：①通过:root来定义html文档中需要共享的颜色 ②利用styled-components中的ThemeProvider来共享主题颜色
export const LeftWrapper = styled.div`
    /* flex布局是为了让leftwrapper中只有logo可点击 因此通过flex子项行内块的特性完成此需求 */
    display: flex;
    flex: 1;
    /* color: red */
    /* 通过方式一来共享主题颜色 */
    /* color: var(--primary-color) */
    /* 通过方式二来共享主题颜色 我们会通过模板字符串中的$/{}来获取主题颜色 并且其中通过回调获取 因为回调中的props才是正确的父传子props */
    /** 根据顶部透明来动态决定logo颜色 */
    /* color: ${props => props.theme.color.primaryColor}; */
    color: ${props => props.theme.topAlpha ? "#fff" : props.theme.color.primaryColor};

    .logo {
        margin-left: 24px;
        cursor: pointer;
    }
`