import styled from "styled-components"

export const HomeWrapper = styled.div`
    // >的作用是为了避免影响到HomeWrapper样式组件中其他同名的后代元素 >指定的是直接子元素.content
    // 这个样式估计无法抽取为公共样式 因为详情页中的内容居中时他的宽度有所不同
    > .content {
        // 设置宽度并且设置margin为0 auto可以使得当前元素水平居中
        width: 1032px;
        margin: 0 auto;

        // home模块中的所有模块都距离顶部30px
        > div {
            margin-top: 30px;
        }
    }

    /* .goodPrice {
        margin-top: 30px;

        /* .room-list {
            // 其中的每一条list都大致占据了父元素的1/4 但是每一条list之间有间隔16px 我们会想通过[1032-(4 - 1)*16]/4 但是这个公式严重依赖于当前room-list中的一行的item个数 而一行item的个数在这个项目中是不确定的 有可能一行有4个item 也有可能一行存在5个item等等 因此这种做法不建议
            // 更加建议的做法是：假如一行只有4个item 那么每个item的宽度占据父元素的25% 并且每一个item的box-sizing为border-box即宽度包含padding 然后为每一个item设置8的padding 这样 item之间的间距和就是16px 可是list左右两边也存在8px的间距 我们就可以为list设置左右margin将8px的padding给吞噬
            display: flex;
            // flex布局的子项可换行显示
            flex-wrap: wrap;
            margin: 0 -8px
        }
    } */
`