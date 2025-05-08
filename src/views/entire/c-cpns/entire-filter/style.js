import styled from "styled-components";

export const FilterWrapper = styled.div`
    display: flex;
    height: 48px;
    border-bottom: 1px solid #eee;
    align-items: center;
    padding-left: 16px;
    position: fixed;
    top: 80px;
    left: 0;
    right: 0;
    background-color: #fff;
    z-index: 99;

    .item {
        padding: 8px 16px;
        margin: 0 6px 0;
        border: 1px solid #999;
        border-radius: 4px;
        cursor: pointer;

        &.active {
            border: 1px solid #008489;
            background-color: #008489;
            color: #fff
        }
    }
`