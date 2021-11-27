import mongoose from 'mongoose';


const activeOrdersDbSchema = mongoose.Schema({
    rstName: String, // [[username, [burger, pizza], [2, 4], [amount1, amount2], [totalAmount]]]
    users: [{
        username: String,
        items: [],
        totalAmount: String,
        orderStatus: String
    }]
});

export default mongoose.model('activeOrders', activeOrdersDbSchema);