import auth from './auth/index'
import users from './users/index'
import subjects from './subjects/index'
import answers from './answers/index'

export default (app) => {
  app.use('/auth', auth)
  app.use('/users', users)
  app.use('/subjects', subjects)
  app.use('/answers', answers)
}