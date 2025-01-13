const { admin } = require("./fcm.util");

const sendNotification = async (token, body, title) => {
  try {
    const messaging = admin.messaging();

    const message = {
      notification: { title, body },
      token,
      // tokens: [],
    };

    // Send notification
    const response = await messaging.send(message); //sendMulticast(message);
    return response;
  } catch (error) {
    throw error;
  }
};

module.exports = { sendNotification };
