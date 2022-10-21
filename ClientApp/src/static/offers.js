import {Image} from "react-bootstrap";
import offers_dummy from "../assets/offers/1.JPG";

export const offers_data = {
    columns: ['id', 'name', 'description', 'created_at', 'logo'],
    rows: [{
        'id': '1',
        'name': "refer a friend",
        'description': 'As an Islamic bank, we have always been transparent in all our dealings with our customers.\n' +
            '\n' +
            'In our Consumer Education and Awareness section, you will get updates on Key Facts related to our products, schedule of charges, Shariah concepts, security and fraud awareness as well as articles on managing your finances better.',
        'created_at': 2022-10-21,
        'logo': <Image src={offers_dummy}/>
    },]
};
