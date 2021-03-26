import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import MailIcon from '@material-ui/icons/Mail';
import YouTubeIcon from '@material-ui/icons/YouTube';
import { makeStyles } from '@material-ui/styles';
import RoomIcon from '@material-ui/icons/Room';
import { useHistory } from 'react-router';
import { COMPANY, ADDRESS, POLICY, CONTACT } from './footer-content';

const useStyles = makeStyles({
    pointer: {
        cursor: "pointer",
        "&:hover": {
            color: "#337ab7"
        },
        display: "flex",
        alignItems: "center",
    }
})
export function ContentFooterHOC(content){
    const classes = useStyles();
    const history = useHistory();
    const _gotoLink = (link)=>{
        history.push(link);
    }
    return function (arrContent){
        return (
            <Grid item xs={12} md={3}>
                <Typography className={classes.pointer} variant="h6">{content}</Typography>
                {
                    arrContent.map((i, index)=>{
                        return <Typography key={index} onClick={()=>_gotoLink(i.link)} style={{marginLeft:4}} className={classes.pointer}>{i.name}</Typography>
                    })
                }
            </Grid>
        );
    }
}

function Footer(props) {
    const classes = useStyles();
    return (
        <Grid container>
            {
                ContentFooterHOC(COMPANY.title)(COMPANY.content)
            }
            {
                ContentFooterHOC(POLICY.title)(POLICY.content)
            }
            {
                ContentFooterHOC(CONTACT.title)(CONTACT.content)
            }
            {
                ContentFooterHOC(ADDRESS.title)(ADDRESS.content)
            }
        </Grid>
    )
}
export default Footer;