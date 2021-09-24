# Backend
### Here is a list of all Backend Endpoints
- Default local host PORT number is 4000

|ENDPOINTS|METHOD|DESCRIPTION|
|---------|------|-----------|
|`/brands`|GET|Get a list of all brands (entire JSON parsed array of companies.json)|
|`/brands/:_id`|GET|Get a list of all products filtered by brand name|
|`/products`|GET|Get a list of all products (entire JSON parsed array of items.json)|
|`/products/:_id`|GET|Get a single product from a list of all products|
|`/order`|POST| Handles the purchase and updates quantities of items |
|`/category`|GET|Get a list of all categories|
|`/category/:categoryname`|GET|Get a list of products filtered by category name|
|`/sorted/a-z`|GET| Get a list of products sorted alphabetically|
|`/sorted/z-a`|GET| Get a list of products sorted alphabetically (reversed)|
|`/sorted/low-high`|GET| Get a list of products sorted by price (low to high)|
|`/sorted/high-low`|GET| Get a list of products sorted by price (high to low)|
|`/register`|POST| Add new user via MongoDB server|
|`/login`|POST|Fetch user for login via MongoDB server|

### Examples of Endpoint Use
- NOTE: JSON examples has been modified with (...) to shorten actual results as they contain image sources that may exceed several pages as a result.

GET `/brands`
- Retrieves a list of all brands
```json
{
    "status": 200,
    "message": "Successfully retrieved list of companies",
    "data": [
        {
            "name": "Barska",
            "url": "http://www.barska.com/",
            "country": "United States",
            "_id": 19962
        },
        {
            "name": "Belkin",
            "url": "http://www.belkin.com/",
            "country": "United States",
            "_id": 16384
        },
        ...
    ],
    "resultsFound": 74
}
```
---
GET `/brands/:_id`

("`/brands/10759`" will be used for the example here)
- This will fetch all products matching this brand's "companyId"
```json
{
    "status": 200,
    "message": "Successfully retrieved list of products from Fitbit, Company ID# 10759.",
    "store": {
        "name": "Fitbit",
        "url": "http://www.fitbit.com/",
        "country": "United States",
        "_id": 10759
    },
    "data": [
        {
            "name": "Fitbit Flex Cordless Activity/Sleep Tracker - Black",
            "price": "$94.95",
            "body_location": "Wrist",
            "category": "Fitness",
            "_id": 6551,
            "imageSrc": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMdata:image/jpeg;base64,/9j/...
            ...jvUreUVooxj6NEQdFbqCnic0sZz5+K66lpoo2AsbjgiIMlERAREQEREBERB//Z+K66lpoo2AsbjgiIMlERAREQEREBERB//Z",
            "numInStock": 8,
            "companyId": 10759
        },
        ...
    ],
    "resultsFound": 4,
}
```
---
GET `/products`
- This will fetch a list of all products
```json
{
    "status": 200,
    "message": "Successfully retrieved list of items",
    "data": [
        {
            "name": "Barska GB12166 Fitness Watch with Heart Rate Monitor",
            "price": "$49.99",
            "body_location": "Wrist",
            "category": "Fitness",
            "_id": 6543,
            "imageSrc": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tM...
            ...Mro7D7tVRUsZ6xxHmP9HgPtVsog07Xbaa1UMVHRsLYox3nJce8k+KLcRAREQEREBERAREQEREBERAREQEREBERAREQEREBERB//9k=",
            "numInStock": 9,
            "companyId": 19962
        },
        ...
        {
            "name": "YOO1 Activity Tracker with Trackit Jacket, Raspberry",
            "price": "$24.99",
            "body_location": "Waist",
            "category": "Lifestyle",
            "_id": 7122,
            "imageSrc": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tM...
            ...iAiIgIiICIiAiIgIiICIiAiIgIiIP/Z",
            "numInStock": 0,
            "companyId": 11008
        }
    ],
    "resultsFound": 348
}
```
---
GET `/products/:_id`

