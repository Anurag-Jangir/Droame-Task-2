const Customer = require('../Models/Customer');
const Location = require('../Models/Location');
const ShotType = require('../Models/ShotType');
const Booking = require('../Models/Bookings');

exports.getHomePage = (req, res, next) => {
  res.send(
    `<style>
    nav {
      display: flex;
      justify-content: center;
    }
    nav a {
      display: inline-block;
      padding: 10px;
      color: #555;
      text-decoration: none;
      font-weight: bold;
      margin: 0 10px;
      border-radius: 5px;
      background-color: #eee;
      transition: background-color 0.3s ease;
    }
    nav a:hover {
      background-color: #ccc;
    }
    nav p {
      margin: 0;
    }
  </style>
  
  <nav>
    <a href="/add-customer">Add Customer</a>
    <a href="/add-location">Add Location</a>
    <a href="/add-shot-type">Add Drone Shot Type</a>
  </nav>
  `
  );
};

exports.addBooking = async (req, res, next) => {
  const cust = await Customer.findAll({ attributes: ['name'] });
  const loc = await Location.findAll({ attributes: ['name'] });
  const st = await ShotType.findAll({ attributes: ['name'] });
  res.render('add-booking', {
    pageTitle: 'Add Booking',
    customer: cust,
    location: loc,
    shotType: st,
  });
};
exports.postBooking = async (req, res, next) => {
  const name = req.body.name;
  const location = req.body.location;
  const shotType = req.body.shotType;
  const location_id = await Location.findAll({
    where: { name: location },
    attributes: ['id'],
  });
  const shotType_id = await ShotType.findAll({
    where: { name: shotType },
    attributes: ['id'],
  });
  const customer_id = await Customer.findAll({
    where: { name: name },
    attributes: ['id'],
  });
  console.log(
    customer_id[0].dataValues.id,
    location_id[0].dataValues.id,
    shotType_id[0].dataValues.id
  );
  Booking.create({
    customer_name: name,
    locationId: location_id[0].dataValues.id,
    shotTypeId: shotType_id[0].dataValues.id,
    customerId: customer_id[0].dataValues.id,
  });
  res.redirect('/home');
};

exports.addCustomer = (req, res, next) => {
  res.render('add-customer', {
    pageTitle: 'Add Customer',
  });
};
exports.postCustomer = (req, res, next) => {
  const name = req.body.name;
  const email = req.body.email;
  const phoneNumber = req.body.phoneNumber;
  //Post data to customer table.
  Customer.create({ name, email, phoneNumber })
    .then((result) => console.log('customer created!!'))
    .catch((err) => console.log(err));
  res.redirect('/home');
};

exports.addLocation = (req, res, next) => {
  res.render('add-location', {
    pageTitle: 'Add Location',
  });
};
exports.postLocation = (req, res, next) => {
  const location = req.body.location;
  Location.create({ name: location });
  res.redirect('/home');
};

exports.addShotType = (req, res, next) => {
  res.render('add-shot-type', {
    pageTitle: 'Add Shot-Type',
  });
};
exports.postShotType = (req, res, next) => {
  const shotType = req.body.shotType;
  ShotType.create({ name: shotType });
  res.redirect('/home');
};

exports.get404 = (req, res, next) => {
  res.status(404).render('404', { pageTitle: 'Page Not Found', path: '/404' });
};
