**Show Current User's Borrow History**
----
  Returns json data about the borrow history.

* **URL**

  /history/user/:userId

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   `userId=[integer]`

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```json
    {
      "message":
        [
          { 
            "id" : 1, 
            "userName" : "Joe.Zhang", 
            "userId" : 12,
            "bookName" : "Man Month",
            "bookId" : 11,
            "borrowDate" : "2019-01-01T00:00:00Z",
            "returnDate" : "2019-02-01T00:00:00Z",
            "dueDate" : "2019-03-01T00:00:00Z",
            "createdTime" : "2019-01-01T00:00:00Z",
            "updatedTime" : "2019-02-01T00:00:00Z"
          },
          { 
            "id" : 2, 
            "userName" : "Joe.Zhang", 
            "userId" : 12,
            "bookName" : "Domain Drive Design",
            "bookId" : 12,
            "borrowDate" : "2019-01-01T00:00:00Z",
            "returnDate" : "2019-02-01T00:00:00Z",
            "dueDate" : "2019-01-20T00:00:00Z",
            "createdTime" : "2019-01-01T00:00:00Z",
            "updatedTime" : "2019-02-01T00:00:00Z"
          }
        ]
    }
    
    ```
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ "error" : "Book doesn't exist" }`

  OR

  * **Code:** 500 Server Error <br />
    **Content:** `{ "error" : "Server error." }`