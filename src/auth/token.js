import jwt from 'jwt-simple'
import JwtConfig from './../auth/config'

import User from './../models/User'

export default async (req, res) => {

  let { email } = req.body
  let { password } = req.body

  try {

    let user = await User.findOne({ email })
    
    if ( ! user) {
      return res.status(404).json({ message: 'Unauthorized', token: '' })
    }

    user.validatePassword(password, (err, result) => {

      if ( ! result || err) {
        return res.status(404).json({ message: 'Unauthorized', token: '' })
      }

      let token = jwt.encode({ id: user._id }, JwtConfig.secretOrKey)

      return res.json({ message: 'authorized', token })
    })
  } catch (error) {
    return res.status(500).json({ error })
  }
}