describe('reqres', () => {

  const baseurl ="https://reqres.in";

  it('GetALL', () => {

    cy.request({ 
      
      
      method:'GET',
      url:baseurl+'/api/users?page=2',
      headers:{
        'Content-Type':'application/json'
      },

      timeout:120000

    }).then((response) => {

        expect(response.status).to.eq(200)

    })

  });

    

    it('Getsingle', () => {

    cy.request({ 
      
      
      method:'GET',
      url:baseurl+'/api/users/2',
      headers:{
        'Content-Type':'application/json'
      },

      timeout:120000

    }).then((response) => {
        expect(response.status).to.eq(200)
    })
    
    

    });

    
    it('Createpost', () => {

      cy.request({ 
      
      
        method:'POST',
        url:baseurl+'/api/users',
        body:{
          "name": "morpheus",
           "job": "leader"
        },

        headers:{
          'Content-Type':'application/json'
        },
  
        timeout:120000
  
      }).then((response) => {
          expect(response.status).to.eq(201)
          cy.log(JSON.stringify(response.body))
      })
      
    });

    it('updaterequest', () => {

      cy.request({ 
      
      
        method:'PUT',
        url:baseurl+'/api/users/2',
        body:{
           "name": "morpheus",
           "job": "zion resident"
        },

        headers:{
          'Content-Type':'application/json'
        },
  
        timeout:120000
  
      }).then((response) => {
          expect(response.status).to.eq(200)
          cy.log(JSON.stringify(response.body))
      })




  });


  it('Deleterequest', () => {

    cy.request({ 
    
    
      method:'DELETE',
      url:baseurl+'/api/users/2',
      
      headers:{
        'Content-Type':'application/json'
      },

      timeout:120000

    }).then((response) => {
        expect(response.status).to.eq(204)
        cy.log(JSON.stringify(response.body))
    })



});

it('register', () => {

  cy.request({ 
  
  
    method:'POST',
    url:baseurl+'/api/register',

    body:{
      "email": "eve.holt@reqres.in",
      "password": "pistol"
    },
    
    headers:{
      'Content-Type':'application/json'
    },

    timeout:120000

  }).then((response) => {
      expect(response.status).to.eq(200)
      cy.log(JSON.stringify(response.body))
  })


});

it('register unsuccessful', () => {

  cy.request({ 
  
  
    method:'POST',
    url:baseurl+'/api/register',

    body:{
      "email": "sydney@fife",
    },

    failOnStatusCode: false,
    headers:{
      'Content-Type':'application/json'
    },

    timeout:120000

  }).then((response) => {
      expect(response.status).to.eq(400)
      cy.log(JSON.stringify(response.body))
  })


});

it('Login successful', () => {

  cy.request({ 
  
  
    method:'POST',
    url:baseurl+'/api/login',

    body:{
      
    "email": "eve.holt@reqres.in",
    "password": "cityslicka"
    },

    
    headers:{
      'Content-Type':'application/json'
    },

    timeout:120000

  }).then((response) => {
      expect(response.status).to.eq(200)
      cy.log(JSON.stringify(response.body))
  })

});

it('Login unsuccessful', () => {

  cy.request({ 
  
  
    method:'POST',
    url:baseurl+'/api/login',

    body:{
      
    "email": "peter@klaven"
    },

    failOnStatusCode: false,
    headers:{
      'Content-Type':'application/json'
    },

    timeout:120000

  }).then((response) => {
      expect(response.status).to.eq(400)
      cy.log(JSON.stringify(response.body))
  })

});

it('Delay Response', () => {

  cy.request({ 
  
  
    method:'GET',
    url:baseurl+'/api/users?delay=3',

   

    
    headers:{
      'Content-Type':'application/json'
    },

    timeout:120000

  }).then((response) => {
      expect(response.status).to.eq(200)
      cy.log(JSON.stringify(response.body))
  })

});

});
  