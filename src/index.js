import "babel-polyfill";
import express from "express";
import renderer from "./helper/renderer";
import createStore from "./helper/createStore";
import { matchRoutes } from "react-router-config";
import Routes from "./client/Routes";
const app = express();
app.use(express.static("public"));
app.get("*", (req, res) => {
  const store = createStore();

  // console.log(matchRoutes(Routes, req.path));
  const promises = matchRoutes(Routes, req.path).map(({ route }) => {
    return route.loadData ? route.loadData(store) : null;
  });
  // Logic initialize and load data into the store
  Promise.all(promises).then(() => {
    res.send(renderer(req, store));
  });
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
