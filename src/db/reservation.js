// reservation model
import { Schema as _Schema, model } from 'mongoose';
var Schema = _Schema;

var reservationSchema = new Schema({
    name: String,
    email: String,
    phone: String,
    date: {
        type: Date,
        required: false
    },
    file: {
        type: Buffer,
        required: false
    },
    message: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

export default model('Reservation', reservationSchema);