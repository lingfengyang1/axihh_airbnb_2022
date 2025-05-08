import styled from "styled-components";

export const TabWrapper = styled.div`
    .list {
        display: flex;

        .item {
            font-size: 16px;
            width: 64px;
            height: 20px;
            margin: 10px 16px;
            position: relative;
            cursor: pointer;
            color: ${props => props.theme.topAlpha ? "#fff" : props.theme.text.primaryColor};

            &.active .bottom {
                width: 64px;
                position: absolute;
                top: 28px;
                left: 0;
                height: 2px;
                background-color: #000;
                background-color: ${props => props.theme.topAlpha ? "#fff" : "#000"};
            }
        }
    }
`