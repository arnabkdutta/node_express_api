module.exports = ({ }, app) => {
    app.get('/', (req, res) => {
        res.send('Basic route is working');
    });

    app.post('/post_from_data', (req, res) => {
        console.log(req.body);
        res.send(req.body);
    });
}