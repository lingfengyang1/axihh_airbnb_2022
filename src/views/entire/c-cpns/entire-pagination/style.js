import styled from "styled-components";

export const PaginationWrapper = styled.div`
    .pagination {
        display: flex;
        flex-direction: column;
        align-items: center;

        .MuiPaginationItem-icon {
            font-size: 24px;
        }

        .MuiPaginationItem-page {
            margin: 0 3px;

            &:hover {
                text-decoration: underline;
            }
        }

        .MuiPaginationItem-page.Mui-selected {
            color: #fff;
            background-color: #222;
        }

        .desc {
            padding-top: 15px;
            color: #222
        }
    }
`