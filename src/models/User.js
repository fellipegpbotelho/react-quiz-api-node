import mongoose from 'mongoose'
import bcrypt from 'bcrypt-nodejs'

require('mongoose-type-email')

const User = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: mongoose.SchemaTypes.Email,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  active: {
    type: Boolean,
    default: true
  }
})

User.methods.hashPassword = function (password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
}

User.methods.validatePassword = function (password, cb) {
  return bcrypt.compare(password, this.password, cb)
}

export default mongoose.model('User', User)