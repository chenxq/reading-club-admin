**Borrow a Book**
----
  Returns result of borrow operation.

* **URL**

  /book/borrow

* **Method:**

  `POST`
  
*  **URL Params**

    None

*  **Data Params**

  ```json
  {
      "bookId" : 12
  }
  ```

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```json
    {
      "message":
        { 
            "bookId" : 12, 
            "leftAmount" : 1,
            "operateTime" : "2019-01-01T00:00:00Z"
        }
    }
    ```

    OR

  * **Code:** 204 no content(no available book)<br />
    **Content:** 
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ "error" : "Book doesn't exist" }`

  OR

  * **Code:** 500 Server Error <br />
    **Content:** `{ "error" : "Server error." }`

* **Sample Call:**

  ```javascript
    $.ajax({
      url: "/book/borrow",
      dataType: "json",
      type : "POST",
      data : {
          "bookId" : 12
      }
      success : function(r) {
        console.log(r);
      }
    });
  ```