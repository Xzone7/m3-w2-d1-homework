var stats = [
  {
    city: "San Juan",
    zip: "00926",
    state: "PR",
    income: "34781",
    age: "44",
  },
  {
    city: "Corona",
    zip: "11368",
    state: "NY",
    income: "50797",
    age: "32",
  },
  {
    city: "Chicago",
    zip: "60629",
    state: "IL",
    income: "42019",
    age: "31",
  },
  {
    city: "El Paso",
    zip: "79936",
    state: "TX",
    income: "54692",
    age: "31",
  },
  {
    city: "Los Angeles",
    zip: "90011",
    state: "CA",
    income: "36954",
    age: "28",
  },
  {
    city: "Norwalk",
    zip: "90650",
    state: "CA",
    income: "66453",
    age: "35",
  },
];

const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017";

MongoClient.connect(
  url,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, db) => {
    if (err) throw err;
    console.log("DB connect success");
    const dbo = db.db("statsdb");
    console.log("DB-statsdb create success");
    // dbo.createCollection("uscensus", (err, res) => {
    //   if (err) throw err;
    //   console.log("Collection-uscensus created!");
    //   db.close();
    // })
    // dbo.collection("uscensus").insertMany(stats, (err, res) => {
    //   if (err) throw err;
    //   console.log("Number of documents inserted: " + res.insertedCount);
    //   db.close();
    // });
    // const newRecords = [
    //   {
    //     city: "Pacoima",
    //     zip: "91331",
    //     state: "CA",
    //     income: "60360",
    //     age: "33",
    //   },
    //   {
    //     city: "Ketchikan",
    //     zip: "99950",
    //     state: "AK",
    //     income: "00000",
    //     age: "00",
    //   },
    // ];
    // dbo.collection("uscensus").insertMany(newRecords, (err, res) => {
    //   if (err) throw err;
    //   console.log("Number of documents inserted: " + res.insertedCount);
    //   db.close();
    // });
    // dbo.collection("uscensus").findOne({ city: "Corona", state: "NY" }, (err, res) => {
    //     if (err) throw err;
    //     console.log(`zip code for Corona, NY is: ${res.zip}`);
    //     db.close();
    // });
    // dbo
    //   .collection("uscensus")
    //   .find({ state: "CA" })
    //   .toArray()
    //   .then(res => {
    //     res.forEach(ele => {
    //         console.log(`Income of city ${ele.city}, ${ele.state} is: ${ele.income}`);
    //     });
    //     db.close();
    //   })
    //   .catch((err) => {
    //     throw err;
    //   });
    // dbo
    //   .collection("uscensus")
    //   .updateOne(
    //     { state: "AK" },
    //     { $set: { income: "38910", age: "46" } },
    //     (err, res) => {
    //         if (err) throw err;
    //         console.log("Update success: ", res);
    //         db.close();
    //     }
    //   );
    dbo
      .collection("uscensus")
      .find()
      .sort({ state: 1 })
      .toArray((err, res) => {
        if (err) throw err;
        console.log(res);
        db.close();
      });
  }
);
