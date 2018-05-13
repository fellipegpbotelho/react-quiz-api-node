import Subject from './../models/Subject'

export default (req, res) => {
  Subject
    .findByIdAndRemove(req.params.id)
    .then((subject) => {
      return res.status(204).end()
    })
    .catch((error) => {
      return res
        .status(500).end()
    })
}