import Subject from '../models/Subject'

export default (req, res) => {
  
  let subject = new Subject(req.body)

  subject
    .save()
    .then((subject) => {
      return res
            .status(201)
            .json({ subject })
    })
    .catch((error) => {
      return res
        .status(500).end()
    })
}