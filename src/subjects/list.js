import Subject from './../models/Subject'

export default async (req, res) => {

  let subjects = []

  try {
    subjects = await Subject.find({}).populate('questions')
    return res.json({ subjects })
  } catch (error) {
    return res.status(500).json({ error })        
  }
}