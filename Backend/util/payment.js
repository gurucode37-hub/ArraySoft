import Razorpay from "razorpay";

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

export const paymentLogic = async (req, res) => {
    const options = {
    amount: req.body.amount * 100,
    currency: "INR",
  };

  const order = await razorpay.orders.create(options);
  res.json(order);
}