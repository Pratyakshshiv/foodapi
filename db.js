const mongoose = require('mongoose');
const dotenv = require('dotenv')
dotenv.config()

const mongoDB = async () => {
    await mongoose.connect(process.env.mongoURI, { useNewUrlParser: true }, async (err, res) => {
        if (err) console.log(err);
        else {
            console.log("connected successfully");
            const fetched_data = await mongoose.connection.db.collection("food-items")
            fetched_data.find({}).toArray(async function (err, data) {
                const foodCategory = await mongoose.connection.db.collection("foodCategory")
                foodCategory.find({}).toArray(function (err, catData) {
                    if (err) console.log(err);
                    else {
                        global.food_items = data;
                        global.foodCategory = catData;
                    }
                })
                // if (err) console.log(err);
                // else {
                //     global.food_items = data;
                // }
            })
        }
    });
}
module.exports = mongoDB

