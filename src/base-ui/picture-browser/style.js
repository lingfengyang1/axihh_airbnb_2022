import styled from "styled-components";
import { Indicator } from '@/base-ui/indicator';

export const BrowserWrapper = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: #333;
    display: flex;
    flex-direction: column;

    .top {
        height: 86px;
        position: relative;

        .close {
            position: absolute;
            top: 15px;
            right: 25px;
            cursor: pointer;
            color: #fff;
        }
    }

    /** 对于当前组件中的top、list、indicator这三个组件来说 当改变当前组件的高度时 top和indicator的高度不变 只有list的高度在动态发生改变 这时候就可以为当前组件设置flex布局 固定上下两部分的高度让中间部分占用当前组件的剩余高度 */
    > .list {
        flex: 1;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;

        .control {
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            display: flex;
            justify-content: space-between;

            .btn {
                width: 83px;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;
                color: #fff;
            }
        }

        .picture {
            width: 100%;
            height: 100%;
            // 不能超过105vh这个宽度 即105% * 高度
            max-width: 105vh;
            overflow: hidden;
            position: relative;

            .pic-enter {
                transform: translateX(${props => props.isRight ? "100%" : "-100%"});
                opacity: 0;
            }

            .pic-enter-active {
                transform: translateX(0);
                opacity: 1;
                transition: all 200ms ease;
            }

            .pic-exit {
                opacity: 1;
            }

            .pic-exit-active {
                opacity: 0;
                transition: all 200ms ease;
            }

            img {
                position: absolute;
                top: 0;
                right: 0;
                left: 0;
                height: 100%;
                // 行内元素的宽度会默认包裹内容
                margin: 0 auto;
                // 图片不可选中
                user-select: none;
            }
        }
    }

    .indicator {
        height: 100px;
        display: flex;
        justify-content: center;
        /** 为了让svg图片变成白色 */
        color: #fff;
        position: relative;

        .info {
            /** 正常情况下占满父元素的一行 但是当屏幕宽度逐渐变大时 就需要通过一个最大宽度来限制其宽度 */
            width: 100%;
            max-width: 105vh;
            overflow: hidden;
            position: absolute;
            bottom: 10px;

            .desc {
                display: flex;
                justify-content: space-between;
                height: 30px;
                align-items: center;

                .other {
                    display: flex;
                    align-items: center;
                }
            }

            .list {
                // 由于我们的list所在的info的定位方式是bottom 因此height在执行动画时是向下移动而非向上移动的
                height: ${props => props.isShow ? "63px" : "0"};
                transition: height 200ms ease;

                .item {
                    margin-right: 15px;
                    cursor: pointer;

                    img {
                        height: 63px;
                        width: 100px;
                        object-fit: cover;
                        opacity: 0.5;
                    }

                    &.active {
                        img {
                            opacity: 1;
                        }
                    }
                }
            }
        }
    }
`