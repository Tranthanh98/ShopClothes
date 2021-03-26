import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import MailIcon from '@material-ui/icons/Mail';
import YouTubeIcon from '@material-ui/icons/YouTube';
import RoomIcon from '@material-ui/icons/Room';
import React from 'react';

export const COMPANY = {
    title: "Công ty",
    content: [
        {
            name: "Tuyển dụng",
            link: "*"
        },
        {
            name: "Hệ thống cửa hàng",
            link: "*"
        },
        {
            name: "Chăm sóc khách hàng",
            link: "*"
        },
    ]
}
export const POLICY = {
    title: "Chính sách khách hàng",
    content: [
        {
            name: "Khách hàng thân thiết",
            link: "*"
        },
        {
            name: "Chính sách đổi trả",
            link: "*"
        },
        {
            name: "Chính sách bảo hành",
            link: "*"
        },
    ]
};
export const CONTACT = {
    title: "Kết nối",
    content: [
        {
            name: <><FacebookIcon color="primary"/> Facebook</>,
            link: "*"
        },
        {
            name: <><InstagramIcon color="error"/> Instagram</>,
            link: "*"
        },
        {
            name: <><MailIcon /> Email</>,
            link: "*"
        },
        {
            name: <> <YouTubeIcon color="error"/> Youtube</>,
            link: "*"
        },
    ]
};

export const ADDRESS = {
    title: "Thông tin cửa hàng",
    content: [
        {
            name: <><RoomIcon /> 103 Sư Vạn Hạnh</>,
            link: "*"
        },
        {
            name: <><RoomIcon /> 408 Điện Biên Phủ</>,
            link: "*"
        },
        {
            name: <><RoomIcon /> 601 Hai Bà Trưng</>,
            link: "*"
        },
    ]
};
