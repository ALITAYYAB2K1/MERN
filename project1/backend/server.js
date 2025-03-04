import express from "express";
import cors from "cors";
const app = express();
app.use(cors());
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/api/jokes", (req, res) => {
  res.json(jokes);
});
const jokes = [
  {
    id: 1,
    title: "Why did the chicken cross the road?",
    content: "To get to the other side!",
  },
  {
    id: 2,
    title: "What do you call cheese that isn’t yours?",
    content: "Nacho cheese!",
  },
  {
    id: 3,
    title: "Why don’t skeletons fight each other?",
    content: "They don’t have the guts!",
  },
];
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
