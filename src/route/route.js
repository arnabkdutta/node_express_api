module.exports = (service, app) => {
    app.get('/', (req, res) => {
        res.send('Basic route is working');
    });

    app.post('/post_from_data', (req, res) => {
        console.log(req.file);
        res.send(req.body);
    });

    app.post('/upload', service.fileUpload().single('fileName'), (req, res, next) => {
        // res.send('Uploaded')
        console.log(req.file);
        res.send({
            msg : 'upload successfully'
        })
    })
}