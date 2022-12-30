
    
     // dataBase
    let passRows = [];
        
    // console.log(size)

    
function start(){
    let size= + document.getElementById('charNum').value
    
    let newPassword = '';
    let character = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789' ;
    const generateRandomPassword = (size) =>{
        
        
        for (let i=0;i<size;i++){
            newPassword += character.charAt(Math.floor(Math.random()*character.length));
        }
         return newPassword
         // verificar se nao precisa chamar addRow aqui
         
    }

    const addPassRow = ()=>{
        // document.getElementById('newPass').value = newPassword
        const passId = passRows.length +1
        const startDate = document.getElementById('startDate').value;
        const endDate = document.getElementById('endDate').value; 
        const newPass = newPassword;
    
        passRows.push({
          id: passId,
          startDate: startDate,
          endDate: endDate,
          password: newPass
        });

    }
   
    function renderTable() {
        const table = document.getElementById('dataTable');
        table.innerHTML = `
        <table class="table table-dark">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Inicio</th>
            <th scope="col">Fim</th>
            <th scope="col">Senha</th>
            <th scope="col">Ações</th>
          </tr>
        </thead>
      </table>`;
    
        passRows.forEach(passRow => {
          const row = `
          <tbody>
            <tr>
              <td>${passRow.id}</td>
              <td>${passRow.startDate}</td>
              <td>${passRow.endDate}</td>
              <td>${passRow.password}</td>
              <td>
                <button class="btn btn-secondary btn-sm" onclick="showEditForm(${passRow.id})">Edit</button>
                <button class="btn btn-secondary btn-sm" onclick="deleteEmployee(${passRow.id})">Delete</button>
              </td>
            </tr>
          </tbody>
          `;
    
          table.innerHTML += row;
          
        });
        
    }
  


      generateRandomPassword(size)
      addPassRow()
      renderTable();
       
  }

// add Passwords:


    
    
  
