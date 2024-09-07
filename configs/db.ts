// // config/db.ts
// const { default: mongoose } = require("mongoose");
//
// const connectToDB = async () => {
//     try {
//         if (mongoose.connections[0].readyState) {
//             return true;
//         } else {
//             await mongoose.connect("mongodb://localhost:27017/coffe");
//             console.log("Connect To DB Successfully :))");
//         }
//     } catch (err) {
//         console.log("DB Connection Has Error =>", err);
//     }
// };
//
// export default connectToDB;

const { default: mongoose } = require("mongoose");

const connectToDB = async () => {
    try {
        // استفاده از connection string از متغیر محیطی
        // const mongoURI = process.env.MONGODB_URI || "mongodb://localhost:27017/coffe";
        const mongoURI = process.env.MONGODB_URI || "mongodb+srv://taher:taher@cluster0.05owt1n.mongodb.net/coffe?retryWrites=true&w=majority&appName=Cluster0";



        // اگر اتصال برقرار بود، برگرد
        if (mongoose.connections[0].readyState) {
            return true;
        } else {
            // اتصال به MongoDB با استفاده از URI از محیط
            await mongoose.connect(mongoURI, {
                useNewUrlParser: true,
                useUnifiedTopology: true
            });
            console.log("Connected To DB Successfully :))");
        }
    } catch (err) {
        console.log("DB Connection Has Error =>", err);
    }
};

export default connectToDB;
