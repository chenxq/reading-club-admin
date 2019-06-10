**Add a book**
----
  Returns the added book.

* **URL**

  /book/add

* **Method:**

  `POST`
  
*  **URL Params**

    None

*  **Data Params**

  ```json
  { 
    "name" : "The Practice of Management", 
    "author" : "Peter",
    "ISBN" : "9787111177678",
    "doubanUrl" : "https://book.douban.com/subject/1457028/",
    "imageUrl" : "https://img3.doubanio.com/view/subject/l/public/s24940056.jpg",
    "price" : 48.00,
    "press" : "机械工业出版社",
    "description" : "a short description of this book"
  }
    
  ```

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```json
    {
      "message":
        [
          { 
            "id" : 12, 
            "name" : "The Practice of Management", 
            "author" : "Peter",
            "leftAmount" : 1,
            "ISBN" : "9787111177678",
            "doubanUrl" : "https://book.douban.com/subject/1457028/",
            "imageUrl" : "https://img3.doubanio.com/view/subject/l/public/s24940056.jpg",
            "price" : 48.00,
            "press" : "机械工业出版社",
            "description" : "a short description of this book",
            "createdTime" : "2019-01-01T00:00:00Z",
            "updatedTime" : "2019-01-01T00:00:03Z"
          }
        ]
    }
    
    ```
 
* **Error Response:**

  * **Code:** 500 Server Error <br />
    **Content:** `{ "error" : "Internal server error!" }`


**Update book information**
----
  Returns the updated book.

* **URL**

  /book/update

* **Method:**

  `POST`
  
*  **URL Params**

    None

*  **Data Params**

  ```json
  { 
    "id" : 12,
    "name" : "The Practice of Management", 
    "author" : "Peter",
    "ISBN" : "9787111177678",
    "doubanUrl" : "https://book.douban.com/subject/1457028/",
    "imageUrl" : "https://img3.doubanio.com/view/subject/l/public/s24940056.jpg",
    "price" : 48.00,
    "press" : "机械工业出版社",
    "description" : "a short description of this book"
  }
    
  ```

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```json
    {
      "message":
        [
          { 
            "id" : 12, 
            "name" : "The Practice of Management", 
            "author" : "Peter",
            "leftAmount" : 1,
            "ISBN" : "9787111177678",
            "doubanUrl" : "https://book.douban.com/subject/1457028/",
            "imageUrl" : "https://img3.doubanio.com/view/subject/l/public/s24940056.jpg",
            "price" : 48.00,
            "press" : "机械工业出版社",
            "description" : "a short description of this book",
            "createdTime" : "2019-01-01T00:00:00Z",
            "updatedTime" : "2019-01-01T00:00:03Z"
          }
        ]
    }
    
    ```
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** 
    `{ "error" : "The book you are looking for does not exist!" }`

  OR

  * **Code:** 500 Server Error <br />
    **Content:** `{ "error" : "Post data error!" }`


**Delete book**
----
  Returns operation response.

* **URL**

  /book/delete/:bookID

* **Method:**

  `POST`
  
*  **URL Params**

    12

*  **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```json
    {
      "id" : 12, 
      "message" : "successully deleted"
    }
    
    ```
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** 
    `{ "error" : "The book you are looking for does not exist!" }`

  OR

  * **Code:** 500 Server Error <br />
    **Content:** `{ "error" : "Internal server error!" }`