import User from './../models/User'

export default async (req, res) => {

  let users = []

  try {
    users = await User.find({})
    return res.json({ users })
  } catch (error) {
    return res.status(500).json({ error })
  }
}