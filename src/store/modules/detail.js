import { createSlice } from "@reduxjs/toolkit";

const detailSlice = createSlice({
    name: "detail",
    initialState: {
        // 当刷新detail界面时所有redux中保存的有关detail的数据全部都会消失 如果想要重新获取 还得从home组件一个个进入才行 所以说为了避免刷新以后不用一个个页面进入获取数据的这种麻烦行为的话 我们可以为该字段提供一个默认值供刷新页面时测试
        detailInfo: {
            "_id": "63043046432f9033d4541105",
            "id": "50860318",
            "picture_url": "https://z1.muscache.cn/im/pictures/miso/Hosting-50860318/original/28da71c2-bc99-448a-a36a-e466023d431f.jpeg?aki_policy=large",
            "picture_urls": [
                "https://z1.muscache.cn/im/pictures/miso/Hosting-50860318/original/28da71c2-bc99-448a-a36a-e466023d431f.jpeg?aki_policy=large",
                "https://z1.muscache.cn/im/pictures/miso/Hosting-50860318/original/25725177-25a3-4da9-bf3c-e4a2ed633f98.jpeg?aki_policy=large",
                "https://z1.muscache.cn/im/pictures/miso/Hosting-50860318/original/3745ca24-f7fb-4891-9ac7-32ec3a907cbe.jpeg?aki_policy=large",
                "https://z1.muscache.cn/im/pictures/miso/Hosting-50860318/original/748972ab-96c3-45d5-b0e3-87fb6222fea5.jpeg?aki_policy=large",
                "https://z1.muscache.cn/im/pictures/miso/Hosting-50860318/original/17b28af0-f821-4453-b0bf-3486a196abcd.jpeg?aki_policy=large",
                "https://z1.muscache.cn/im/pictures/miso/Hosting-50860318/original/2d007ed6-0279-4dd2-a713-b3666959d1bb.jpeg?aki_policy=large",
                "https://z1.muscache.cn/im/pictures/miso/Hosting-50860318/original/f1012e93-77b1-44a8-b5a1-c4fcccf2a262.jpeg?aki_policy=large",
                "https://z1.muscache.cn/im/pictures/miso/Hosting-50860318/original/b776072c-2759-418f-b5b9-54a9fba084a2.jpeg?aki_policy=large",
                "https://z1.muscache.cn/im/pictures/miso/Hosting-50860318/original/5c8ccb56-8933-4288-9227-15ca5f0fe463.jpeg?aki_policy=large",
                "https://z1.muscache.cn/im/pictures/miso/Hosting-50860318/original/137caa1c-e22a-474f-a484-43e3740d6730.jpeg?aki_policy=large",
                "https://z1.muscache.cn/im/pictures/miso/Hosting-50860318/original/d4242127-ba64-4fb0-9cd3-1c7f00ad168b.jpeg?aki_policy=large",
                "https://z1.muscache.cn/im/pictures/miso/Hosting-50860318/original/685a5aa2-c968-45f9-84b6-fc7f55eb0be5.jpeg?aki_policy=large",
                "https://z1.muscache.cn/im/pictures/miso/Hosting-50860318/original/e8a5f148-2fc4-4f76-9178-5a7c2a324bda.jpeg?aki_policy=large",
                "https://z1.muscache.cn/im/pictures/miso/Hosting-50860318/original/0f85e0ff-1c7c-4f96-97b0-b86a4acd9a4f.jpeg?aki_policy=large",
                "https://z1.muscache.cn/im/pictures/miso/Hosting-50860318/original/146d97dd-8256-47e8-9dc7-ae4040a061f8.jpeg?aki_policy=large",
                "https://z1.muscache.cn/im/pictures/miso/Hosting-50860318/original/096e9d04-2fa1-41e5-9340-934ce27a83bc.jpeg?aki_policy=large",
                "https://z1.muscache.cn/im/pictures/miso/Hosting-50860318/original/4a4ee4e9-dce2-4877-891b-12fa915d2ba2.jpeg?aki_policy=large",
                "https://z1.muscache.cn/im/pictures/miso/Hosting-50860318/original/5395b74c-192f-4a39-b8e3-e66a5c65f95b.jpeg?aki_policy=large",
                "https://z1.muscache.cn/im/pictures/miso/Hosting-50860318/original/e28d4727-eb0a-409c-86bc-dd1099c20d4f.jpeg?aki_policy=large",
                "https://z1.muscache.cn/im/pictures/miso/Hosting-50860318/original/2c12f81c-2309-41f9-8a03-3115b0264d98.jpeg?aki_policy=large",
                "https://z1.muscache.cn/im/pictures/miso/Hosting-50860318/original/3096edd0-5f4f-40f9-8e24-2664dfb55efe.jpeg?aki_policy=large",
                "https://z1.muscache.cn/im/pictures/miso/Hosting-50860318/original/497cef88-176d-4b20-9aae-4b6ad525f029.jpeg?aki_policy=large",
                "https://z1.muscache.cn/im/pictures/miso/Hosting-50860318/original/aaff9e0c-2036-4b93-aa87-515d7cb77ed1.jpeg?aki_policy=large",
                "https://z1.muscache.cn/im/pictures/miso/Hosting-50860318/original/c63bddf4-fe86-4f0e-b36e-f4d35ee6e704.jpeg?aki_policy=large",
                "https://z1.muscache.cn/im/pictures/miso/Hosting-50860318/original/36eea70b-9877-4a08-af2b-98397561f094.jpeg?aki_policy=large",
                "https://z1.muscache.cn/im/pictures/miso/Hosting-50860318/original/33c65ad6-911e-43f6-a7d0-ded1cd3d92e1.jpeg?aki_policy=large",
                "https://z1.muscache.cn/im/pictures/miso/Hosting-50860318/original/844294c2-cbed-4370-96ff-873fe73b4504.jpeg?aki_policy=large",
                "https://z1.muscache.cn/im/pictures/miso/Hosting-50860318/original/ab62a2e5-d18c-41da-9606-233aeac66119.jpeg?aki_policy=large",
                "https://z1.muscache.cn/im/pictures/miso/Hosting-50860318/original/66bb7f9c-dc97-4d85-80e3-965c7bfd1e9e.jpeg?aki_policy=large",
                "https://z1.muscache.cn/im/pictures/miso/Hosting-50860318/original/71125e3b-0dd8-464c-a9e3-7292c19bd1ab.jpeg?aki_policy=large"
            ],
            "verify_info": {
                "messages": [
                    "整套公寓型住宅",
                    "1室1卫1床"
                ],
                "text_color": "#767676"
            },
            "name": "【地铁口】芒果-上下九/地铁3分钟/落地窗/巨幕投影/永庆坊/沙面/陈家祠/玉器城/北京路",
            "price": 259,
            "price_format": "￥259",
            "star_rating": 5,
            "star_rating_color": "#FF5A5F",
            "reviews_count": 7,
            "reviews": [
                {
                    "comments": "超级棒！真的物超所值，当打开窗户的一瞬间，窗外的风景都有点震撼到我了，高的楼，低矮的城中村，一个富含生活气息的景象，很难不爱。然后就很打动我的事情就是，入住的时候处于下雨天，房东给准备了三把雨伞，这点细节真的很不错，同时对比其他的民宿，这家民宿的生活用品真的很齐全，真的非常nice的入住体验",
                    "created_at": "2022-05-11T00:00:00Z",
                    "is_translated": false,
                    "localized_date": "2022年5月",
                    "reviewer_image_url": "https://a0.muscache.com/im/pictures/user/8101db6f-d8be-4282-b2ec-d211269d658f.jpg?aki_policy=x_medium",
                    "review_id": 624132784947144400
                }
            ],
            "bottom_info": null,
            "lat": 23.12089,
            "lng": 113.241615,
            "image_url": "/moreitems/50e2033f94944924e19fc3bbf1d26294.jpg"
        }
    },
    reducers: {
        changeDetailInfoAction(state, {payload}) {
            state.detailInfo = payload
        }
    }
})

export const {changeDetailInfoAction} = detailSlice.actions
export default detailSlice.reducer