interface Result {
  periodLength: number
  trainingDays: number
  success: boolean
  rating: number
  ratingDescription: string
  target: number
  average: number
}
const calculateExercises = (hours: number[], target: number): Result => {
  const periodLength = hours.length
  const trainingDays = hours.filter(h => h > 0).length
  const average = hours.reduce((acc, h) => acc + h, 0) / periodLength
  const success = average >= target
  const rating = average < target ? 1 : average === target ? 2 : 3
  const ratingDescription = rating === 1 ? "You didn't reach your target" : rating === 2 ? 'You reached your target' : 'You exceeded your target'
  return {
    periodLength,
    trainingDays,
    success,
    rating,
    ratingDescription,
    target,
    average
  }
}
const [target, ...hours] = process.argv.slice(2).map(Number)

const result = calculateExercises(hours, target)
console.log(result)
export default calculateExercises
