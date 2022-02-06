function copyPass(){
      // Create an instance of Notyf
var notyf = new Notyf({
      duration:2000,
      position: {
            x:'center',
            y:'bottom'
      },
});          

// Display a success notification
notyf.success('Copiado com sucesso !');
}
