describe('reqres', () => {

    const baseurl ="https://reqres.in";

    it('Getstatus', () => {

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

    



  });
  