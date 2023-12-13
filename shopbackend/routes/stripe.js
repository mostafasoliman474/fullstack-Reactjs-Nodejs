const router = require("express").Router();
const key=process.env.STRIPE_KEY;
const stripe = require("stripe")('sk_test_51OIBXGGTHVRNZlBtI28Ps0UsUh6U1YBzvWodflPUzGrMXpSsG5SQjI6PfJqBFJAaRl902qmTjUFqyfxZsNMySMSV00Whd9fWfp');

router.post("/payment", (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        console.log(stripeErr)
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

module.exports = router;