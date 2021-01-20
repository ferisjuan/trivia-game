type Result = {
  category: String,
  type: String,
  difficulty: String,
  question: String,
  correct_answer: Boolean,
  incorrect_answers: String[]
}

type Trivia = {
  response_code: Number,
  results: Result[]
}
