require('../db/config');

const express = require('express');
// const cors = require('cors');
const allRoutes = express.Router();
const courserouter = require('../src/routers/courserouter');

const loginrouter = require('../src/routers/Loginrouter');

const sliderrouter = require('../src/routers/Sliderrouter')

const teamrouter = require('../src/routers/Teamrouter');

const videorouter = require('../src/routers/Videorouter');

// const app = express();
// app.use(express.json());
// app.use(cors());

allRoutes.use('/Courseapi',courserouter);
allRoutes.use('/',loginrouter);
allRoutes.use('/Sliderapi',sliderrouter);
allRoutes.use('/Teamapi',teamrouter)
allRoutes.use('/Videosapi', videorouter);

module.exports = allRoutes;
