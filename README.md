how to start using the app - onecowork

install nodeJS

localhost:3000 for node || localhost:4200 for angular

mongodb instance is already running in mlab.

in onecowork folder's terminal

npm init (Enter n whenever asked to overwrite files)

npm install

npm start OR sudo npm install -g nodemon AND nodemon

one more package for pie chart - npm install ng2-charts --save

angular setup commands

In folder - onecowork

open terminal

sudo npm install -g @angular/cli (Enter n whenever asked to overwrite files)

ng new angular-src (Enter n whenever asked to overwrite files)


In angular-src/src/app/components folder, make components -

ng g component bookings

ng g component membersfeed

ng g component navbar (Enter n Whenever asked to overwrite files)

ng g component profile

ng g component home

ng g component register

ng g component dashboard

in angular-src folder — npm install angular2-flash-messages —save

in angular-src/src/app/services folder — ng g service auth

in angular-src folder: npm install angular2-jwt —save


in angular-src folder: npm install ng2-datepicker —save


in angular-src folder: npm install angular2-csv —save


ng serve FROM terminal to start the app

ctrl + c to stop

1 registered user:

bhavye/123456


add uploads folder in public directory which must contain 3 below folders
photo
identityProof
addressProof

otherwise code will break
