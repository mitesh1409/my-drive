const requestLogger = (req, res, next) => {
    const startTime = Date.now();
    next();
    const timeTaken = Date.now() - startTime;

    console.log(`Request URL: ${req.url}`);
    console.log(`Request Method: ${req.method}`);
    console.log(`Status Code: ${res.statusCode}`);
    console.log(`Request Params: ${req.params}`);
    console.log(`Request Body: ${req.body}`);
    console.log(`Request Headers: ${req.headers}`);
    console.log(`Request Time Taken: ${timeTaken}`);
};

export {
    requestLogger
};
