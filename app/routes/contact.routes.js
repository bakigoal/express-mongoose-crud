module.exports = (app) => {
    const Contact = require("../controllers/contact.controller.js");
  
    app.post("/contacts", Contact.create);
  
    app.get("/contacts", Contact.findAll);
  
    app.get("/contacts/:contactId", Contact.findOne);
  
    app.put("/contacts/:contactId", Contact.update);
  
    app.delete("/contacts/:contactId", Contact.delete);
  };