//calls server every 14 min to prevent server from going to sleep
const cron = require("cron");
require("dotenv").config();

const serverURL = process.env.serverURL;

const job = new cron.CronJob("*/14 * * * *", function () {
  console.log("restarting server...");

  fetch(`${serverURL}/campgrounds`)
    .then((response) => {
      if (response.ok) {
        console.log("server restarted");
      } else {
        throw new Error("error in restarting server:" + response.statusText);
      }
    })
    .catch((error) => {
      console.error("error with restarting server:", error);
    });
});

module.exports = job;
