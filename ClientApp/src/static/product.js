import {Image} from "react-bootstrap";
import SkywardsInfiniteCard from "../assets/products/1.JPG";
import PersonalFinance from "../assets/products/2.JPG";
import KunoozSavings from "../assets/products/3.JPG";


export const product_data = {
    columns: ['id', 'name', 'description','created_at', 'logo'],
    rows: [
        {
            'id': '1',
            'name': "Skywards Infinite Card",
            'description':'Let your everyday spends take you closer to your next holiday.',
            'created_at': '2022-10-21',
            'logo': <Image src={SkywardsInfiniteCard}/>
        },
        {
            'id': '2',
            'name': "Personal Finance",
            'description':'Get more out of life with our Personal Finance.',
            'created_at': '2022-10-21',
            'logo': <Image src={PersonalFinance}/>
        },
        {
            'id': '3',
            'name': "Kunooz Savings",
            'description':' More prizes to win. More dreams to come true.',
            'created_at': '2022-10-21',
            'logo': <Image src={KunoozSavings}/>
        },

    ]
};
