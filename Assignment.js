describe('reqres', () => {

    const baseurl ="https://jsonplaceholder.typicode.com";  // Base URL for the API
  
    it('GetALL', () => {
  
      cy.request({ 
        
        // Sending a GET request to fetch all posts
        method:'GET',
        url:baseurl+'/posts',  // URL for fetching posts
        headers:{
          'Content-Type':'application/json'  // Setting the content type
        },
  
        timeout:120000  // Timeout set for the request
  
      }).then((response) => {
  
          // Asserting that the response status is 200 (OK)
          expect(response.status).to.eq(200)
          cy.log(JSON.stringify(response));  // Logging the entire response to the console
          
  
      })
  
    });
  
    
  
      
    it('Createpost', () => {
  
        cy.request({ 
        
          // Sending a POST request to create a new post
          method:'POST',
          url:baseurl+'/posts',  // URL for creating a post
          body:{
            "title": "New Post",  // Data to be sent in the request body                                       
             "body": "This is the body of the new post",
             "userld":"1"
          },
  
          headers:{
            'Content-Type':'application/json'  // Setting the content type
          },
    
          timeout:120000  // Timeout set for the request
    
        }).then((response) => {
            // Asserting that the response status is 201 (Created)
            expect(response.status).to.eq(201)
            cy.log(JSON.stringify(response.body))  // Logging the response body to the console
        })
        
      });
  
    it('updaterequest', () => {
  
        cy.request({ 
        
          // Sending a PUT request to update an existing post
          method:'PUT',
          url:baseurl+'/posts/1',  // URL for updating post with ID 1
          body:{
            "title": "Updated  Post",  // Data to update the post                                      
            "body": "This is the body updated post",
            "userld":"1"
          },
  
          headers:{
            'Content-Type':'application/json'  // Setting the content type
          },
    
          timeout:120000  // Timeout set for the request
    
        }).then((response) => {
            // Asserting that the response status is 200 (OK)
            expect(response.status).to.eq(200)
            cy.log(JSON.stringify(response.body))  // Logging the response body to the console
        })
  
    });
  
  
    it('Deleterequest', () => {
  
      cy.request({ 
      
        // Sending a DELETE request to delete post with ID 1
        method:'DELETE',
        url:baseurl+'/posts/1',  // URL for deleting post with ID 1
        
        headers:{
          'Content-Type':'application/json'  // Setting the content type
        },
  
        timeout:120000  // Timeout set for the request
  
      }).then((response) => {
          // Asserting that the response status is 200 (OK)
          expect(response.status).to.eq(200)
          cy.log(JSON.stringify(response.body))  // Logging the response body to the console
      })
  
    });

});

