const calculateBmi = (altura: number, peso: number): string => {
  const bmi = peso / Math.pow(altura / 100, 2)
  if (bmi < 18.5) {
    return 'Underweight'
  } else if (bmi < 25) {
    return 'Normal (healthy weight)'
  } else if (bmi < 30) {
    return 'Overweight'
  } else {
    return 'Obese'
  }
}
const [weight, height] = process.argv.slice(2).map(Number)

const bmi = calculateBmi(height, weight)
console.log(`Your BMI is ${bmi}`)

export default calculateBmi
