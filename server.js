const express = require("express");
const app = express();
const articleRouter = require("./routes/articles");
const mongoose =require('mongoose')


app.set("view engine", "ejs");
//datatbase connection
mongoose.connect('mongodb://127.0.0.1:27017/blog')
//now anything we create using articleRouter will be added after /articles
app.use("/articles", articleRouter);
app.use(express.urlencoded({extended: false}))
app.get("/", (req, res) => {
  const articles = [
    {
      title: "Test Article",
      createdAt: new Date(),
      description: "Test Description",
    },
    {
      title: "Test Article 2",
      createdAt: new Date(),
      description: "Test Description 2",
    },
  ];
  //provide the relative path for the index.ejs file
  res.render("articles/index.ejs", { articles });
});

app.listen(5001);
