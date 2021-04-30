import { Box, Button, Card, CardContent, Container, Grid, makeStyles, MenuItem, TextField, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { selectMenu } from '../../actions/admin-menu.action';
import DescriptionList from '../../components/Admin/DescriptionList';
import GetMainImage from '../../components/Admin/GetMainImage';
import InputFile from '../../general/ConmmonComponent/InputFile';
import { useInputText } from '../../general/CustomHook';
import * as httpClient from '../../general/HttpClient';
import SizeQuantityList from '../../components/Admin/SizeQuantityList';
const useStyle = makeStyles({
    fullWidthSelect: {
        width: "100%"
    },
})

function HOCForm(title) {
    return function (component) {
        return (
            <Box margin="16px">
                <Grid container>
                    <Grid item xs={3}>
                        <Box fontWeight="bold">{title} :</Box>
                    </Grid>
                    <Grid item xs={9}>
                        {component}
                    </Grid>
                </Grid>
            </Box>
        )
    }
}


// const types = [
//     {
//         label: "áo",
//         value: 1
//     },
//     {
//         label: "quần",
//         value: 2
//     }
// ]
// const sizes = [
//     {
//         label: "XS",
//         value: 1
//     },
//     {
//         label: "S",
//         value: 2
//     },
//     {
//         label: "M",
//         value: 3
//     }
// ]
function CreateProduct(props) {
    const classes = useStyle();
    const [descriptionList, setDescription] = useState([]);
    const [file, setFile] = useState({
        file: null,
        url: ""
    });
    const [sizeList, setSizeList] = useState([]);
    const [sizes, setSizes] = useState([{value : 0, label:"Không có size nào!"}]);
    const [types, setTypes] = useState(["Không có loại nào!"]);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(selectMenu({ name: "Thêm sản phẩm mới", path: "/admin/create-product" }));
        async function GetDefaultData() {
            let response = await httpClient.sendGet("/product/GetDefaultDataForCreate");
            if (response.data.isSuccess) {
                setSizes(response.data.data.sizeOptions);
                setTypes(response.data.data.typeOpotions)
            }
        }
        GetDefaultData();
    }, []);
    const description = useInputText("");
    const _addDescription = () => {
        let cloneDes = [...descriptionList];
        cloneDes.push({ title: description.value });

        setDescription(cloneDes);
        description.setValue("");

    }
    const _removeDescription = (des) => {
        let cloneDes = [...descriptionList];
        let index = cloneDes.findIndex(i => i == des);
        cloneDes.splice(index, 1);
        setDescription(cloneDes);
    }
    const _removeSize = (size) => {
        let cloneDes = [...sizeList];
        let index = cloneDes.findIndex(i => i == size);
        cloneDes.splice(index, 1);
        setSizeList(cloneDes);
    }
    const _getFile = (file, urlFile) => {
        setFile({
            file: file,
            url: urlFile[0]
        });
    }
    const [imgList, setImgList] = useState([]);

    const _getMultipleFile = (file, urlFile) => {
        let cloneState = [...imgList];
        cloneState.push({ file, url: urlFile[0] });
        setImgList(cloneState);
    }
    const name = useInputText("");
    const price = useInputText(0, null, true);
    const typeId = useInputText("");
    const sizeId = useInputText("");
    const quantity = useInputText(0, null, true);
    const _addSize = () => {
        let cloneSizes = [...sizeList];
        cloneSizes.push({ sizeId: sizeId.value, quantity: parseInt(quantity.value), sizeName: sizes.find(i => i.value == sizeId.value).label });
        setSizeList(cloneSizes);
        sizeId.setValue("");
        quantity.setValue(0);
    }
    const _createProduct = async () => {
        let postModel = {
            product: {
                name: name.value,
                price: parseInt(price.value),
                description: descriptionList,
                typeId: typeId.value,
                ProductSizes: sizeList.map(i => { return { ...i, sizeName: undefined } }),
                TitleImageId: file.file.id,
                ImageIdList: imgList.map(i => i.file.id)
            }
        }
        let response = await httpClient.sendPost("/product/CreateNewProduct", postModel);
        console.log("response:", response);
    }
    return (
        <Container disableGutters={true}>
            <Box marginBottom="16px" display="flex" justifyContent="space-between">
                <Box fontSize="25px" fontWeight="bold">Nhập thông tin sản phẩm:</Box>
            </Box>
            <Grid container spacing={1}>
                <Grid item sm={12} md={6}>
                    <Card>
                        <CardContent>
                            {HOCForm("Tên sản phẩm")(
                                <TextField {...name} placeholder="Nhập tên sản phẩm" fullWidth variant="outlined" />
                            )}
                            {HOCForm("Mô tả")(
                                <Box>
                                    <TextField multiline
                                        placeholder="Mô tả"
                                        {...description}
                                        rows={4} fullWidth variant="outlined" />
                                    <Box display="flex" justifyContent="flex-end" margin="8px">
                                        <Button onClick={_addDescription} variant="outlined">Thêm mô tả</Button>
                                    </Box>
                                </Box>
                            )}
                            {HOCForm("Giá")(
                                <TextField {...price} placeholder="Giá bán" fullWidth variant="outlined" />
                            )}
                            {HOCForm("Loại")(
                                <TextField
                                    select
                                    {...typeId}
                                    fullWidth
                                    placeholder="Loại sản phẩm"
                                    variant="outlined"
                                >
                                    {types.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            )}
                            {HOCForm("Kích thước")(
                                <Box display="flex">
                                    <TextField
                                        select
                                        {...sizeId}
                                        fullWidth
                                        placeholder="Kích thước"
                                        variant="outlined"
                                    >
                                        {sizes.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                    <Box margin="0 4px"></Box>

                                    <TextField {...quantity} label="Số lượng" fullWidth variant="outlined" />

                                    <Box margin="0 4px"></Box>
                                    <Button onClick={_addSize}>Thêm</Button>
                                </Box>
                            )}
                        </CardContent>
                    </Card>

                </Grid>
                <Grid item sm={12} md={6}>
                    <Card>
                        <CardContent>
                            <Box borderBottom="1px solid gray">
                                <DescriptionList remove={_removeDescription} descriptionList={descriptionList} />
                            </Box>
                            <Box borderBottom="1px solid gray">
                                <SizeQuantityList remove={_removeSize} sizeList={sizeList} />
                            </Box>
                            <Box display="flex" margin="8px 0" borderBottom="1px solid gray">
                                <GetMainImage
                                    file={file}
                                    getFile={_getFile}
                                    setFile={setFile}
                                />
                            </Box>
                            <Box margin="8px 0">
                                <Box>
                                    <Box fontWeight="bold">Thêm hình ảnh mô tả:</Box>
                                    <InputFile title="Tải thêm ảnh lên" getFile={_getMultipleFile} />
                                </Box>
                                <Box width="100%">
                                    {
                                        imgList.map((img, index) => {
                                            return (
                                                <Box width="100px" height="100px" key={index} margin="0 4px" display="inline-block">
                                                    <img style={{ maxWidth: "100%", maxHeight: "100%" }} src={img.url} />
                                                </Box>
                                            )
                                        })
                                    }
                                </Box>
                            </Box>
                        </CardContent>
                    </Card>
                    {/* <Box padding="8px" height="100%" border="1px solid gray" borderRadius="8px">
                        
                    </Box> */}
                </Grid>
            </Grid>
            <Box display="flex" justifyContent="flex-end" margin="8px">
                <Button onClick={_createProduct} variant="contained" color="primary">Thêm sản phẩm</Button>
            </Box>
        </Container>
    )
}
export default CreateProduct;