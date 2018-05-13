import Subject from './../models/Subject'

export default (req, res) => {
  let subjects = Subject
    .find({})
    .then((subjects) => {
      return res.json({ subjects })
    })
    .catch((error) => {
      return res
        .status(500).end()
    })
}