const Contact = require("../models/contact.model.js");

exports.create = (req, res) => {
  const contact = new Contact({
    name: req.body.name,
    birth: req.body.birth,
  });
  contact.save()
    .then(data => res.send(data))
    .catch(err => res.status(500).send({ message: err.message || "Some error occurred...",}))
}

exports.findAll = (req, res) => {
  Contact.find()
    .then(data => res.send(data))
    .catch(err => res.status(500).send({ message: err.message || "Some error occurred...",}))
}

exports.findOne = (req, res) => {
  Contact.findById(req.params.contactId)
    .then((data) => {
      if (!data) {
        return res.status(404)
            .send({ message: "Contact not found with id " + req.params.contactId})
      }
      res.send(data)
    })
    .catch(err => res.status(500).send({ message: err.message || "Some error occurred...",}))
}

exports.update = (req, res) => {
  Contact.findByIdAndUpdate(
    req.params.contactId,
    {
        name: req.body.name,
        birth: req.body.birth,
    },
    { new: true }
  )
    .then((data) => {
      if (!data) {
        return res.status(404)
            .send({ message: "Contact not found with id " + req.params.contactId})
      }
      res.send(data)
    })
    .catch(err => res.status(500).send({ message: err.message || "Some error occurred...",}))
}

exports.delete = (req, res) => {
  Contact.findByIdAndRemove(req.params.contactId)
    .then((data) => {
      if (!data) {
        return res.status(404)
            .send({ message: "Contact not found with id " + req.params.contactId})
      }
      res.send({ message: "Message deleted successfully!" })
    })
    .catch(err => res.status(500).send({ message: err.message || "Some error occurred...",}))
}