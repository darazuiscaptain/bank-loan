import ApiAuthorzationRoutes from './components/api-authorization/ApiAuthorizationRoutes';
import {Counter} from "./components/Counter";
import {FetchData} from "./components/FetchData";
import {Home} from "./components/Home";
import HomeManagements from "./components/MangementAdding/homeManagements";
import functional from '../src/assets/functional.png';
import product from '../src/assets/product.png';
import offers from '../src/assets/offers.png';

const AppRoutes = [
    {
        index: true,
        element: <Home/>
    },
    {
        path: '/counter',
        element: <Counter/>
    },
    {
        path: '/fetch-data',
        requireAuth: true,
        element: <FetchData/>
    },
    {
        path: '/functions-managements',
        requireAuth: true,

        element: <HomeManagements header={"Functions management"} subheader={"add functional components " +
        "" +
        "as shown below"}
                                  subHeaderImage={functional}
        />
    },
    {
        path: '/product-managements',
        requireAuth: true,

        element: <HomeManagements header={"product management"} subheader={"add product components " +
        "" +
        "as shown below"}
                                  subHeaderImage={product}
        />
    },
    {
        path: '/offers-managements',
        requireAuth: true,

        element: <HomeManagements header={"offers management"} subheader={"add offers components " +
        "" +
        "as shown below"}
                                  subHeaderImage={offers}
        />
    },
    ...ApiAuthorzationRoutes
];

export default AppRoutes;
