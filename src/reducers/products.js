import * as types from '../constants/ActionType';

let initialState = [
   {
      "id": 1,
      "image": "//product.hstatic.net/1000341789/product/mausac_white_dsc_0828_2e8785e1e87c43e89410d112d964306c_1024x1024.jpg",
      "name": "Áo sơ mi tay dài modal form Fitted - 10S20SHL022",
      "price": "420000",
      "description": "-Áo đẹp. \n-Vải đẹp. \n-Không ủi nhiệt độ quá cao",
      "isNew": true,
      "isHotSale" : false,
      "size": ["XS","S", "M", "L", "XL"]
   },
   {
      "id": 2,
      "image": "//product.hstatic.net/1000341789/product/mausac_dark_dsc_9490__4__4c01b1224d7d40ef87cd2a7b2fffae2e_1024x1024.jpg",
      "name": "Áo sơ mi denim tay dài - 10S20DSH001",
      "price": "390000",
      "description": "-Áo đẹp. \n-Vải đẹp. \n-Không ủi nhiệt độ quá cao",
      "isNew": false,
      "isHotSale" : false,
      "size": ["XS","S", "M", "L", "XL"]
   },
   {
      "id": 3,
      "image": "//product.hstatic.net/1000341789/product/mausac_white_dsc_7967_a7e16a60275943c1b19be342446d0205_1024x1024.jpg",
      "name": "Áo sơ mi tay dài - 10S20SHL020",
      "price": "390000",
      "description": "-Áo đẹp. \n-Vải đẹp. \n-Không ủi nhiệt độ quá cao",
      "isNew": false,
      "isHotSale" : false,
      "size": ["XS","S", "M", "L", "XL"]
   },
   {
      "id": 4,
      "image": "//product.hstatic.net/1000341789/product/mausac_green_dsc_9470_ca015a3ad9974475955c7fc34802b4ad_1024x1024.jpg",
      "name": "Áo sơ mi kẻ sọc tay dài - 10S20SHL044",
      "price": "450000",
      "description": "-Áo đẹp. \n-Vải đẹp. \n-Không ủi nhiệt độ quá cao",
      "isNew": false,
      "isHotSale" : false,
      "size": ["XS","S", "M", "L", "XL"]
   },
   {
      "id": 5,
      "image": "//product.hstatic.net/1000341789/product/mausac_mahogany_dsc_7593__3__452fb2cbcb944759b9f259d427049911_1024x1024.jpg",
      "name": "Áo sơ mi tay dài Rayon form Fitted - 10S20SHL016",
      "price": "390000",
      "description": "-Áo đẹp. \n-Vải đẹp. \n-Không ủi nhiệt độ quá cao",
      "isNew": false,
      "isHotSale" : false,
      "size": ["XS","S", "M", "L", "XL"]
   },
   {
      "id": 6,
      "image": "//product.hstatic.net/1000341789/product/mausac_lightblue_dsc_7257__4__40937f52e3a1405c86cd914259c3b3f8_1024x1024.jpg",
      "name": "Áo sơ mi tay dài form Fitted - 10S20SHL043",
      "price": "450000",
      "description": "-Áo đẹp. \n-Vải đẹp. \n-Không ủi nhiệt độ quá cao",
      "isNew": false,
      "isHotSale" : false,
      "size": ["XS","S", "M", "L", "XL"]
   },
   {
      "id": 7,
      "image": "//product.hstatic.net/1000341789/product/mausac_white_dsc_3466_e92f23184c2a4eef866d25ac6cd2e74e_1024x1024.jpg",
      "name": "Áo sơ mi tay dài form fitted - 10S20SHL029",
      "price": "395000",
      "description": "-Áo đẹp. \n-Vải đẹp. \n-Không ủi nhiệt độ quá cao",
      "isNew": false,
      "isHotSale" : false,
      "size": ["XS","S", "M", "L", "XL"]
   },
   {
      "id": 8,
      "image": "//product.hstatic.net/1000341789/product/mausac_grey_dsc_1486_18fe2c9b7d6949e4bab15d0348503030_1024x1024.jpg",
      "name": "Áo sơ mi nam tay dài - 10S20SHL046",
      "price": "395000",
      "description": "-Áo đẹp. \n-Vải đẹp. \n-Không ủi nhiệt độ quá cao",
      "isNew": false,
      "isHotSale" : false,
      "size": ["XS","S", "M", "L", "XL"]
   },
   {
      "id": 9,
      "image": "//product.hstatic.net/1000341789/product/mausac_navy_10s20shl001__3__20ad8f01e50b49018a130368a0da07ee_1024x1024.jpg",
      "name": "Áo Sơ Mi Nam Dài Tay Form Regular 10S20SHL001",
      "price": "390000",
      "description": "-Áo đẹp. \n-Vải đẹp. \n-Không ủi nhiệt độ quá cao",
      "isNew": false,
      "isHotSale" : false,
      "size": ["XS","S", "M", "L", "XL"]
   },
   {
      "id": 10,
      "image": "//product.hstatic.net/1000341789/product/mausac_white_10s20shl042__4__5bc16f6d1a5f437e97315509a2265c6a_1024x1024.jpg",
      "name": "Áo Sơ Mi Tay Dài Form Fitted 10S20SHL042",
      "price": "390000",
      "description": "-Áo đẹp. \n-Vải đẹp. \n-Không ủi nhiệt độ quá cao",
      "isNew": false,
      "isHotSale" : false,
      "size": ["XS","S", "M", "L", "XL"]
   },
   {
      "id": 11,
      "image": "//product.hstatic.net/1000341789/product/mausac_grey_10s20shl045__4__0f146c3b785d4b18aa60a72545337df1_1024x1024.jpg",
      "name": "Áo Sơ Mi Nam Tay Dài Cổ Trụ Form Fitted 10S20SHL045",
      "price": "395000",
      "description": "-Áo đẹp. \n-Vải đẹp. \n-Không ủi nhiệt độ quá cao",
      "isNew": false,
      "isHotSale" : true,
      "size": ["XS","S", "M", "L", "XL"]
   },
   {
      "id": 12,
      "image": "//product.hstatic.net/1000341789/product/mausac_white_navy_10s20shl037__3__76639900cc6348c68435a55edd19736c_1024x1024.jpg",
      "name": "Áo Sơ Mi Nam Tay Dài Sọc Dọc Form Regular 10S20SHL037",
      "price": "420000",
      "description": "-Áo đẹp. \n-Vải đẹp. \n-Không ủi nhiệt độ quá cao",
      "isNew": true,
      "isHotSale" : false,
      "size": ["XS","S", "M", "L", "XL"]
   },
   {
      "id": 13,
      "image": "//product.hstatic.net/1000341789/product/mausac_white_pink_blue_10s20shl035__3__8aa207db056b4f8f87b8794e9db0534d_1024x1024.jpg",
      "name": "Áo Sơ Mi Nam Tay Dài Sọc Dọc Form Regular 10S20SHL035",
      "price": "420000",
      "description": "-Áo đẹp. \n-Vải đẹp. \n-Không ủi nhiệt độ quá cao",
      "isNew": false,
      "isHotSale" : false,
      "size": ["XS","S", "M", "L", "XL"]
   },
   {
      "id": 14,
      "image": "//product.hstatic.net/1000341789/product/mausac_white_10s20shl042__5__56ec7e49382e44bb9f6c4913bd9c7df4_1024x1024.jpg",
      "name": "Áo Sơ Mi Nam Dài Tay Form Fitted 10S20SHL042",
      "price": "390000",
      "description": "-Áo đẹp. \n-Vải đẹp. \n-Không ủi nhiệt độ quá cao",
      "isNew": false,
      "isHotSale" : false,
      "size": ["XS","S", "M", "L", "XL"]
   },
   {
      "id": 15,
      "image": "//product.hstatic.net/1000341789/product/mausac_bright_white_10s20shl011__1__df61a726a4ae4579b5f557d6e8f41ceb_1024x1024.jpg",
      "name": "Áo Sơ Mi Nam Dài Tay Form Loose 10S20SHL011",
      "price": "390000",
      "description": "-Áo đẹp. \n-Vải đẹp. \n-Không ủi nhiệt độ quá cao",
      "isNew": false,
      "isHotSale" : false,
      "size": ["XS","S", "M", "L", "XL"]
   },
   {
      "id": 16,
      "image": "//product.hstatic.net/1000341789/product/mausac_tawny_port_10s20shl006__1__a6fe593e82ec4befad8e6c5ecb91d726_1024x1024.jpg",
      "name": "Áo Sơ Mi Dài Tay Cổ Thường Form Fitted 10S20SHL006",
      "price": "420000",
      "description": "-Áo đẹp. \n-Vải đẹp. \n-Không ủi nhiệt độ quá cao",
      "isNew": false,
      "isHotSale" : false,
      "size": ["XS","S", "M", "L", "XL"]
   },
   {
      "id": 17,
      "image": "//product.hstatic.net/1000341789/product/mausac_white_stripe_10s20shl012_014f4a2e578c4ce089fecdd41dfe770b_1024x1024.jpg",
      "name": "Áo Sơ Mi Nam Dài Tay Form Fitted 10S20SHL012",
      "price": "395000",
      "description": "-Áo đẹp. \n-Vải đẹp. \n-Không ủi nhiệt độ quá cao",
      "isNew": false,
      "isHotSale" : false,
      "size": ["XS","S", "M", "L", "XL"]
   },
   {
      "id": 18,
      "image": "//product.hstatic.net/1000341789/product/mausac_navy_stripe_10s20shl034__3__6674400f886149469fdd9402f44e1fe2_1024x1024.jpg",
      "name": "Áo Sơ Mi Nam Dài Tay Cổ Trụ Form Regular 10S20SHL034",
      "price": "420000",
      "description": "-Áo đẹp. \n-Vải đẹp. \n-Không ủi nhiệt độ quá cao",
      "isNew": false,
      "isHotSale" : false,
      "size": ["XS","S", "M", "L", "XL"]
   },
   {
      "id": 19,
      "image": "//product.hstatic.net/1000341789/product/mausac_blue_10s20shl009__3__edae57f44c604ed1b22015c78d718521_1024x1024.jpg",
      "name": "Áo Sơ Mi Nam Tay Dài Form Fitted 1020SHL009",
      "price": "420000",
      "description": "-Áo đẹp. \n-Vải đẹp. \n-Không ủi nhiệt độ quá cao",
      "isNew": false,
      "isHotSale" : false,
      "size": ["XS","S", "M", "L", "XL"]
   },
   {
      "id": 20,
      "image": "//product.hstatic.net/1000341789/product/mausac_castor_gray_10s20shl017__2__0292d29b38f7441c8aae9406b108f8e4_1024x1024.jpg",
      "name": "Áo Sơ Mi Nam Dài Tay Form Regular 10S20SHL017",
      "price": "390000",
      "description": "-Áo đẹp. \n-Vải đẹp. \n-Không ủi nhiệt độ quá cao",
      "isNew": false,
      "isHotSale" : false,
      "size": ["XS","S", "M", "L", "XL"]
   },
   {
      "id":21,
      "image":"//product.hstatic.net/1000341789/product/mausac_red_dsc_0727_fa54c436259e4c36ab63bf0c30afe2ed_1024x1024.jpg",
      "name":"Áo thun cotton form fitted - 10S20TSH045",
      "price":"240000",
      "description": "-Áo đẹp. \n-Vải đẹp. \n-Không ủi nhiệt độ quá cao",
      "isNew": false,
      "isHotSale" : false,
      "size": ["XS","S", "M", "L", "XL"]
   },
   {
      "id":22,
      "image":"//product.hstatic.net/1000341789/product/mausac_green_dsc_9541__2__f3a6ef6c7eec46a4b322ac54b9ac85f9_1024x1024.jpg",
      "name":"Áo polo phối tay màu - 10S20POL015",
      "price":"380000",
      "description": "-Áo đẹp. \n-Vải đẹp. \n-Không ủi nhiệt độ quá cao",
      "isNew": false,
      "isHotSale" : false,
      "size": ["XS","S", "M", "L", "XL"]
   },
   {
      "id":23,
      "image":"//product.hstatic.net/1000341789/product/mausac_brightwhite_dsc_7161__3__af9af1d26e18447cbf495964f285cb20_1024x1024.jpg",
      "name":"Áo thun ngắn tay form Fitted - 10F19TSH001",
      "price":"240000",
      "description": "-Áo đẹp. \n-Vải đẹp. \n-Không ủi nhiệt độ quá cao",
      "isNew": false,
      "isHotSale" : false,
      "size": ["XS","S", "M", "L", "XL"]
   },
   {
      "id":24,
      "image":"//product.hstatic.net/1000341789/product/mausac_arganoil_dsc_7477__2__fc7229e0c28f419ebf9ea8760323e110_1024x1024.jpg",
      "name":"Áo polo phối màu - 10S20POL008",
      "price":"350000",
      "description": "-Áo đẹp. \n-Vải đẹp. \n-Không ủi nhiệt độ quá cao",
      "isNew": false,
      "isHotSale" : false,
      "size": ["XS","S", "M", "L", "XL"]
   },
   {
      "id":25,
      "image":"//product.hstatic.net/1000341789/product/mausac_white_dsc_1267_92b30371d3f4494baff2ccdc4a917dc2_1024x1024.jpg",
      "name":"Áo thun polo họa tiết form fitted - 10S20POL011",
      "price":"350000",
      "description": "-Áo đẹp. \n-Vải đẹp. \n-Không ủi nhiệt độ quá cao",
      "isNew": false,
      "isHotSale" : false,
      "size": ["XS","S", "M", "L", "XL"]
   },
   {
      "id":26,
      "image":"//product.hstatic.net/1000341789/product/mausac_green_dsc_0968_c059e9d5a3644140bd1617d76cfd2da8_1024x1024.jpg",
      "name":"Áo thun kẻ sọc ngang form regular - 10S20TSH019",
      "price":"350000",
      "description": "-Áo đẹp. \n-Vải đẹp. \n-Không ủi nhiệt độ quá cao",
      "isNew": false,
      "isHotSale" : false,
      "size": ["XS","S", "M", "L", "XL"]
   },
   {
      "id":27,
      "image":"//product.hstatic.net/1000341789/product/mausac_white_black_10s20tsh018__3__251a8d86bd8f47f2aa196221ad644580_1024x1024.jpg",
      "name":"Áo Thun Nam Kẻ Sọc Ngang Form Regular 10S20TSH018",
      "price":"240000",
      "description": "-Áo đẹp. \n-Vải đẹp. \n-Không ủi nhiệt độ quá cao",
      "isNew": false,
      "isHotSale" : false,
      "size": ["XS","S", "M", "L", "XL"]
   },
   {
      "id":28,
      "image":"//product.hstatic.net/1000341789/product/mausac_navy_blazer_10s20pol002__4__fb5f740810be497095d9ee9f78998597_1024x1024.jpg",
      "name":"Áo Thun Polo Tay Phối Form Fitted 10S20POL002",
      "price":"350000",
      "description": "-Áo đẹp. \n-Vải đẹp. \n-Không ủi nhiệt độ quá cao",
      "isNew": true,
      "isHotSale" : false,
      "size": ["XS","S", "M", "L", "XL"]
   },
   {
      "id":29,
      "image":"//product.hstatic.net/1000341789/product/mausac_navy_cream_dsc_1720__1__8b362befafc840178d209a3b9cf2c186_1024x1024.jpg",
      "name":"Vớ dài phối màu - 10F20SOC003",
      "price":"85000",
      "description": "-Áo đẹp. \n-Vải đẹp. \n-Không ủi nhiệt độ quá cao",
      "isNew": false,
      "isHotSale" : false,
      "size": ["XS","S", "M", "L", "XL"]
   },
   {
      "id":30,
      "image":"//product.hstatic.net/1000341789/product/mausac_wht_bro_blk_dsc_1734__4__0d4b25165d054a79bafdb87df69dae3a_1024x1024.jpg",
      "name":"Vớ dài solid -  10F20SOC002",
      "price":"130000",
      "description": "-Áo đẹp. \n-Vải đẹp. \n-Không ủi nhiệt độ quá cao",
      "isNew": false,
      "isHotSale" : false,
      "size": ["XS","S", "M", "L", "XL"]
   },
   {
      "id":31,
      "image":"//product.hstatic.net/1000341789/product/mausac_wht_char_dsc_1743__3__1db706bd534a45f9a92b3ead8ae38c04_1024x1024.jpg",
      "name":"Vớ dài kẻ sọc cotton - 10F20SOC001",
      "price":"85000",
      "description": "-Áo đẹp. \n-Vải đẹp. \n-Không ủi nhiệt độ quá cao",
      "isNew": false,
      "isHotSale" : false,
      "size": ["XS","S", "M", "L", "XL"]
   },
   {
      "id":32,
      "image":"//product.hstatic.net/1000341789/product/mausac_grey_dsc_1632__13__4f36dccf15d440eea8df38f961aaf108_1024x1024.jpg",
      "name":"Nón tròn có vành - 10F20CAP005",
      "price":"190000",
      "description": "-Áo đẹp. \n-Vải đẹp. \n-Không ủi nhiệt độ quá cao",
      "isNew": false,
      "isHotSale" : false,
      "size": ["XS","S", "M", "L", "XL"]
   },
   {
      "id":33,
      "image":"//product.hstatic.net/1000341789/product/mausac_yellow_dsc_2053__3__874ec990b7a44b20a75dde3e49c1a7b3_1024x1024.jpg",
      "name":"Túi bao tử có nhãn da -  10F20BAG003",
      "price":"280000",
      "description": "-Áo đẹp. \n-Vải đẹp. \n-Không ủi nhiệt độ quá cao",
      "isNew": false,
      "isHotSale" : false,
      "size": ["XS","S", "M", "L", "XL"]
   },
   {
      "id":34,
      "image":"//product.hstatic.net/1000341789/product/mausac_wht_blk_navy_dsc_1705__2__5c637bf58fc54489b1168c52ea2c9720_1024x1024.jpg",
      "name":"Vớ ngắn có cổ, kẻ sọc - 10F20SOC010",
      "price":"95000",
      "description": "-Áo đẹp. \n-Vải đẹp. \n-Không ủi nhiệt độ quá cao",
      "isNew": false,
      "isHotSale" : false,
      "size": ["XS","S", "M", "L", "XL"]
   },
   {
      "id":35,
      "image":"//product.hstatic.net/1000341789/product/mausac_nvy_char_wht_dsc_1690__1__b82da83df6c54fa6ae520dd3f4413fc8_1024x1024.jpg",
      "name":"Vớ hài kẻ sọc - 10F20SOC011",
      "price":"95000",
      "description": "-Áo đẹp. \n-Vải đẹp. \n-Không ủi nhiệt độ quá cao",
      "isNew": false,
      "isHotSale" : false,
      "size": ["XS","S", "M", "L", "XL"]
   },
   {
      "id":36,
      "image":"//product.hstatic.net/1000341789/product/mausac_wht_blk_navy_dsc_1696__1__b13cec1c5c7a453a986bf330b5f44ca9_1024x1024.jpg",
      "name":"Vớ hài solid - 10F20SOC012",
      "price":"95000",
      "description": "-Áo đẹp. \n-Vải đẹp. \n-Không ủi nhiệt độ quá cao",
      "isNew": false,
      "isHotSale" : false,
      "size": ["XS","S", "M", "L", "XL"]
   },
   {
      "id":37,
      "image":"//product.hstatic.net/1000341789/product/mausac_grey_black_dsc_1666__1__7cad7f042d714d0aa9cd4345694f1f6f_1024x1024.jpg",
      "name":"Vớ ngắn có cổ phối sọc - 10F20SOC013",
      "price":"65000",
      "description": "-Áo đẹp. \n-Vải đẹp. \n-Không ủi nhiệt độ quá cao",
      "isNew": true,
      "isHotSale" : false,
      "size": ["XS","S", "M", "L", "XL"]
   },
   {
      "id":38,
      "image":"//product.hstatic.net/1000341789/product/mausac_grey_black_dsc_1684__1__a50e6a3b86f64f2b95a8c89e6fb1eae9_1024x1024.jpg",
      "name":"Vớ ngắn có cổ - 10F20SOC014",
      "price":"65000",
      "description": "-Áo đẹp. \n-Vải đẹp. \n-Không ủi nhiệt độ quá cao",
      "isNew": true,
      "isHotSale" : true,
      "size": ["XS","S", "M", "L", "XL"]
   },
   {
      "id":39,
      "image":"//product.hstatic.net/1000341789/product/mausac_grey_dsc_1801_3961b832becc42e79548cd1add493cc4_1024x1024.jpg",
      "name":"Áo thun tay ngắn sọc đứng form regular - 10S20TSH021",
      "price":"280000",
      "description": "-Áo đẹp. \n-Vải đẹp. \n-Không ủi nhiệt độ quá cao",
      "isNew": true,
      "isHotSale" : true,
      "size": ["XS","S", "M", "L", "XL"]
   },
   {
      "id":40,
      "image":"//product.hstatic.net/1000341789/product/mausac_yellow_dsc_0047_9692e0e70e4e4425835d8941bb7e03a0_1024x1024.jpg",
      "name":"Áo thun cotton ngắn tay form fitted - 10S20TSH042",
      "price":"220000",
      "description": "-Áo đẹp. \n-Vải đẹp. \n-Không ủi nhiệt độ quá cao",
      "isNew": true,
      "isHotSale" : true,
      "size": ["XS","S", "M", "L", "XL"]
   },
   {
      "id":41,
      "image":"//product.hstatic.net/1000341789/product/mausac_red_dsc_0727_fa54c436259e4c36ab63bf0c30afe2ed_1024x1024.jpg",
      "name":"Áo thun cotton form fitted - 10S20TSH045",
      "price":"240000",
      "description": "-Áo đẹp. \n-Vải đẹp. \n-Không ủi nhiệt độ quá cao",
      "isNew": true,
      "isHotSale" : true,
      "size": ["XS","S", "M", "L", "XL"]
   },
   {
      "id":42,
      "image":"//product.hstatic.net/1000341789/product/mausac_green_dsc_9541__2__f3a6ef6c7eec46a4b322ac54b9ac85f9_1024x1024.jpg",
      "name":"Áo polo phối tay màu - 10S20POL015",
      "price":"380000",
      "description": "-Áo đẹp. \n-Vải đẹp. \n-Không ủi nhiệt độ quá cao",
      "isNew": true,
      "isHotSale" : true,
      "size": ["XS","S", "M", "L", "XL"]
   },
   {
      "id":43,
      "image":"//product.hstatic.net/1000341789/product/mausac_brightwhite_dsc_7161__3__af9af1d26e18447cbf495964f285cb20_1024x1024.jpg",
      "name":"Áo thun ngắn tay form Fitted - 10F19TSH001",
      "price":"240000",
      "description": "-Áo đẹp. \n-Vải đẹp. \n-Không ủi nhiệt độ quá cao",
      "isNew": true,
      "isHotSale" : true,
      "size": ["XS","S", "M", "L", "XL"]
   },
   {
      "id":44,
      "image":"//product.hstatic.net/1000341789/product/mausac_arganoil_dsc_7477__2__fc7229e0c28f419ebf9ea8760323e110_1024x1024.jpg",
      "name":"Áo polo phối màu - 10S20POL008",
      "price":"350000",
      "description": "-Áo đẹp. \n-Vải đẹp. \n-Không ủi nhiệt độ quá cao",
      "isNew": true,
      "isHotSale" : true,
      "size": ["XS","S", "M", "L", "XL"]
   },
   {
      "id":45,
      "image":"//product.hstatic.net/1000341789/product/mausac_white_dsc_1267_92b30371d3f4494baff2ccdc4a917dc2_1024x1024.jpg",
      "name":"Áo thun polo họa tiết form fitted - 10S20POL011",
      "price":"350000",
      "description": "-Áo đẹp. \n-Vải đẹp. \n-Không ủi nhiệt độ quá cao",
      "isNew": true,
      "isHotSale" : true,
      "size": ["XS","S", "M", "L", "XL"]
   },
   {
      "id":46,
      "image":"//product.hstatic.net/1000341789/product/mausac_green_dsc_0968_c059e9d5a3644140bd1617d76cfd2da8_1024x1024.jpg",
      "name":"Áo thun kẻ sọc ngang form regular - 10S20TSH019",
      "price":"350000",
      "description": "-Áo đẹp. \n-Vải đẹp. \n-Không ủi nhiệt độ quá cao",
      "isNew": true,
      "isHotSale" : true,
      "size": ["XS","S", "M", "L", "XL"]
   },
   {
      "id":47,
      "image":"//product.hstatic.net/1000341789/product/mausac_white_black_10s20tsh018__3__251a8d86bd8f47f2aa196221ad644580_1024x1024.jpg",
      "name":"Áo Thun Nam Kẻ Sọc Ngang Form Regular 10S20TSH018",
      "price":"240000",
      "description": "-Áo đẹp. \n-Vải đẹp. \n-Không ủi nhiệt độ quá cao",
      "isNew": true,
      "isHotSale" : true,
      "size": ["XS","S", "M", "L", "XL"]
   }
];

const product = (state = initialState, action) => {
   switch (action.type) {
      default:
         return [...state];
   }
}
export default product;