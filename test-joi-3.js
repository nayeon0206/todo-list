import Joi from "joi";

// Joi 스키마를 정의합니다.
const schema = Joi.object({
  // name Key는 문자열 타입이고, 필수로 존재해야합니다.
  // 문자열은 최소 3글자, 최대 30글자로 정의합니다.
  name: Joi.string().min(3).max(30).required(),
});

// 검증할 데이터를 정의합니다.
const user = { name: "Foo Bar" };

const validation = schema.validate(user);
console.log(validation);
// 에러발생으로 출력시 밑의 내용처럼 뜬다.
// {
//   value: { name: 'BB' },
//   error: [Error [ValidationError]: "name" length must be at least 3 characters long] {
//     _original: { name: 'BB' },
//     details: [ [Object] ]
//   }
// }

// 정상적으로 출력 시 이렇게 뜬다.
// { value: { name: 'Foo Bar' } }

// try {
//   // schema를 이용해 user 데이터를 검증합니다.
//   const validation = await schema.validateAsync(user);
//   // 유효성 검증을 하기 위해 사용하는 메서드validate()를 validateAsync()로 사용해 데이터를 비동기적으로 검증
//   // 검증 결과값 중 error가 존재하지 않는다면, 데이터가 유효하다는 메시지를 출력합니다.
//   console.log('Valid Data!');
// } catch (error) {
//   // 검증에 실패한다면, 에러 메시지를 출력합니다.
//   console.log(error.message);
// }
// 에러가 발생하여 서버가 종료되는 것을 방지하기 위해 try / catch 구문을 사용

// 검증성공하여 Valid Data! 가 터미널에 출력 됨

// 에러가 발생하여 에러 메시지가 출력
// "name" length must be at least 3 characters long
