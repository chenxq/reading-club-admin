**Borrow a Book**
----
  Returns result of borrow operation.

* **URL**

  /borrow

* **Method:**

  `POST`
  
*  **URL Params**

    None

*  **Data Params**

  ```json
  {
      "bookID" : 12,
      "userID" : 12
  }
  ```

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```json
    { 
      "bookId" : 12, 
      "message" : "success!"
    }
    
    ```
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** 
    `{ "error" : "The book you are looking for does not exist!" }`

  OR

  * **Code:** 500 Server Error <br />
    **Content:** `{ "error" : "Post data error!" }`