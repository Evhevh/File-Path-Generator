# Number Image Microservice

This microservice provides a REST API to:
- Get the file path to a specific image by number
- Get a random image path
- Get a random image path within a range
- List all available image paths in a pre-defined folder

## Project Structure

```
number-image-microservice
├── src
│   ├── app.js               # Entry point of the application
│   ├── routes
│   │   └── image.js         # Defines routes for the image service
│   ├── controllers
│   │   └── imageController.js # Contains the logic to get image paths
│   └── config
│       └── defaultPaths.js   # Holds default file paths for images
├── package.json              # npm configuration file
└── README.md                 # Project documentation
```

## Installation

To install the necessary dependencies, run:

```
npm install
```

## Usage

To start the server, use the following command:

```
npm start
```
or
```
node src/app.js
```

The service will be available at `http://localhost:3000/api/images`.

## API Endpoints

- **Get image by number:**  
  `GET /api/images/image/:number`  
  or  
  `GET /api/images/image?number=1`

- **Get a random image:**  
  `GET /api/images/random`

- **Get a random image in a range:**  
  `GET /api/images/random-range?start=2&end=5`

- **List all available images:**  
  `GET /api/images/list`

## Example

To get the image path for the number 1:
```
GET http://localhost:3000/api/images/image/1
```

To get a random image:
```
GET http://localhost:3000/api/images/random
```

To get a random image in a range (e.g., 2 to 5):
```
GET http://localhost:3000/api/images/random-range?start=2&end=5
```

To list all available images:
```
GET http://localhost:3000/api/images/list
```

## Contributing

Feel free to submit issues or pull requests to improve the functionality of this microservice.