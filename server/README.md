# Backend
### Here is a list of all Backend Endpoints.
- Default local host PORT number is 4000.

|ENDPOINTS|METHOD|DESCRIPTION|
|---------|------|-----------|
|`/brands`|GET|Get a list of all brands (entire JSON parsed array of companies.json)|
|`/brands:_id`|GET|Get a list of all products filtered by brand name|
|`/products`|GET|Get a list of all products (entire JSON parsed array of items.json)|
|`/products/:_id`|GET|Get a single product from a list of all products|
|`/products/:_id`|PATCH|Decreases the Product Quantity By 1 (item is purchased)|
|`/category`|GET|Get a list of all categories|
|`/category/:categoryname`|GET|Get a list of products filtered by category name|
