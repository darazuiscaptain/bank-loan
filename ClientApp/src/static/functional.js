import {Image} from "react-bootstrap";
import accounts from "../assets/functional/1.JPG";
import Cards from "../assets/functional/2.JPG";
import Finance from "../assets/functional/3.JPG";
import PriorityBanking from "../assets/functional/4.JPG";
import EmaratiFirst from "../assets/functional/5.JPG";
import Innovation from "../assets/functional/6.JPG";

export const functional_data = {
    columns: ['id', 'name', 'created_at', 'logo'],
    rows: [
        {
            'id': '1',
            'name': "Accounts",
            'created_at': '2022-10-21',
            'logo': <Image src={accounts}/>
        },
        {
            'id': '2',
            'name': "Cards",
            'created_at': '2022-10-21',
            'logo': <Image src={Cards}/>
        },
        {
            'id': '3',
            'name': "Finance",
            'created_at': '2022-10-21',
            'logo': <Image src={Finance}/>
        },
        {
            'id': '4',
            'name': "PriorityBanking",
            'created_at': '2022-10-21',
            'logo': <Image src={PriorityBanking}/>
        },
        {
            'id': '5',
            'name': "EmaratiFirst",
            'created_at': '2022-10-21',
            'logo': <Image src={EmaratiFirst}/>
        },
        {
            'id': '6',
            'name': "Innovation",
            'created_at': '2022-10-21',
            'logo': <Image src={Innovation}/>
        },
    ]
};
