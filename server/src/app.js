require('../db/config');

const express = require('express');
const cors = require('cors');

const courserouter = require('../src/routers/courserouter');

const loginrouter = require('../src/routers/Loginrouter');

const sliderrouter = require('../src/routers/Sliderrouter')

const teamrouter = require('../src/routers/Teamrouter');

const videorouter = require('../src/routers/Videorouter');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/Courseapi',courserouter);
app.use('/',loginrouter);
app.use('/Sliderapi',sliderrouter);
app.use('/Teamapi',teamrouter)
app.use('/Videosapi', videorouter);

const port = process.env.PORT  || 5000 ;

app.listen(port,()=>{

    console.log(`server is running on port ${port}`);

})
