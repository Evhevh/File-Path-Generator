# Number Image Microservice

This microservice provides a REST API to:
- Get the file path to a specific image by number
- Get a random image path
- Get a random image path within a range
- List all available image paths in a pre-defined folder

---

## Endpoints

---

### 1. Get Image by Number

**Request:**  
GET /api/images/image/{number}  

**Parameters:**  
- number (required): The image number.

**Responses:**
- 200 code  
  ```json
  { "imagePath": "images/1.png" }
  ```
- 400 error code if no image number provided.
- 404 not found if image number not found.

**Example:**
```python
import requests
resp = requests.get('http://localhost:3000/api/images/image/1')
print(resp.json())
```

---

### 2. Get a Random Image

**Request:**  
GET /api/images/random

**Parameters:**  
None

**Responses:**
- 200 code 
  ```json
  { "imagePath": "images/3.png" }
  ```
- 404 error if no image available in the default folder.

**Example:**
```python
import requests
resp = requests.get('http://localhost:3000/api/images/random')
print(resp.json())
```

---

### 3. Get a Random Image in a Range

**Request:**  
GET /api/images/random-range?start={start}&end={end}

**Parameters:**  
- start (required): Start of the range.
- end (required): End of the range.

**Responses:**
- 200 code  
  ```json
  { "imagePath": "images/4.png" }
  ```
- 400 error code if missing start and/or end parameter.
- 404 error code if no image found in the given range.

**Example:**
```python
import requests
resp = requests.get('http://localhost:3000/api/images/random-range?start=2&end=5')
print(resp.json())
```

---

### 4. List All Available Images

**Request:**  
GET /api/images/list

**Parameters:**  
None

**Responses:**
- 200 code  
  ```json
  {
    "images": [
      "images/1.png",
      "images/2.png",
      "images/3.png"
    ]
  }
  ```

**Example:**
```python
import requests
resp = requests.get('http://localhost:3000/api/images/list')
print(resp.json())
```
