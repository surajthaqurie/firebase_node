const { fcmController } = require("./fcm.controller");

const fmcRouter = (router) => {
  router.post("/notification", fcmController);

  return router;
};

module.exports = { fmcRouter };
