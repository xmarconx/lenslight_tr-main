import mongoose from 'mongoose';

const conn = () => {
    mongoose
        .connect("mongodb+srv://root:3,14159265.i7A@cluster0.ardbzrh.mongodb.net/?retryWrites=true&w=majority", {
            dbName: 'lenslight_tr',
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => {
            console.log('Connected to the DB succesully');
        })
        .catch((err) => {
            console.log(`DB connection err:, ${err}`);
        });
};

export default conn;