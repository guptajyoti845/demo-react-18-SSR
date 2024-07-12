import React from "react";
import ReactDOMServer from "react-dom/server";
import path from "path";
import AppSSR from "./ssr-client/src/AppSSR";
import express from "express";
import fs from "fs";
import { delay } from "./ssr-client/src/utils"; // Import delay function

const app = express();
const port = 3009;

const bootstrapScripts = [];
const bootstrapCSS = [];
const staticPathRoot = "ssr-client/build/static";

// Simulate data fetching functions
const fetchDataForComponents = async () => {
    // Simulate data fetching with delays
    await delay(2000); // Simulate delay for all components
    return {
        cars: [
            { name: "Ferrari", details: "Fast and red" },
            { name: "Porsche", details: "Luxurious and powerful" },
            { name: "Lamborghini", details: "Stylish and fast" },
            { name: "Lexus", details: "Reliable and comfortable" }
        ]
    };
};

const ReadDirectoryContentToArray = (folderPath, array) => {
    fs.readdir(path.join(__dirname, folderPath), (err, files) => {
        if (err) {
            return console.log(`Unable to scan this folder: ${folderPath}`);
        }

        files.forEach((fileName) => {
            if (
                (fileName.startsWith("main.") && fileName.endsWith(".js")) ||
                fileName.endsWith(".css")
            ) {
                array.push(`${folderPath}/${fileName}`);
            }
        });
    });
};

ReadDirectoryContentToArray(`${staticPathRoot}/js`, bootstrapScripts);
ReadDirectoryContentToArray(`${staticPathRoot}/css`, bootstrapCSS);

app.get("/$", async (req, res) => {
    res.socket.on("error", (error) => console.log("Fatal error occurred", error));

    let didError = false;
    try {
        const data = await fetchDataForComponents();

        const html = ReactDOMServer.renderToString(
            <AppSSR bootStrapCSS={bootstrapCSS} data={data} />
        );

        res.statusCode = didError ? 500 : 200;
        res.setHeader("Content-type", "text/html");
        res.send(html);
    } catch (error) {
        didError = true;
        console.error("Error during SSR", error);
        res.statusCode = 500;
        res.send("Internal Server Error");
    }
});

app.use(
    "/ssr-client/build/static",
    express.static(__dirname + "/ssr-client/build/static")
);

app.listen(port, () => {
    console.log(`Application started on port ${port}`);
});
