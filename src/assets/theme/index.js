const theme = {
    color: {
        primaryColor: "#ff385c",
        secondaryColor: "#00848A"
    },
    text: {
        primaryColor: "#484848",
        secondaryColor: "#222"
    },
    mixin: {
        // 这个悬浮的阴影效果在这个网站项目中多处地方均有使用 因此抽取为公共属性
        boxShadow: `
            &:hover {
                transition: box-shadow 200ms ease;
                box-shadow: 0 2px 4px rgba(0, 0, 0, .18)
            }
        `
    }
}

export default theme