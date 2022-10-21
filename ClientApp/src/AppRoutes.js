import ApiAuthorzationRoutes from './components/api-authorization/ApiAuthorizationRoutes';
import {Counter} from "./components/Counter";
import {FetchData} from "./components/FetchData";
import {Home} from "./components/Home";
import HomeManagements from "./components/MangementAdding/homeManagements";
import {offers_data} from "./static/offers";
import {functional_data} from "./static/functional";
import {product_data} from "./static/product";


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
            // subHeaderImage={functional}
                                  data={functional_data}
        />
    },
    {
        path: '/product-managements',
        requireAuth: true,

        element: <HomeManagements header={"product management"} subheader={"add product components " +
        "" +
        "as shown below"}
            // subHeaderImage={product}
                                  data={product_data}
        />
    },
    {
        path: '/offers-managements',
        requireAuth: true,

        element: <HomeManagements header={"offers management"} subheader={"add offers components " +
        "" +
        "as shown below"}
            // subHeaderImage={offers}
                                  data={offers_data}
        />
    },
    ...ApiAuthorzationRoutes
];

export default AppRoutes;
