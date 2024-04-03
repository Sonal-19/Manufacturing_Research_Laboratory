const nodemailer = require("nodemailer");
require("dotenv").config();

const transport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

const isCorrectEmail = (email) => {
  const regrex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]/;
  return regrex.test(email);
};

const correctMessageLength = (message) => {
  return message.length > 15 ? true : false;
};

const isCorrectMobile = (mobile) => {
  const regrex = /[0-10]/;
  return regrex.test(mobile) && mobile.length === 10 ? true : false;
};

const handleUserMessage = async (req, res) => {
  try {
    const { name, email, mobile, message } = req.body;

    if (!name || !email || !mobile || !message) {
      return res.status(422).json({
        success: false,
        message: "Please fill all the fields",
      });
    }

    if (!isCorrectEmail(email)) {
      return res.status(422).json({
        success: false,
        message: "Entered email is not valid",
      });
    }

    if (!isCorrectMobile(mobile)) {
      return res.status(422).json({
        success: false,
        message: "Entered mobile number is not valid",
      });
    }

    if (!correctMessageLength(message)) {
      return res.status(422).json({
        success: false,
        message: "Message is too sort. Please enter a valid query.",
      });
    }

    const alertMessage = {
      from: email,
      to: process.env.EMAIL,
      subject: `New Message from Client - ${name}`,
      text: `
      Name of sender : ${name}
      Email of sender : ${email}
      Mobile of sender : [${mobile}]
      Message : ${message}
      `,
    };

    await transport.sendMail(alertMessage);

    res.status(200).json({
      success: true,
      message: "Message sent Successfully",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: `Error occured in sending message ${error}`,
    });
  }
};

module.exports = {
  handleUserMessage,
};
