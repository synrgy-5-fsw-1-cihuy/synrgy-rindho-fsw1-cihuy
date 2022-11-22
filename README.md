# Cars Management API
### Endpoint
##### METHOD GET :
- '/api/cars' - get all cars
- '/api/cars/[id]' - get one car based on **id**
- '/api/products' - get all products
- '/api/products/[id]' - get one product based on **id**
##### METHOD POST :
- '/api/cars' - insert car
- '/api/products' - insert product
##### METHOD PUT :
- '/api/cars/[id]' - update full car object based on **id**
- '/api/products/[id]' - update full product object based on **id**
##### METHOD PATCH :
- '/api/cars/[id]' - update partial car object based on **id**
- '/api/products/[id]' - update partial product object based on **id**
##### METHOD DELETE :
- '/api/cars/[id]' - delete car object based on **id**
- '/api/products/[id]' - delete product object based on **id**
#
### Database (PostgreSQL)
##### Cars Attributes
- plate: varchar
- manufacture: varchar
- model: varchar
- image: varchar
- rentPerDay: integer
- capacity: integer
- description: varchar
- availableAt: timestamptz
- transmission: varchar
- available: boolean
- type: varchar
- year: integer
##### Products Attributes
- name: varchar
- description: varchar
- price: integer