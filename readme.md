# Future Note 
### you can call functions in pug function but it's not so usuable limited by pug I beleive

### Model: Find a way to make users create a model, and add controllers for the model

### Tree shaking, Might have to remake template, or import values and not use them, or call templates in creator function

### Creator element, Encapsulate creation function, have the element creator fuction return a string of the element i.e <test-ele></test-ele>

### Server side rendering

### Call pug page function on the server

### API logic encapsulating, Just have specific path to call

### ReArrange files

### Recheck logic of pages to support SSR

### Test to see if it works with different template engines

### API interceptors in service worker

### Make privateValue in element have a setter value

### Test with another template engine

### persistent state

### Can't use slot, Try to add shadow root and make it work

## New flow for this framework

### Pages folders in the Repo will be Template files that would be sent to dist to turn them to script files that contain all elements used, The server uses the pug files and the related files used by them to i.e fetch data on the server and another function that is called to turn Template to html string after passing values, all pages files will link to different elements they use in orther to create a script for them, pages files should return inner html and take fetched data as arguments so pages file can use to generate string that will be stored on server and also in client. When routing is happening through the server. the server will add all the pages folders data into an observer with a string and path object which will then be used to generate the routes on the server, and also help with client side routing (more on that down). same for the API routes, The folders files will be added to an observer with the path and that will be used to generate the routes. For cleient side routing the data are stored in the html router and fetched and generated on the client then parsed to the HTML file
