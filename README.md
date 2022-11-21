# Cars Management API
### Endpoint
##### METHOD GET :
- '/api/cars' - get all cars
- '/api/cars/[id]' - get one car based on **id**
##### METHOD POST :
- '/api/cars' - insert car
##### METHOD PUT :
- '/api/cars/[id]' - update full car object based on **id**
##### METHOD PATCH :
- '/api/cars/[id]' - update partial car object based on **id**
##### METHOD DELETE :
- '/api/cars/[id]' - delete car object based on **id**
#
### Database (PostgreSQL)
##### Attributes
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