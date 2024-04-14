const express = require('express')
const app = express()

app.set('view engine', 'ejs')

const port = 8000;

const pageData = require('./mymodule');


app.use((req, res, next) => {
    console.log('Request Made')
    console.log(`Host: ${req.hostname}`)
    console.log(`Path: ${req.path}`)
    console.log(`Method: ${req.method}`)
    next()
})

app.get('/', (req, res) => {
    res.render('home', { homedata: pageData.homePageData });
});

app.get('/about', (req, res) => {
    res.render('about', { aboutdata: pageData.aboutPageData });
});

app.get('/portfolio', (req, res) => {
    res.render('portfolio', { portfoliodata: pageData.portfolioPageData });
});

app.get('/game', (req, res) => {
    res.render('game', { gamedata: pageData.gamePageData });
});

app.get('/2048', (req, res) => {
    res.render('2048');
});

app.get('/tictactoe', (req, res) => {
    res.render('tic-tac-toe');
});



app.get('/home', (req, res) => {
    res.redirect('/')
})

app.get('/aboutus', (req, res) => {
    res.redirect('/about')
})

app.use((req, res) => {
    res.render('error')
})

app.listen(port, () => {
    console.log(`Server is Running On Port ${port}`)
})