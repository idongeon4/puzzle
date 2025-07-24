exports.handler = async function(event) {
  // POST로 넘어온 데이터(사용자가 입력한 답)를 가져옵니다.
  const { userAnswer } = JSON.parse(event.body);

  // 진짜 정답. 이 부분은 절대로 밖에 노출되지 않습니다.
  const realAnswer = '82.2';

  // 정답이 맞는지 확인합니다.
  const isCorrect = (userAnswer === realAnswer);

  // 결과를 '맞음' 또는 '틀림'으로 알려줍니다.
  return {
    statusCode: 200,
    body: JSON.stringify({ correct: isCorrect })
  };
};
