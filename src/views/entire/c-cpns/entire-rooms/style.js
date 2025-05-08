import styled from "styled-components";

export const RoomsWrapper = styled.div`
    margin-top: 128px;
    padding: 40px 20px;
    position: relative;

    .room-list {
        display: flex;
        flex-wrap: wrap;
    }

    .text {
        font-size: 22px;
        font-weight: bold;
        margin: 0 0 10px 10px;
    }

    // 这个样式是作用于直接子元素.cover 由于怕影响到room-item中的.cover 因此需要加上>标明是直接子元素
    > .cover {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: rgba(255, 255, 255, .8);
    }
`