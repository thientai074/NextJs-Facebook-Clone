import mongoose from 'mongoose'

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/FacebookClone', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('Ket noi Database thanh cong !!!!')
    } catch (error) {
        console.log(error)
    }
}

export default connectDB