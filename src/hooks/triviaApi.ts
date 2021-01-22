import useSWR from "swr"

export function useTriviaApi<Data = unknown, isValidating = unknown>() {
  const { data, isValidating } = useSWR('https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean')

  const trivias: Trivia = data

  return { trivias, isLoading: isValidating }
}
