import useSWR from "swr"

export function useTriviaApi<Data = unknown>() {
  const { data } = useSWR('https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean')

  const trivias: Trivia[] = data

  return { trivias }
}
