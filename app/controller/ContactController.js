// contact-controller
function isEmpty(str) {
  return (str == undefined || str.trim().length == 0);
}
var contactController = {
  index: function(req, res) {
    res.render('contact/index', {
      title: 'CONTACT',
      page: 'contact',
      typeAlert: 'alert alert-info',
      message: 'Hello, we are here!'
    });
  },
  show: function(req, res) {
    var name = req.body.name;
    var message = 'We have just received your information!';
    var typeAlert = "alert alert-success";
    if (isEmpty(name)) {
      typeAlert = "alert alert-danger";
      message = 'Enter your name, please!'
    }
    res.render('contact/index', {
      title: 'CONTACT',
      page: 'contact',
      typeAlert: typeAlert,
      message: message
    });
  }
}
module.exports = contactController;
