const  express = require('express');
const app = express();
const userRouter = require('./router/users');
const restaurantRouter = require('./router/users')
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json({type:'*/*'});

app.use(jsonParser);

app.use('/users', userRouter);
app.listen(process.env.APP_PORT);



// (actions[currentElemIndex - 1]  === undefined
//     &&
//     myArr[arrayElemIndex - 1] === undefined)
// ||
// (actions[currentElemIndex - 1] === myArr[arrayElemIndex - 1]
//     &&
//     actions[currentElemIndex + 1] === myArr[arrayElemIndex + 1])
// ||
// (actions[currentElemIndex + 1] === undefined
//     &&
//     myArr[arrayElemIndex + 1] === undefined))
