import styled from "styled-components"

export const ItemWrapper = styled.div`
    // 每个item的宽度不能写死 因为不同模块中item的宽度不一致 有的一行有三个item、有的一行有四个item、有的一行有五个item等等
    /* width: 25%; */
    width: ${props => props.itemWidth};
    box-sizing: border-box;
    padding: 8px;
    // 对于plus模块来说 其中利用ScrollView包裹RoomItem 由于ScrollView组件设置了flex布局 因此的话 当RoomItem作为flex子项超出了flex容器的宽度时 就会被压缩 因此需要防止flex子项被压缩
    flex-shrink: 0;

    .inner {
        width: 100%;

        .swiper {
            position: relative;
            cursor: pointer;

            &:hover {
                .control {
                    display: flex;
                }
            }

            .control {
                position: absolute;
                z-index: 1;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                display: none;
                justify-content: space-between;
                /* svg图片的颜色由currentColor所控制 而该属性的默认值会从祖先元素的color属性中继承过来 */
                color: #fff;

                .btn {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100%;
                    width: 83px;
                    background: linear-gradient(to left, transparent 0%, rgba(0, 0, 0, .25) 100%);

                    &.right {
                        background: linear-gradient(to right, transparent 0%, rgba(0, 0, 0, .25) 100%);
                    }
                }
            }

            .indicator {
                position: absolute;
                // coderwhy一般对于z-index的取值采用的是1 9 99 999...
                z-index: 9;
                bottom: 10px;
                left: 0;
                right: 0;
                width: 30%;
                margin: 0 auto;

                .item {
                    width: 14.28%;
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    .dot {
                        width: 5px;
                        height: 5px;
                        background-color: #fff;
                        border-radius: 50%;

                        &.active {
                            width: 8px;
                            height: 8px;
                            background-color: #f00;
                        }
                    }
                }
            }
        }

        .cover {
            // 如果直接为.cover中的img设置宽度占满父元素宽度高度按照比例缩放的话 那么将导致图片的高度不一致 这是因为每一张图片的宽高比不一致所致的 
            /* img {
                width: 100%
            } */

            // 我们会让cover占据一定的固定空间 这样即使没有图片 也会保持每个item的cover区域大小一致 并且让img的宽高和父元素cover的一致
            // padding百分值会相对于宽度计算 差不多我们padding-top相当于是宽度的2/3 并且他也是基于包含块的宽度进行计算的 只不过他统一都是基于包含块的content-box的宽度进行计算的
            padding: 66.6% 0 0;
            // 将溢出的图片部分给隐藏
            overflow: hidden;
            position: relative;
            border-radius: 3px;

            img {
                position: absolute;
                top: 0;
                left: 0;
                /* 
                    宽/高的百分比是相对于包含块的宽/高进行计算的 
                    包含块：对于标准流元素来说包含块就是最近的块级祖先元素 对于定位元素来说 包含块就是最近的定位祖先元素
                    如果包含块的宽高有指定的话 那么就直接相对于其内容宽高进行计算 
                    如果包含块的宽高没有指定(有内容撑起来的宽高)且当前元素是非绝对定位元素的话 那么宽高直接为auto(width为auto时 其值具体为包含块的content-box的width height为auto时 其值具体为内容撑起来的高度)
                    如果当前元素是绝对定位的块级元素的话 那么宽高就会基于包含块的padding-box的宽高进行计算

                    所以他才会基于.cover的padding进行计算
                */
                width: 100%;
                height: 100%;
                /* 对于有些图片来说 为了让整张图片能够铺满父元素 会刻意压缩其宽或者高 如若不想如此的话 就需要在铺满父元素的情况下 只能显示部分图片区域并保证宽高比 */
                object-fit: cover;
            }
        }

        .desc {
            padding: 10px 0 5px;
            font-weight: bold;
            font-size: 12px;
            /** desc的颜色实际上服务器已经传给我们了 我们可以根据服务器传递的颜色值来动态设置color属性而不用写死 */
            color: ${props => props.verifyColor}
        }

        .name {
            display: -webkit-box;
            /** 控制最多显示的行数 */
            -webkit-line-clamp: 2;
            /** 控制布局子项的排布方向 */
            -webkit-box-orient: vertical;
            /** 控制溢出文本的替代 */
            text-overflow: ellipsis;
            /** 控制溢出文本隐藏 */
            overflow: hidden;
            font-size: 16px;
            font-weight: bold;
        }

        .price {
            color: #444;
            padding: 10px 0
        }

        .bottom {
            display: flex;
            align-items: center;
            font-size: 12px;
            font-weight: 600;
            color: ${props => props.theme.text.primaryColor};

            .count {
                padding: 0 2px 0 4px;
            }

            .MuiRating-decimal {
                margin-right: -3px;
            }
        }
    }
`