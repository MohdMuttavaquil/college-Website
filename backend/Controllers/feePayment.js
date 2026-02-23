import { paymentModel } from "../Modles/studentFee.js"
import Razorpay from 'razorpay'
import crypto from "crypto"
import PDFDocument from "pdfkit"

const feeTable = (a) => {

    let fee = 0

    switch (a) {
        case 'Nursery': fee = 3000; break
        case 'LKG': fee = 3000; break
        case 'UKG': fee = 3000; break
        case '1': fee = 3300; break
        case '2': fee = 3300; break
        case '3': fee = 3600; break
        case '4': fee = 3600; break
        case '5': fee = 4200; break
        case '6': fee = 4200; break
        case '7': fee = 5400; break
        case '8': fee = 5400; break
        case '9': fee = 5000; break
        case '10': fee = 5000; break
        case '11': fee = 6000; break
        case '12': fee = 6000; break
    }
    return fee
}

const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET
});

let id;

// Online fee payment
const onlinePay = async (req, res) => {

    const amount = feeTable(req.body.info.className)
    const info = req.body.info

    const payment = new paymentModel({
        studentName: info.studentName,
        rollNo: info.rollNo,
        className: info.className,
        phoneNo: info.phoneNo,
        amount: amount
    })
    const newPay = await payment.save()
    id = newPay._id

    const options = {
        amount: amount * 100,
        currency: "INR",
        receipt: 'receipt_order_' + Date.now(),
    };

    try {
        const order = await razorpay.orders.create(options);
        res.json(order);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to create order' });
    }
}

// Verify online payment
const verifyPayment = async (req, res) => {

    const { order_id, payment_id, signature } = req.body

    const sign = order_id + "|" + payment_id;
    const expectedSignature = crypto
        .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
        .update(sign)
        .digest("hex");

    if (expectedSignature === signature) {

        await paymentModel.findByIdAndUpdate(id, { payment: true })
        res.json({ success: true, message: "payment verification successfull" });

    } else {
        res.json({ success: false, message: "Payment verification failed" });
    }

}

// fee Payment recipt
const payReceipt = async (req, res) => {

    const info = await paymentModel.findById(id)
    const { amount, studentName, className, rollNo } = info

    const doc = new PDFDocument({ margin: 50 })
    doc.pipe(res);

    res.setHeader("Content-Type", "application/pdf")
    res.setHeader("Content-Disposition", "attachment; filename=receipt.pdf")

    doc.fontSize(20).text(`Durge Modren Inter College`, { align: "center" })
    doc.fontSize(16).text("Payment Receipt", { align: "center", margin: "1rem 0 0 0" })
    doc.moveDown()

    doc.fontSize(12).text(`Student Name: ${studentName}`)
    doc.text(`Class:  ${className}`)
    doc.text(`Roll Number:  ${rollNo}`)
    doc.text(`Fee Amount: ${amount}  INR`)
    doc.text(`Payment Status: SUCCESS`)
    doc.text(`Date: ${new Date().toLocaleString()}`)
    
    doc.moveDown();

    doc.fontSize(10).text("Thank you for your payment!", { align: "center" });

    doc.end();

}



export { onlinePay, verifyPayment, payReceipt }