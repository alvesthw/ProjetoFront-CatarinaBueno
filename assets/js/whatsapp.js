document.getElementById('sendBtn').addEventListener('click', function() {
    // Coletando os valores dos campos
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;

    // Validando os campos obrigatórios
    if (name === "" || email === "" || message === "") {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return;
    }

    // Montando a mensagem
    var whatsappMessage = "Nome: " + name + "%0A" +
                          "Email: " + email + "%0A" +
                          "Assunto: " + subject + "%0A" +
                          "Mensagem: " + message;

    // Número de telefone para o qual a mensagem será enviada
    var phoneNumber = "5511949763226"; // Coloque o número do WhatsApp aqui (com DDI e DDD)

    // URL do WhatsApp com a mensagem
    var whatsappUrl = "https://api.whatsapp.com/send?phone=" + phoneNumber + "&text=" + whatsappMessage;

    // Redirecionar para o WhatsApp
    window.open(whatsappUrl, '_blank');
});

// -------------------------------------------
// Edição do newssss
// -------------------------------------------
function showAlert(event) {
    event.preventDefault(); // Previne o envio do formulário
    alert("Você foi inscrito, agora você receberá em seu email notícias sobre Pediatria.");
}