import "babel-polyfill";
import express from "express";
import renderer from './helper/renderer'
import createStore from './helper/createStore'
const app = express();
app.use(express.static("public"));
app.get("*", (req, res) => {
  const store = createStore();
  // Logic initialize and load data into the store
  res.send( renderer(req,store));
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
