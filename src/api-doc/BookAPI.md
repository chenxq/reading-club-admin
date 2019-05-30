**Show Book Detail**
----
  Returns json data about a single book.

* **URL**

  /book/:id

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   `id=[integer]`

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
            "id" : 12, 
            "name" : "The Practice of Management", 
            "author" : "Peter",
            "leftAmount" : 1,
            "ISBN" : "9787111177678",
            "doubanUrl" : "https://book.douban.com/subject/1457028/",
            "imageUrl" : "https://img3.doubanio.com/view/subject/l/public/s24940056.jpg",
            "price" : 48.00,
            "press" : "机械工业出版社",
            "createdTime" : "",
            "updatedTime" : "",
            "visible" : true
          }
        ]
    }
    
    ```
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ "error" : "Book doesn't exist" }`

  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ "error" : "You are unauthorized to make this request." }`

* **Sample Call:**

  ```javascript
    $.ajax({
      url: "/book/1",
      dataType: "json",
      type : "GET",
      success : function(r) {
        console.log(r);
      }
    });
  ```