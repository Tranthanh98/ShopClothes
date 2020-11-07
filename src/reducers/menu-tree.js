export const initState = [
    {
        id: 0,
        name : "Áo Sơ Mi",
        idParent : null,
        link:"/ao-so-mi",
        items:[
            {
                id: 1,
                name : "Áo Sơ Mi Tay Dài",
                idParent : 0,
                link:"/ao-so-mi/tay-dai",
                items:[
                    {
                        id: 13,
                        name : "Áo Sơ Mi Tay Dài Cổ Tròn",
                        idParent : 1,
                        link:"/ao-so-mi/tay-dai/co-tron",
                        items:null
                    }
                ]
            },
            {
                id: 2,
                name : "Áo Sơ Mi Tay Ngắn",
                idParent : 0,
                link:"/ao-so-mi/tay-ngan",
                items:null
            }
        ]
    },
    {
        id: 3,
        name : "Áo Polo",
        idParent : null,
        link:"/ao-polo",
        items:null
    },
    {
        id: 4,
        name : "Áo Thun",
        idParent : null,
        link:"/ao-thun",
        items:[
            {
                id: 5,
                name : "Áo Thun Tay Dài",
                idParent : 4,
                link:"/ao-thun/tay-dai",
                items:null
            },
            {
                id: 6,
                name : "Áo Thun Tay Ngắn",
                idParent : 4,
                link:"/ao-thun/tay-ngan",
                items:null
            }
        ]
    },
    {
        id: 7,
        name : "Quần",
        idParent : null,
        link:"/quan",
        items:[
            {
                id: 8,
                name : "Quần Jean Nam",
                idParent : 7,
                link:"/quan/jean-nam",
                items:null
            },
            {
                id: 9,
                name : "Quần Kaki Nam",
                idParent : 7,
                link:"/quan/kaki-nam",
                items:null
            }
        ],

    },
    {
        id: 10,
        name : "Áo Khoác",
        idParent : null,
        link:"/ao-khoac",
        items:null
    },
    {
        id: 11,
        name : "Áo Vest",
        idParent : null,
        link:"/ao-vest",
        items:null
    },
    {
        id: 12,
        name : "Áo Len",
        idParent : null,
        link:"/ao-len",
        items:null
    },
];

const menuTree = (state = initState, action) =>{
    switch(action.type){
        default:
            return [...state];
    }
}
export default menuTree;