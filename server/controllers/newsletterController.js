const Subscriber = require('../models/Subscriber');

exports.subscribeToNewsletter = async (req, res) => {
    try {
        const { email } = req.body;

        // Check if email already exists
        const existingUser = await Subscriber.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ success: false, message: "Email already subscribed" });
        }

        const newSubscriber = new Subscriber({ email });
        await newSubscriber.save();

        console.log("📧 New Subscriber:", email);
        res.status(201).json({ success: true, message: "Subscribed successfully!" });
    } catch (error) {
        console.error("Subscription Error:", error);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};
