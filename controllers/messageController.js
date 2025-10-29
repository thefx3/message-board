const messages = [
    { text: "Hi there!", user: "Amando", added: new Date() },
    { text: "Hello World!", user: "Charles", added: new Date() }
  ];
  
  exports.getMessages = (req, res) => {
    res.render("index", { title: "Mini Messageboard", messages });
  };
  
  exports.getForm = (req, res) => {
    res.render("form");
  };
  
  exports.postMessage = (req, res) => {
    messages.push({
      text: req.body.message,
      user: req.body.user,
      added: new Date()
    });
    res.redirect("/");
  };
  