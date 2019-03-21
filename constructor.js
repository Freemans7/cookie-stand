'use strict';


var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm',
  '4pm', '5pm', '6pm', '7pm', '8pm'];

var stores =[

  new Store('First and Pike', 23, 65, 6.3),
  new Store('SeaTac Airport', 3, 24, 1.2),
  new Store('Seattle Center', 11, 38, 3.7),
  new Store('Capitol Hill', 20, 38, 2.3),
  new Store('Alki', 2, 16, 4.6),
];


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

var addNewLocation = document.getElementById('myForm');

function myFunction(event) {
  console.log(event);
  event.preventDefault();
  var loc = event.target.loc.value;
  var min = parseInt(event.target.min.value);
  var max = parseInt(event.target.max.value);
  var avg = parseInt(event.target.avg.value);
  var newStore = new Store(loc, min, max, avg);
  newStore.render();
  stores.push(newStore);
  addNewLocation.reset();
}

addNewLocation.addEventListener('submit', myFunction);


stores.forEach(function(store) {
  store.render();
});

var row = document.createElement('tr');

var totalPlaceHolder = document.createElement('td');
totalPlaceHolder.textContent = 'total';
row.appendChild(totalPlaceHolder);


for(var i = 0; i < hours.length; i++) {
  var total = 0;
  for(var j = 0; j < stores.length; j++) {
    total += stores[j].cookiesEachHour[i];
  }
  var td = document.createElement('td');
  td.textContent = total;
  row.appendChild(td);
}

document.getElementById('tableFooter').appendChild(row);


