import App from "./App";
import PropTypes from 'prop-types';

const AppSSR = ({ bootStrapCSS = [], data = {} }) => {
    console.log('Rendering App component on server-side');
    return (
        <html>
        <head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>SSR React 18 example</title>
            {
                bootStrapCSS.map(cssPath => <link key={cssPath} rel="stylesheet" href={cssPath}></link>)
            }
        </head>
        <body>
        <div id="root">
            <App initialData={data} />
        </div>
        </body>
        </html>
    )
}

AppSSR.propTypes = {
    bootStrapCSS: PropTypes.arrayOf(PropTypes.string).isRequired,
    data: PropTypes.object.isRequired
}

export default AppSSR;
