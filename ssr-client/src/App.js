import "./App.css";
import {Suspense, lazy} from "react";
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const CarsComponent = lazy(() =>
    delay(10000).then(() => import("./Cars.js" /* webpackPrefetch: true */))
);

const HeadersComponent = lazy(() =>
    delay(1000).then(() => import("./Header.js" /* webpackPrefetch: true */))
);


const LoadingScreen = () => {
    return <div>Loading Cars...</div>
}

const LoadingHeaderScreen = () => {
    return <div>Loading Header...</div>
}

function App() {
    return (
        <>
            <Suspense fallback={<LoadingHeaderScreen/>}>
                <HeadersComponent/>
            </Suspense>

            <Suspense fallback={<LoadingScreen/>}>
                <CarsComponent/>
            </Suspense>

        </>
    );
}

export default App;
