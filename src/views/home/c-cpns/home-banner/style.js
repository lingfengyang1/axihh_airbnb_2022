import styled from "styled-components"
import coverImg from "@/assets/img/cover_01.jpeg"

// 由于图片资源需要被加入到依赖关系图中方可被识别 因此的话 图片的加载必须通过import而不能直接是字符串路径
// 而vue中之所以可以编写图片字符串路径是因为vue-loader会将字符串路径转换成import导入的图片依赖以供webpack识别
export const BannerWrapper = styled.div`

    height: 529px;
    // 缩写属性中包含了路径、位置、大小这些属性 其中cover表示大小会覆盖整个容器并且按照比例进行缩放
    background: url(${coverImg}) center/cover;
`