import calculateBmi from './bmiCalculator'
import express from 'express'
import calculateExercises from './exerciseCalculator'
const app = express()
app.use(express.json())

app.get('/', (_req: any, res: any) => {
  res.send('Hello Full Stack')
})
app.get('/bmi', (req: any, res: any) => {
  const height = Number(req.query.height)
  const weight = Number(req.query.weight)
  if (isNaN(height) || isNaN(weight)) {
    res.json({ error: 'malformatted parameters' })
  } else {
    const bmi = calculateBmi(height, weight)
    res.json({ weight, height, bmi })
  }
})
app.post('/exercises', (req: any, res: any) => {
  const { dailyExercises, target } = req.body
  if (!dailyExercises || !target) {
    res.json({ error: 'parameters missing' })
  } else if (!Array.isArray(dailyExercises) || !dailyExercises.every((h: number) => !isNaN(h)) || isNaN(target)) {
    res.json({ error: 'malformatted parameters' })
  } else {
    res.json(calculateExercises(dailyExercises, target))
  }
})
const PORT = 3002

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
