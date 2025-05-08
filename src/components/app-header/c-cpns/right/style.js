import styled from "styled-components"

export const RightWrapper = styled.div`
    display: flex;
    flex: 1;
    justify-content: flex-end;


    .btns {
        display: flex;
        align-items: center;
        margin-right: 8px;
        color: ${props => props.theme.topAlpha ? "#fff" : props.theme.text.primaryColor};

        .btn {
            /* 将行内元素通过flex布局变成行内块元素 使其可以设置宽高 */
            display: flex;
            height: 42px;
            align-items: center;
            padding: 0 11px;
            border-radius: 22px;
            font-weight: 600;
            cursor: pointer;

            &:hover {
                /* background-color: #f7f7f7; */
                background-color: ${props => props.theme.topAlpha ? "rgba(255, 255, 255, .1)" : "#f7f7f7"};
            }
        }
    }

    .profile {
        display: flex;
        align-items: center;
        justify-content: space-between;
        cursor: pointer;
        width: 62px;
        height: 30px;
        padding: 8px 8px 8px 14px;
        border: 1px solid #ddd;
        border-radius: 30px;
        margin-right: 24px;
        color: #000;
        background-color: #fff;
        cursor: pointer;
        position: relative;
        box-sizing: content-box;

        ${props => props.theme.mixin.boxShadow}

        .panel {
            position: absolute;
            right: 0;
            top: 54px;
            box-shadow: 0 0 6px rgba(0, 0, 0, .18);
            width: 240px;
            border-radius: 10px;
            background-color: #fff;
            color: ${props => props.theme.text.secondaryColor};

            .top {
                border-bottom: 1px solid #ccc
            }

            .top, .bottom {
                padding: 10px 0;
                
                .item {
                    padding: 0 16px;
                    height: 40px;
                    line-height: 40px;

                    &:hover {
                        background-color: #f7f7f7;
                    }
                }
            }
        }
    }
`