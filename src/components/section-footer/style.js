import styled from "styled-components";

export const FooterWrapper = styled.div`
    margin-top: 10px;
    /** 保证可点击的区域不是整行 而是内容部分 原理就在于flex子项会变成类似行内块元素一样仅包裹内容 */
    display: flex;

    .info {
        color: ${props => {
            return props.name ? props.theme.color.secondaryColor : "#000"
        }};
        font-size: 17px;
        font-weight: bold;
        display: flex;
        align-items: center;
        cursor: pointer;

        .text {
            margin-right: 5px;
        }

        &:hover {
            text-decoration: underline;
        }
    }
`