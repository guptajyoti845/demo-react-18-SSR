# React 18 SSR example using Pipeable Stream

In this example you can see that how you can render a React 18 application on server-side (node) application.
I'm using React 18's renderToPipeableStream function.
On the client-side we load a component with Suspense and on server-side suspense is working as well from React18.

You have to install the dependencies for the React application (ssr-client) and for main node application too.
Please use the 'npm run build:client' before running the server application!

**You can use the 'npm run start:server' command to start the node application which will render the react application on server-side and also send the rendered content to the browser where the builded static React application will run after hydrate happened.**



# Commands:

- start:client : starting the client application
- start:server : starting the server application
- build:client : building the client application to static files

