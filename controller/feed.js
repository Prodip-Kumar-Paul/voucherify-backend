require("dotenv");
const { validationResult } = require("express-validator");
const voucherifyClient = require("voucherify");

const client = voucherifyClient({
  applicationId: process.env.APPLICATION_ID,
  clientSecretKey: process.env.CLIENT_SECRET_KEY,
});

exports.getForm = async (req, res, next) => {
  try {
    const voucher = {
      type: "DISCOUNT_VOUCHER",
      discount: {
        percent_off: "10.0",
        type: "PERCENT",
      },
      redemption: {
        quantity: "1",
      },
      category: "New Customers",
    };
    const newVoucher = await client.vouchers.create(voucher);
    console.log(newVoucher.code);
    res.status(200).json({
      message: "success",
      code: newVoucher.code,
    });
  } catch (err) {
    next(err);
  }
};
