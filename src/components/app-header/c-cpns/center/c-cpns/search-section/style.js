import styled from "styled-components";

export const SectionWrapper = styled.div`
    .content {
        border: 1px solid #ddd;
        border-radius: 40px;
        display: flex;
        padding: 10px 10px;
        align-items: center;
        width: 1000px;
        font-size: 12px;
        margin-top: 20px;
        background-color: #fff;
        .item {
            width: 33.33%;
            border-right: 1px solid #ddd;
            padding-left: 20px;

            .city {
                color: #000;
            }

            .desc {
                color: #888;
                margin-top: -3px;
            }

            &:last-child {
                border-right: none;
            }
        }
    }
`