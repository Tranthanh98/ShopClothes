import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import { Box, Container, Grid } from '@material-ui/core'
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { selectMenu } from '../../actions/admin-menu.action'
import ProductPortfolio from '../../components/Admin/StoreManagement/ProductPortfolio'
import FullWidthTabs from '../../components/Common/FullWidthTabs'
import { Paths } from '../../routes'

const markdown = `A paragraph with *emphasis* and **strong importance**.

> A block quote with ~strikethrough~ and a URL: https://reactjs.org.

* Lists
* [ ] todo
* [x] done

A table:

| a | b |
| - | - |
`
const Test = ()=>{
    const [value, setValue]= useState("");
    const refShowContent = useRef();
    const _appendContent = (data)=>{
        var doc = refShowContent.current;
        doc.innerHTML  = data;
        console.log("doc:", doc);
    }
    return (
        <div>
            <Grid container>
                <Grid item xs>
                <CKEditor
                    editor={ ClassicEditor }
                    data={value}
                    onReady={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                        
                    } }
                    onBlur={ ( event, editor ) => {
                        const data = editor.getData();
                        _appendContent(data);
                        setValue(data);
                    } }
                    onFocus={ ( event, editor ) => {
                        console.log( 'Focus.', editor );
                    } }
                />
                </Grid>
                <Grid item xs>
                    {/* <div dangerouslySetInnerHTML={{__html: value}}></div> */}
                    <div ref={refShowContent}></div>
                    {/* <ReactMarkdown remarkPlugins={[gfm]}>{value}</ReactMarkdown> */}
                </Grid>
            </Grid>
        </div>
    )
}

const createTab = (label, content)=>{
    return {
        label,
        content
    }
}
function StoreManagement(props) {
    const tabsList = [
        createTab("Danh mục sản phẩm", <ProductPortfolio/>),
        createTab("Phân loại", <div>
            <Test/>
        </div>),
        createTab("Kích thước", <div>Kích thước</div>)

    ];
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(selectMenu({name:"Quản lý cửa hàng", path:Paths.storeManagement}));
    }, []);
    return (
        <Container disableGutters>
            <Box margin="8px">
                <FullWidthTabs
                    tabsList={tabsList}
                />
            </Box>
        </Container>
    )
}

StoreManagement.propTypes = {

}

export default StoreManagement;

