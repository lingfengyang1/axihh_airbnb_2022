import styled from "styled-components"

export const CenterWrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    /** 绝对定位的参考物的content-box如果缺少了宽度或者高度的话 那么很有可能导致定位出问题 这个参照物的宽度默认占满父元素的一行 而高度则默认包裹内容 但是默认的search-bar内容脱标导致高度为0 */
    height: 48px;

    .search-bar {
        /** 让其中一个参与动画的组件脱离标准流 防止二者同在标准流时超出高度致使相互挤压 */
        position: absolute;
        box-sizing: border-box;
        width: 300px;
        height: 48px;
        padding: 0 8px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-radius: 32px;
        border: 1px solid #ddd;
        cursor: pointer;

        ${props => props.theme.mixin.boxShadow}

        .text {
            padding: 0 16px;
            font-weight: 600;
            color: #222
        }

        .icon {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 32px;
            height: 32px;
            background-color: ${props => props.theme.color.primaryColor};
            color: #fff;
            border-radius: 50%;
        }
    }
    
    .search-detail {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;

        .infos {
            position: absolute;
            top: 60px
        }
    }

    .bar-enter {
        transform: translateY(100%) scale(2.85714, 1.375);
        opacity: 0;
    }

    .bar-enter-active {
        transform: translateY(0) scale(1.0);
        opacity: 1;
        transition: all 250ms ease;
    }

    /** bar在退出时 是直接透明度为0并且不带有动画 */
    .bar-exit {
        opacity: 0;
    }

    .detail-enter {
        transform: translateY(-100%) scale(0.35, 0.727273);
        opacity: 0;
    }

    .detail-enter-active {
        transform: translateY(0) scale(1.0);
        opacity: 1;
        transition: all 250ms ease;
    }

    .detail-exit {
        transform: translateY(0) scale(1.0);
        opacity: 1;
    }

    .detail-exit-active {
        transform: translateY(-100%) scale(0.35, 0.727273);
        opacity: 0;
        transition: all 250ms ease;
    }
`