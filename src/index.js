const express = require('express'); // khởi tạo thư viện express
const morgan = require('morgan');
const path = require('path');
const handlebars = require('express-handlebars');
const route = require('./routes');
const app = express() ;// app như là 1 instance đại diện cho express
const port = 3001;
const db = require('./confix/db');


app.engine('hbs', handlebars.engine({
  extname: '.hbs'
}));
app.set('view engine','hbs');
app.set('views', path.join(__dirname,'resources\\views'));
app.use(morgan('combined'));
app.use(express.static(path.join(__dirname,'public')));

db.connect();

route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})