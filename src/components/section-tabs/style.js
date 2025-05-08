import styled from "styled-components";

export const TabsWrapper = styled.div`
    /* 既然flex子项已经被scroll-view组件所包裹 那么就有scroll-view来决定flex布局 */
    /* display: flex; */

    .item {
        // 设置flex子项的主轴上的最小宽度
        flex-basis: 120px;
        // 当flex容器空间不够时 不需要缩小flex子项的宽度
        flex-shrink: 0;
        // 文本水平居中
        text-align: center;
        padding: 16px 10px;
        margin-right: 10px;
        // 文本一行显示不下时不换行
        white-space: nowrap;
        font-size: 17px;
        border: 0.5px solid #d8d8d8;
        border-radius: 3px;
        cursor: pointer;
        ${props => props.theme.mixin.boxShadow}

        &:last-child {
            margin-right: 0;
        }

        &.active {
            background-color: ${props => props.theme.color.secondaryColor};
            color: #fff
        }
    }
`