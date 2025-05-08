import styled from "styled-components";

export const ScrollViewWrapper = styled.div`
    // 将隐藏属性迁移到.scroll中是为了防止将.control溢出的部分也隐藏
    /* overflow: hidden; */
    position: relative;
    padding: 8px 0;

    .scroll {
        overflow: hidden;

        .scroll-content {
            display: flex;
            transition: transform 300ms ease
        }
    }

    .control {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        z-index: 9;
        top: 50%;
        border: 1px solid #fff;
        background-color: #fff;
        box-shadow: 0 1px 1px 1px rgba(0, 0, 0, .48);
        border-radius: 50%;
        width: 28px;
        height: 28px;

        &.left {
            left: 0;
            transform: translate(-50%, -50%);
        }

        &.right {
            right: 0;
            transform: translate(50%, -50%);
        }
    }
`