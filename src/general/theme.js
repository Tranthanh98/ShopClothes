import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
    palette:{
        primary :{
            main:"#e0e0e0",
            light:"#eeeeee",
            dark:"#bdbdbd"
        },
        secondary:{
            main:"#00796b",
            light:"#009688",
            dark:"#00695c"
        },
        error:{
            main:"#f55a4e"
        },
        warning:{
            main:"#ffca28"
        },
        success:{main:"#4caf50"},
        info:{main:"#26a69a"}
    },
    MuiButton: {
        size: 'small',
    },
})
export default theme;