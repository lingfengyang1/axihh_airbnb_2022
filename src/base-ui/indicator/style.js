import styled from "styled-components";

export const IndicatorWrapper = styled.div`
    overflow: hidden;
    
    .list {
        display: flex;
        position: relative;

        // 对于任何的直接子元素(插槽决定类型) 都不应该在空间不够时压缩
        > * {
            flex-shrink: 0;
        }
    }
`