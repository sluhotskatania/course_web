import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    manufacturer: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    volume: {
        type:Number,
        required: true,
        trim: true
    },
    composition:{
        type: String,
        require: true
    },
    price: {
        type: Number,
        trim: true,
        required: true,
    },
    image: {
        type:String,
        required: true,

    },
    cloudinaryPublicId: {
        type:String,
        required: true
    } 
}, {
    timestamps: true 
})

const Product = mongoose.model('Product', productSchema)

export default Product;