const helloRoute = {
    path: '/hello',
    method: 'get',
    handler: (req, res) => {
        res.send('hello')
    }
};

export const routes = [
    helloRoute
];