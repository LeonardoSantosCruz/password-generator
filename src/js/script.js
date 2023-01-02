let passRows = [];
      

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
        // 
        const passId = passRows.length +1
        const startDate = document.getElementById('startDate').value;
        const endDate = document.getElementById('endDate').value; 
        
        if (startDate > endDate){
          alert('Intervalo entre início e fim incorretos!');
        } else{
          passRows.push({
            id: passId,
            startDate: startDate,
            endDate: endDate,
            password: newPassword
          });
        }
        

    }
    generateRandomPassword(size)

    addPassRow()
    renderTable()
   
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
            <button class="btn btn-secondary btn-sm" onclick="deletePassRow(${passRow.id})">Delete</button>
          </td>
        </tr>
      </tbody>
      `;

      table.innerHTML += row;
      
    });
    
}
  

   
  function showEditForm(id) {
    const editedPass = passRows.find(passRow => passRow.id == id);

    document.getElementById('edit-id').value = editedPass.id;
    document.getElementById('edit-start-date').value = editedPass.startDate;
    document.getElementById('edit-end-date').value = editedPass.endDate;
    document.getElementById('edit-password').value = editedPass.password;
    document.getElementById('edit-form').style.display = 'block';
    
  }
  function hideEditForm() {
    document.getElementById('edit-form').style.display = 'none';
  }

  function updatePassRow() {
    //gera novas variaveis buscando no formulário de edição
  const id = document.getElementById('edit-id').value;
  const editStartDate = document.getElementById('edit-start-date').value;
  const editEndDate = document.getElementById('edit-end-date').value;
  const password = document.getElementById('edit-password').value
  const passIndex = passRows.findIndex(passRow => passRow.id == id);
  passRows[passIndex] = { id: id, startDate: editStartDate, endDate: editEndDate, password: password };
  console.log(passRows[passIndex])

  hideEditForm();
  renderTable();
  
}

  renderTable();


  function deletePassRow(id) {
    passRows = passRows.filter(passRow => passRow.id != id);
    renderTable();
  }
    



