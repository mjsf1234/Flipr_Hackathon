import mongoose from 'mongoose';

const restDbSchema = mongoose.Schema({
    name: String,
    password: String,
    items: [], // [{'burger': 29.5}, {'Roti': 52.1}]
    location: [] // [Latitude, Longitude]
})

export default mongoose.model('rests', restDbSchema);