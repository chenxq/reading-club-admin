**Return a Book**
----
  Returns result of return book operation.

* **URL**

  /return

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
      "message":
        { 
            "bookID" : 12,
            "createdTime" : "2019-01-01T00:00:00Z"
        }
    }
    ```
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ "error" : "The book you are looking for does not exist!" }`

  OR

  * **Code:** 500 Server Error <br />
    **Content:** `{ "error" : "Post data error!" }`