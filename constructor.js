'use strict';


var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm',
  '4pm', '5pm', '6pm', '7pm', '8pm'];

function Store(locationName, minCustomersPerHour, maxCustomersPerHour, avgCookiesPerSale) {
  this.locationName = locationName;
  this.minCustomersPerHour = minCustomersPerHour;
  this.maxCustomersPerHour = maxCustomersPerHour;
  this.avgCookiesPerSale = avgCookiesPerSale;
  this.customersEachHour = [];
  this.cookiesEachHour = [];
  this.totalDailyCookies = 0;
}
Store.prototype.calcCookiesEachHour = function() {
  for(var i = 0; i < this.customersEachHour.length; i++) {
    this.cookiesEachHour.push(Math.ceil(this.customersEachHour[i] *
        this.avgCookiesPerSale));
  }
};
Store.prototype.calcCustomersEachHour = function() {
  for(var i = 0; i < hours.length; i++) {
    var randomCustomer = Math.ceil(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour) + this.minCustomersPerHour);
    this.customersEachHour.push(randomCustomer);
  }
};
Store.prototype.calcTotalCookies = function() {
  for(var i = 0; i < hours.length; i++) {
    this.totalDailyCookies += this.cookiesEachHour[i];
  }
};

Store.prototype.render = function() {
  this.calcCustomersEachHour();
  this.calcCookiesEachHour();
  this.calcTotalCookies();
  var tbody = document.getElementById('storeData');
  var tr = document.createElement('tr');
  tbody.appendChild(tr);

  var tdLocationName = document.createElement('td');
  tdLocationName.textContent = this.locationName;
  tr.appendChild(tdLocationName);

  for(var i = 0; i < hours.length; i++) {
    var cookiesEachHour = document.createElement('td');
    cookiesEachHour.textContent = this.cookiesEachHour[i];
    tr.appendChild(cookiesEachHour);
  }

  var totalDailyCookies = document.createElement('td');
  totalDailyCookies.textContent = this.totalDailyCookies;
  tr.appendChild(totalDailyCookies);
};


var firstAndPike = new Store('First and Pike', 23, 65, 6.3);
var seatacAirport = new Store('SeaTac Airport', 3, 24, 1.2);
var seattleCenter = new Store('Seattle Center', 11, 38, 3.7);
var capitolHill = new Store('Capitol Hill', 20, 38, 2.3);
var alki = new Store('Alki', 2, 16, 4.6);


//createTable();
firstAndPike.render();
seatacAirport.render();
seattleCenter.render();
capitolHill.render();
alki.render();
