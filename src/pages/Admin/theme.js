import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
    palette:{
        primary :{
            main:"#cccccc",
            light:"#e0e0e0",
            dark:"#757575"
        },
        secondary:{
            main:"#425469",
            light:"#789ab545",
            dark:"#223442"
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