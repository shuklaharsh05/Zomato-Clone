const express = require('express')

const locationController = require('../Controllers/locations');
const mealtypeController = require('../Controllers/mealtype');
const restaurantController = require('../Controllers/restaurant');
const restaurantByCityController = require('../Controllers/restaurantByCity');
const userController = require('../Controllers/user');
const userDetailsController = require('../Controllers/userDetails');
const menuController = require('../Controllers/menu');
const route = express.Router();

route.get('/locations', locationController.getLocations);
route.post('/signup', userController.Signup);
route.post('/login', userController.Login);
route.get('/mealtype', mealtypeController.getMealtype);
route.get('/restaurants', restaurantController.getRestaurant);
route.post('/filter', restaurantController.filterRestaurant);
route.post('/userDetails', userDetailsController.UserDetails);
//route.post('/filterMenu', menuController.filterMenu);

route.get('/restaurant/:askedId', restaurantByCityController.getRestaurantById);

route.get('/restaurants/:askedCity', restaurantByCityController.getRestaurantByCity);

route.get('/menu/:resId', menuController.getMenu);
module.exports = route;