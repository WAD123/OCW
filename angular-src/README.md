# OcwUser for booking panel

https://www.youtube.com/watch?v=edaN6iCcqP4
https://stackoverflow.com/questions/50472139/cannot-read-property-schedule-of-undefined

Version 3.0.0 is not stable. Go for latest stable version 2.0.5
Following steps works.
rm -rf node_modules/ngx-bootstrap
package.json : "ngx-bootstrap": "^3.0.0" to "ngx-bootstrap": "2.0.5",
npm install ngx-bootstrap 

npm i --save nouislider ng2-nouislider

# routings
for register -- http://localhost:4200/
for login -- http://localhost:4200/login
remaining all pages -- 
http://localhost:4200/user/profile
http://localhost:4200/user/feeds
http://localhost:4200/user/bookRoom,
http://localhost:4200/user/bookSpace,
http://localhost:4200/user/myBookings,
http://localhost:4200/user/accountSettings