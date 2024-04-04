import app from './app'

app.listen(3333, () => console.log('Server is running here: https:/localhost:3000'));
app.get("/", (req, res) => {
    res.send("status: active")
})