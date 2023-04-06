const formIdade = document.getElementById("formIdade");
		formIdade.addEventListener("submit", function(event) {
			event.preventDefault();
			const idade = Number(document.getElementById("inputIdade").value);

			let mensagem = "";

			if (idade <= 12) {
				mensagem = "Você é uma criança.";
			} else if (idade <= 18) {
				mensagem = "Você é um adolescente.";
			} else if (idade <= 60) {
				mensagem = "Você é um adulto.";
			} else {
				mensagem = "Você é um idoso.";
			}

			alert(mensagem);
		});