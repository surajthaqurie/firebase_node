const { sendNotification } = require("./fcm.server");

const fcmController = async (req, res, next) => {
  try {
    const { token, title, message } = req.body;
    if (!token || !title || !message) {
      return res.status(400).json({
        message: "Token and title and message is required",
      });
    }
    const response = await sendNotification(token, message, title);
    if (!response) {
      return res.status(400).json({
        message: "Unable to send notification",
      });
    }
    return res.status(200).json({
      message: "Notification send successfully",
      data: response,
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = { fcmController };
