import express from "express";

const app = express();
const PORT = 3000;

app.use((req, res, next) => {
  console.log("첫번째 미들웨어");
  next();
});

app.use((req, res, next) => {
  console.log("두번째 미들웨어");
  next();
});

app.get("/", (req, res, next) => {
  console.log("GET / 요청이 발생했습니다.");
  next();
});

app.use((req, res, next) => {
  console.log("세번째 미들웨어");
  res.json({ message: "Hi" }); //Response
  //   next(); // Response가 한번 더 실행되었기 때문에 에러가 발생
});

app.use((req, res, next) => {
  console.log("네번째 미들웨어");
  res.json({ message: "마지막 미들웨어 입니다." }); // response -> 에러발생
});

app.listen(PORT, () => {
  console.log(PORT, "포트로 서버가 열렸어요!");
});

// 첫번째 미들웨어
// 두번째 미들웨어
// GET / 요청이 발생했습니다.
// 세번째 미들웨어
// 첫번째 미들웨어
// 두번째 미들웨어
// 세번째 미들웨어
// 로 터미널에 실행 됨
