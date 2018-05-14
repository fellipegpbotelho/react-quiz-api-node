import Question from './../models/Question'

export default async (req, res) => {
  try {
    let questions = await Question.find({}).populate('subject')
    return res.json({ questions })
  } catch (error) {
    return res.status(500).json({ error })        
  }
}