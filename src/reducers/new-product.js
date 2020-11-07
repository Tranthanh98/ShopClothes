let initState = [
    {
       "id":0,
       "image":"//product.hstatic.net/1000341789/product/mausac_navy_cream_dsc_1720__1__8b362befafc840178d209a3b9cf2c186_1024x1024.jpg",
       "name":"Vớ dài phối màu - 10F20SOC003",
       "price":"85000"
    },
    {
       "id":1,
       "image":"//product.hstatic.net/1000341789/product/mausac_wht_bro_blk_dsc_1734__4__0d4b25165d054a79bafdb87df69dae3a_1024x1024.jpg",
       "name":"Vớ dài solid -  10F20SOC002",
       "price":"130000"
    },
    {
       "id":2,
       "image":"//product.hstatic.net/1000341789/product/mausac_wht_char_dsc_1743__3__1db706bd534a45f9a92b3ead8ae38c04_1024x1024.jpg",
       "name":"Vớ dài kẻ sọc cotton - 10F20SOC001",
       "price":"85000"
    },
    {
       "id":3,
       "image":"//product.hstatic.net/1000341789/product/mausac_grey_dsc_1632__13__4f36dccf15d440eea8df38f961aaf108_1024x1024.jpg",
       "name":"Nón tròn có vành - 10F20CAP005",
       "price":"190000"
    },
    {
       "id":4,
       "image":"//product.hstatic.net/1000341789/product/mausac_yellow_dsc_2053__3__874ec990b7a44b20a75dde3e49c1a7b3_1024x1024.jpg",
       "name":"Túi bao tử có nhãn da -  10F20BAG003",
       "price":"280000"
    },
    {
       "id":5,
       "image":"//product.hstatic.net/1000341789/product/mausac_wht_blk_navy_dsc_1705__2__5c637bf58fc54489b1168c52ea2c9720_1024x1024.jpg",
       "name":"Vớ ngắn có cổ, kẻ sọc - 10F20SOC010",
       "price":"95000"
    },
    {
       "id":6,
       "image":"//product.hstatic.net/1000341789/product/mausac_nvy_char_wht_dsc_1690__1__b82da83df6c54fa6ae520dd3f4413fc8_1024x1024.jpg",
       "name":"Vớ hài kẻ sọc - 10F20SOC011",
       "price":"95000"
    },
    {
       "id":7,
       "image":"//product.hstatic.net/1000341789/product/mausac_wht_blk_navy_dsc_1696__1__b13cec1c5c7a453a986bf330b5f44ca9_1024x1024.jpg",
       "name":"Vớ hài solid - 10F20SOC012",
       "price":"95000"
    },
    {
       "id":8,
       "image":"//product.hstatic.net/1000341789/product/mausac_grey_black_dsc_1666__1__7cad7f042d714d0aa9cd4345694f1f6f_1024x1024.jpg",
       "name":"Vớ ngắn có cổ phối sọc - 10F20SOC013",
       "price":"65000"
    },
    {
       "id":9,
       "image":"//product.hstatic.net/1000341789/product/mausac_grey_black_dsc_1684__1__a50e6a3b86f64f2b95a8c89e6fb1eae9_1024x1024.jpg",
       "name":"Vớ ngắn có cổ - 10F20SOC014",
       "price":"65000"
    },
    {
       "id":10,
       "image":"//product.hstatic.net/1000341789/product/mausac_grey_dsc_1801_3961b832becc42e79548cd1add493cc4_1024x1024.jpg",
       "name":"Áo thun tay ngắn sọc đứng form regular - 10S20TSH021",
       "price":"280000"
    },
    {
       "id":11,
       "image":"//product.hstatic.net/1000341789/product/mausac_yellow_dsc_0047_9692e0e70e4e4425835d8941bb7e03a0_1024x1024.jpg",
       "name":"Áo thun cotton ngắn tay form fitted - 10S20TSH042",
       "price":"220000"
    },
    {
       "id":12,
       "image":"//product.hstatic.net/1000341789/product/mausac_red_dsc_0727_fa54c436259e4c36ab63bf0c30afe2ed_1024x1024.jpg",
       "name":"Áo thun cotton form fitted - 10S20TSH045",
       "price":"240000"
    },
    {
       "id":13,
       "image":"//product.hstatic.net/1000341789/product/mausac_green_dsc_9541__2__f3a6ef6c7eec46a4b322ac54b9ac85f9_1024x1024.jpg",
       "name":"Áo polo phối tay màu - 10S20POL015",
       "price":"380000"
    },
    {
       "id":14,
       "image":"//product.hstatic.net/1000341789/product/mausac_brightwhite_dsc_7161__3__af9af1d26e18447cbf495964f285cb20_1024x1024.jpg",
       "name":"Áo thun ngắn tay form Fitted - 10F19TSH001",
       "price":"240000"
    },
    {
       "id":15,
       "image":"//product.hstatic.net/1000341789/product/mausac_arganoil_dsc_7477__2__fc7229e0c28f419ebf9ea8760323e110_1024x1024.jpg",
       "name":"Áo polo phối màu - 10S20POL008",
       "price":"350000"
    },
    {
       "id":16,
       "image":"//product.hstatic.net/1000341789/product/mausac_white_dsc_1267_92b30371d3f4494baff2ccdc4a917dc2_1024x1024.jpg",
       "name":"Áo thun polo họa tiết form fitted - 10S20POL011",
       "price":"350000"
    },
    {
       "id":17,
       "image":"//product.hstatic.net/1000341789/product/mausac_green_dsc_0968_c059e9d5a3644140bd1617d76cfd2da8_1024x1024.jpg",
       "name":"Áo thun kẻ sọc ngang form regular - 10S20TSH019",
       "price":"350000"
    },
    {
       "id":18,
       "image":"//product.hstatic.net/1000341789/product/mausac_white_black_10s20tsh018__3__251a8d86bd8f47f2aa196221ad644580_1024x1024.jpg",
       "name":"Áo Thun Nam Kẻ Sọc Ngang Form Regular 10S20TSH018",
       "price":"240000"
    },
    {
       "id":19,
       "image":"//product.hstatic.net/1000341789/product/mausac_navy_blazer_10s20pol002__4__fb5f740810be497095d9ee9f78998597_1024x1024.jpg",
       "name":"Áo Thun Polo Tay Phối Form Fitted 10S20POL002",
       "price":"350000"
    }
];

export const recuderNewProduct =(state = initState, action)=>{
    return [...state];
}