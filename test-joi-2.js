import Joi from "joi";

// Joi 스키마를 정의합니다.
const schema = Joi.object({
  // name Key는 문자열 타입이고, 필수로 존재해야합니다.
  // 문자열은 이메일 형식에 맞아야합니다.
  email: Joi.string().email().required(),
});

// 검증할 데이터를 정의합니다.
const user = { email: "foo@example.com" };

// schema를 이용해 user 데이터를 검증합니다.
const validation = schema.validate(user);

// 검증 결과값 중 error가 존재한다면 에러 메시지를 출력합니다.
if (validation.error) {
  console.log(validation.error.message);
} else {
  // 검증 결과값 중 error가 존재하지 않는다면, 데이터가 유효하다는 메시지를 출력합니다.
  console.log("Valid Email User!");
}

// Valid Email User!가 터미널에 출력 됨
