import mongoose from 'mongoose';


const activeOrdersDbSchema = mongoose.Schema({
    name: String, // [[username, [burger, pizza], [2, 4], [amount1, amount2], [totalAmount]]]
    users: [{
        name: String,
        items: [],
        qty: [],
        amount: [],
        totalAmount: [],
        orderStatus: String
    }]
});

export default mongoose.model('activeOrders', activeOrdersDbSchema);