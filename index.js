const express = require('express')
// const expressLayouts = require('express-ejs-layouts')
const cookie = require('cookie-parser')
const path = require('path')

const PORT = process.env.PORT || 3005
const app = express()
const mainRoute = require('./routes/mainRouter.js')

app.use(express.static(path.join(__dirname, 'public')))
// app.use(expressLayouts)
app.use('/', mainRoute)

// Set 'views' directory for any views being rendered by res.render()

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs')



app.listen(PORT, () => console.log(`App running on port ${PORT}`))