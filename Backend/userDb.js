import mongoose from 'mongoose';

const userDbSchema = mongoose.Schema({
    name: String,
    password: String
})

export default mongoose.model('users', userDbSchema);