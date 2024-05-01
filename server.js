const express = require("express");
const app = express();
const articleRouter = require("./routes/articles");

//now anything we create using articleRouter will be added after /articles
app.use("/articles", articleRouter);

app.set("view engine", "ejs");
app.get("/", (req, res) => {
  const articles = [
    {
      title: "Test Article",
      createdAt: new Date(),
      description: "Test Description",
    },{
        title: "Test Article 2",
        createdAt: new Date(),
        description: "Test Description 2",
      }
  ];
  //provide the relative path for the index.ejs file
  res.render("articles/index.ejs", { articles });
});

app.listen(5001);