("`/products/6864`" will be used for the example here)
- This will fetch a single product by its "_id"
```json
{
    "status": 200,
    "message": "Successfully retrieved Product # 6864.",
    "data": {
        "name": "Mio 53PBLU - Alpha Heart Rate Sport Watch - Indigo",
        "price": "$199.99",
        "body_location": "Wrist",
        "category": "Fitness",
        "_id": 6864,
        "imageSrc": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMT...
        ...b4RfAhCB3mc/1nWeEXwJwop9v5UrPCL4EIQHmU/wBZ1f7sXwJTRTW/ONWe6P4EIQKKOUf8fVHuj+Fb2DsyUYaXOdZx1da58EqFYLqEIVH/2Q==",
        "numInStock": 7,
        "companyId": 17422
    }
}
```
---
PATCH `/products/:_id`

("`/products/7122`" will be used for the example here)

- For shopping cart use ONLY
- If there is quantity in the inventory, "numInStock" is decremented by 1 and updated as shown below.
```json
{
    "status": 200,
    "message": "Thank you for purchasing YOO1 Activity Tracker with Trackit Jacket, Raspberry. Your order is now processing.",
    "data": {
        "name": "YOO1 Activity Tracker with Trackit Jacket, Raspberry",
        "price": "$24.99",
        "body_location": "Waist",
        "category": "Lifestyle",
        "_id": 7122,
        "imageSrc": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMT...
        ...QtxtHi4neXHqSSfFVXuwircyZme5VRERgREQEREBERAREQEREBERAREQFTCqiCmEwqogpgKqIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiIP/Z",
        "numInStock": 0,
        "companyId": 11008
    }
}
```
- If product is no longer available (sold out), this will be shown instead.
```json
{
    "status": 400,
    "message": "Sorry! This product is sold out. Please check again later.",
    "data": {
        "name": "YOO1 Activity Tracker with Trackit Jacket, Raspberry",
        "price": "$24.99",
        "body_location": "Waist",
        "category": "Lifestyle",
        "_id": 7122,
        "imageSrc": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMT...
        ...QtxtHi4neXHqSSfFVXuwircyZme5VRERgREQEREBERAREQEREBERAREQFTCqiCmEwqogpgKqIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiIP/Z",
        "numInStock": 0,
        "companyId": 11008
    }
}
```
---
GET `/category`
- Retrieves a list of all product categories
```json
{
    "status": 200,
    "message": "Successfully retrieved list of categories.",
    "data": [
        "Fitness",
        "Medical",
        "Lifestyle",
        "Entertainment",
        "Industrial",
        "Pets and Animals",
        "Gaming"
    ],
    "resultsFound": 7
}
```
---
GET `/category/:categoryname`

("`/category/pets-and-animals`" will be used for the example here)
- This will fetch all products matching the "categoryname"
- NOTE: this endpoint has been modified so for categories with more than one word (e.g. "Pets and Animals") must be entered into the url endpoint with dashes "-" substituted for each space (e.g. "pets-and-animals")
- Also modified to not strictly accept endpoints based on capitalization (i.e. you can use "fitness" instead of "Fitness", but "FITNESS" and "FITness" also works too but I hightly recommend to stick to lower case naming conventions for endpoints)
```json
{
    "status": 200,
    "message": "Successfully retrieved list of products based on category 'pets-and-animals'",
    "data": [
        {
        "name": "High Tech Pet MS-4 Digital, Water-Resistant Ultrasonic Collar",
        "price": "$34.99",
        "body_location": "Neck",
        "category": "Pets and Animals",
        "_id": 6771,
        "imageSrc": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMT...
        ...EQEREBERAREQEREBERAREQEREBERAREQEREBERB//9k=",
        "numInStock": 9,
        "companyId": 19962
        },
        ...
        {
        "name": "Whistle BK897541 WhistleTM Wireless Activity Monitor for Dogs",
        "price": "$99.99",
        "body_location": "Neck",
        "category": "Pets and Animals",
        "_id": 7112,
        "imageSrc": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgQCgkLEA0PDRAQEBsZEBkOIB0WIiAdHx8kHTQsJCYxJx8fLTUtMT...
        ...Ka1X/CoOB2Ocj4oV64xjvjwbB29Q6Vj1XvYSjHqbL0oi7gSbZyGWQO5yx5D9vinprfjkLMd+1RbQ8DEqBtt929SS7Z50R7gT//2Q==",
        "numInStock": 4,
        "companyId": 14639
        }
    ],
    "resultsFound": 3
}
```
---
ERROR HANDLING `/*`
- for everything else
```json
{
    "status": 404,
    "message": "Oh dear, this endpoint does not exist. Please check your endpoint carefully and enjoy this bacon: 🥓"
}
```
---
---