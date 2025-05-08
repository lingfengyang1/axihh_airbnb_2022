import styled from "styled-components";

export const PictureWrapper = styled.div`
    .picture {
        height: 600px;
        display: flex;
        position: relative;

        /** 悬浮时 所有cover都可见 但是悬浮所在的item他的cover是不可见的 */
        &:hover {
            .cover {
                /** !import可以保证强制覆盖掉已经存在的css属性值 */
                opacity: 1 !important;
            }

            .item:hover {

                img {
                    transform: scale(1.1);
                }

                .cover {
                    opacity: 0 !important;
                }
            }
        }

        /** width默认占满父元素的一行 height默认由内容填充 */
        .left, .right {
            width: 50%;
            height: 100%;

            .item {
                height: 100%;
                overflow: hidden;
                position: relative;
                cursor: pointer;

                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 200ms ease;
                }

                .cover {
                    position: absolute;
                    top: 0;
                    right: 0;
                    bottom: 0;
                    left: 0;
                    background-color: rgba(0, 0, 0, .3);
                    opacity: 0;
                    transition: opacity 200ms ease;
                }
            }
        }

        .right {
            display: flex;
            flex-wrap: wrap;

            .item {
                width: 50%;
                height: 50%;
                border: 1px solid #000;
                box-sizing: border-box;
            }
        }

        .show-btn {
            position: absolute;
            right: 15px;
            bottom: 15px;
            padding: 6px 12px;
            // 对于单行文本来说 可以直接通过设置行高来使其垂直居中
            line-height: 20px;
            background-color: #fff;
            cursor: pointer
        }
    }
`