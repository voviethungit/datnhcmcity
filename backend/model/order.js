const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    cart:{
        type: Array,
        required: true,
    },
    shippingAddress:{
        type: Object,
        required: true,
    },
    user:{
        type: Object,
        required: true,
    },
    totalPrice:{
        type: Number,
        required: true,
    },
    status:{
        type: String,
        default: "Xử lý",
    },
    paymentInfo:{
        id:{
            type: String,
        },
        status: {
            type: String,
        },
        type:{
            type: String,
        },
    },
    paidAt:{
        type: Date,
        default: Date.now(),
    },
    deliveredAt: {
        type: Date,
    },
    createdAt:{
        type: Date,
        default: Date.now(),
    },
    statusPayment:{
        type: String,
        default: "0",
    },
});

module.exports = mongoose.model("Order", orderSchema);