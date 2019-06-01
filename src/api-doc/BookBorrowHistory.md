**Show a Book's Borrow History**
----
  Returns json data about the borrow history.

* **URL**

  /history/book/:bookId

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   `bookId=[integer]`

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
            "bookName" : "Domain Drive Design",
            "bookId" : 11,
            "borrowDate" : "2019-01-01T00:00:00Z",
            "returnDate" : "2019-02-01T00:00:00Z",
            "dueDate" : "2019-03-01T00:00:00Z",
            "createdTime" : "2019-01-01T00:00:00Z",
            "updatedTime" : "2019-02-01T00:00:00Z"
          },
          { 
            "id" : 2, 
            "userName" : "Dina.Huang", 
            "userId" : 11,
            "bookName" : "Domain Drive Design",
            "bookId" : 11,
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

* **Sample Call:**

  ```javascript
    $.ajax({
      url: "/history/book/11",
      dataType: "json",
      type : "GET",
      success : function(r) {
        console.log(r);
      }
    });
  ```