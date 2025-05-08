import styled from "styled-components"

export const HeaderWrapper = styled.div`

    // home组件的app-header的变高动画并不是直接改变高度 因为直接改变高度的话 原本的垂直居中效果会在新的高度中进行居中 这不是我们所想要的效果 因此的话 我们可以设置一个新的div元素和top并列让后改变他的高度
    .content {
        /* border-bottom: 1px solid #eee; */
        border-bottom: 1px solid;
        // 根据顶部透明来动态决定底部边框颜色
        border-bottom-color: ${props => props.theme.topAlpha ? "rgba(255, 255, 255, 0)" : "#eee"};
        // 根据顶部透明来动态决定背景颜色
        /* background-color: #fff; */
        background-color: ${props => props.theme.topAlpha ? "rgba(255, 255, 255, 0)" : "#fff"};
        position: relative;
        z-index: 99;
        transition: all 200ms ease;

        .top {
            display: flex;
            height: 80px;
            align-items: center;
        }
    }

    .cover {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: rgba(0, 0, 0, .3);
    }

    &.fixed {
        position: fixed;
        z-index: 99;
        top: 0;
        left: 0;
        right: 0;
    }
`

export const SearchAreaWrapper = styled.div`
    height: ${props => props.isSearch ? "100px" : '0'};
    transition: height 200ms ease;
`