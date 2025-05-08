import styled from "styled-components";

export const ItemWrapper = styled.div`
    // 方式flex容器溢出后压缩每一个flex子项的宽度
    flex-shrink: 0;
    // 可视区域中只能够展示5个item
    width: 20%;

    .longfor-item {
        padding: 8px;

        .longfor-info {
            position: relative;
            border-radius: 8px;
            border: 1px solid #aaa;
            /* 对圆角位置处的溢出部分进行隐藏 */
            overflow: hidden;

            .cover {
                width: 100%;
            }

            .bg-cover {
                position: absolute;
                left: 0;
                right: 0;
                bottom: 0;
                height: 60%;
                /* 0deg表示从下到上 顺时针以此类推 -180deg表示从上到下 然后可以设置颜色及其位置 */
                background-image: linear-gradient(-180deg, rgba(0, 0, 0, 0) 3%, rgba(0, 0, 0, 1) 100%)
            }

            .info {
                position: absolute;
                bottom: 0;
                left: 0px;
                right: 0px;
                padding: 0 28px 32px;
                color: #fff;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;

                .city {
                    font-size: 17px;
                    font-weight: bold;
                }

                .price {
                    margin-top: 5px;
                    font-size: 12px;
                }
            }
        }

        
    }
`