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


var cedarRapids = new Store('Cedar Rapids', 23, 65, 6.3);


//createTable();
cedarRapids.render();
console.log(cedarRapids);

/*
 var seatacAirport = {
     locationName: 'Seatac Airport',
     minCustomersPerHour: 3,
     maxCustomersPerHour: 24,
     avgCookiesPerSale: 1.2,
     customersEachHour: [],
     cookiesEachHour: [],
     totalDailyCookies: 0,
     calcCustomersEachHour: function() {
         for(var i = 0; i < hours.length; i++) {
             this.customersEachHour.push(Math.floor(Math.random() *
             (this.maxCustomersPerHour - this.minCustomersPerHour + 1)
             + this.minCustomersPerHour));
         }
     },
     calcCookiesEachHour: function() {
         for(var i = 0; i < this.customersEachHour.length; i++) {
             this.cookiesEachHour.push(Math.ceil(this.customersEachHour[i] *
             this.avgCookiesPerSale));
         }
     },
     calcTotalCookies: function() {
         for(var i = 0; i < this.cookiesEachHour.length; i++) {
             this.totalDailyCookies += this.cookiesEachHour[i];
         }
     },
     render: function() {
         this.calcCustomersEachHour();
         this.calcCookiesEachHour();
         this.calcTotalCookies();

         var header = document.createElement('h2')
         header.textContent = this.locationName;
         document.body.appendChild(header);

         var unorderedList = document.createElement('ul')
         for (var i = 0; i < hours.length; i++) {
             var listItem = document.createElement('li');
             listItem.textContent = hours[i] + ': ' + this.cookiesEachHour[i];
             unorderedList.appendChild(listItem);
         }
         var total = document.createElement('li');
         total.textContent = 'Total: ' + this.totalDailyCookies;
         unorderedList.appendChild(total);
         document.body.appendChild(unorderedList);
     }
 }

 seatacAirport.render();

 var seattleCenter = {
     locationName: 'Seattle Center',
     minCustomersPerHour: 11,
     maxCustomersPerHour: 38,
     avgCookiesPerSale: 3.7,
     customersEachHour: [],
     cookiesEachHour: [],
     totalDailyCookies: 0,
     calcCustomersEachHour: function() {
         for(var i = 0; i < hours.length; i++) {
             this.customersEachHour.push(Math.floor(Math.random() *
             (this.maxCustomersPerHour - this.minCustomersPerHour + 1)
             + this.minCustomersPerHour));
         }
     },
     calcCookiesEachHour: function() {
         for(var i = 0; i < this.customersEachHour.length; i++) {
             this.cookiesEachHour.push(Math.ceil(this.customersEachHour[i] *
             this.avgCookiesPerSale));
         }
     },
     calcTotalCookies: function() {
         for(var i = 0; i < this.cookiesEachHour.length; i++) {
             this.totalDailyCookies += this.cookiesEachHour[i];
         }
     },
     render: function() {
         this.calcCustomersEachHour();
         this.calcCookiesEachHour();
         this.calcTotalCookies();

         var header = document.createElement('h2')
         header.textContent = this.locationName;
         document.body.appendChild(header);

         var unorderedList = document.createElement('ul')
         for (var i = 0; i < hours.length; i++) {
             var listItem = document.createElement('li');
             listItem.textContent = hours[i] + ': ' + this.cookiesEachHour[i];
             unorderedList.appendChild(listItem);
         }
         var total = document.createElement('li');
         total.textContent = 'Total: ' + this.totalDailyCookies;
         unorderedList.appendChild(total);
         document.body.appendChild(unorderedList);
     }
 }

 seattleCenter.render();




 asdfsfadf
 var capitolHill = {
     locationName: 'Capitol Hill',
     minCustomersPerHour: 20,
     maxCustomersPerHour: 38,
     avgCookiesPerSale: 2.3,
     customersEachHour: [],
     cookiesEachHour: [],
     totalDailyCookies: 0,
     calcCustomersEachHour: function() {
         for(var i = 0; i < hours.length; i++) {
             this.customersEachHour.push(Math.floor(Math.random() *
             (this.maxCustomersPerHour - this.minCustomersPerHour + 1)
             + this.minCustomersPerHour));
         }
     },
     calcCookiesEachHour: function() {
         for(var i = 0; i < this.customersEachHour.length; i++) {
             this.cookiesEachHour.push(Math.ceil(this.customersEachHour[i] *
             this.avgCookiesPerSale));
         }
     },
     calcTotalCookies: function() {
         for(var i = 0; i < this.cookiesEachHour.length; i++) {
             this.totalDailyCookies += this.cookiesEachHour[i];
         }
     },
     render: function() {
         this.calcCustomersEachHour();
         this.calcCookiesEachHour();
         this.calcTotalCookies();

         var header = document.createElement('h2')
         header.textContent = this.locationName;
         document.body.appendChild(header);

         var unorderedList = document.createElement('ul')
         for (var i = 0; i < hours.length; i++) {
             var listItem = document.createElement('li');
             listItem.textContent = hours[i] + ': ' + this.cookiesEachHour[i];
             unorderedList.appendChild(listItem);
         }
         var total = document.createElement('li');
         total.textContent = 'Total: ' + this.totalDailyCookies;
         unorderedList.appendChild(total);
         document.body.appendChild(unorderedList);
     }
 }

 capitolHill.render();

 var alki = {
     locationName: 'Alki',
     minCustomersPerHour: 2,
     maxCustomersPerHour: 16,
     avgCookiesPerSale: 4.6,
     customersEachHour: [],
     cookiesEachHour: [],
     totalDailyCookies: 0,
     calcCustomersEachHour: function() {
         for(var i = 0; i < hours.length; i++) {
             this.customersEachHour.push(Math.floor(Math.random() *
             (this.maxCustomersPerHour - this.minCustomersPerHour + 1)
             + this.minCustomersPerHour));
         }
     },
     calcCookiesEachHour: function() {
         for(var i = 0; i < this.customersEachHour.length; i++) {
             this.cookiesEachHour.push(Math.ceil(this.customersEachHour[i] *
             this.avgCookiesPerSale));
         }
     },
     calcTotalCookies: function() {
         for(var i = 0; i < this.cookiesEachHour.length; i++) {
             this.totalDailyCookies += this.cookiesEachHour[i];
         }
     },
     render: function() {
         this.calcCustomersEachHour();
         this.calcCookiesEachHour();
         this.calcTotalCookies();

         var header = document.createElement('h2')
         header.textContent = this.locationName;
         document.body.appendChild(header);

         var unorderedList = document.createElement('ul')
         for (var i = 0; i < hours.length; i++) {
             var listItem = document.createElement('li');
             listItem.textContent = hours[i] + ': ' + this.cookiesEachHour[i];
             unorderedList.appendChild(listItem);
         }
         var total = document.createElement('li');
         total.textContent = 'Total: ' + this.totalDailyCookies;
         unorderedList.appendChild(total);
         document.body.appendChild(unorderedList);
     }
 }

 alki.render();
 */