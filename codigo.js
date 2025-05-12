function testa() {
  function removerAcentos(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

  var n = document.forms["myform"]["nome"].value;
  var o = document.forms["myform"]["email"].value;
  var p = document.forms["myform"]["senha"].value;
  var q = document.forms["myform"]["confsenha"].value;
  var s = document.forms["myform"]["signo"].value.toLowerCase();
  var r = document.forms["myform"]["km"].value;
  var t = parseFloat(r);

  var sig = removerAcentos(s);

  if (n == null || n == "") {
    alert("O seu Nome precisa ser informado");
    return false;
  }
  if (o == null || o == "") {
    alert("O seu e-mail precisa ser informado");
    return false;
  } else {
    var e = document.forms["myform"]["email"].value;
    var arrobapos = e.indexOf("@");
    if (arrobapos < 1) {
      alert("Endereço de E-mail invalido. Por Favor digite um E-mail válido");
      return false;
    }
  }
  if (p == null || p == "") {
    alert("A senha precisa ser informada");
    return false;
  } else {
    if (document.forms["myform"]["senha"].value.length < 8) {
      alert("Senha muito pequena. Digite pelo menos 8 caracteres.");
      return false;
    }
  }
  if (q == null || q == "") {
    alert("Informe a senha novamente para confirmar");
    return false;
  } else {
    if (p != q) {
      alert("Senhas diferentes. Tente de novo.");
      return false;
    }
  }

  if (r == null || r == "") {
    alert("A km percorrida precisa ser informada");
    return false;
  }

  if (s == null || s == "") {
    alert("O seu Signo precisa ser informado");
    return false;
  } else {
    var valor = 5.00 + (1.50 * t);
    switch (sig) {
      case 'aries':
        alert('O periodo do seu Signo é: 21 de março – 19 de abril e pertence ao Elemento: Fogo; \n E o valor da corrida é: ' + valor);
        break;
      case 'touro':
        alert('O periodo do seu Signo é: 20 de abril – 20 de maio e pertence ao Elemento: Terra; \n E o valor da corrida é: ' + valor);
        break;
      case 'gemeos':
        alert('O periodo do seu Signo é: 21 de maio – 20 de junho e pertence ao Elemento: Ar; \n E o valor da corrida é: ' + valor);
        break;
      case 'cancer':
        alert('O periodo do seu Signo é: 21 de junho – 22 de julho e pertence ao Elemento: Água; \n E o valor da corrida é: ' + valor);
        break;
      case 'leao':
        alert('O periodo do seu Signo é: 23 de julho – 22 de agosto e pertence ao Elemento: Fogo; \n E o valor da corrida é: ' + valor);
        break;
      case 'virgem':
        alert('O periodo do seu Signo é: 23 de agosto – 22 de setembro e pertence ao Elemento: Terra; \n E o valor da corrida é: ' + valor);
        break;
      case 'libra':
        alert('O periodo do seu Signo é: 23 de setembro – 22 de outubro e pertence ao Elemento: Ar; \n E o valor da corrida é: ' + valor);
        break;
      case 'escorpiao':
        alert('O periodo do seu Signo é: 23 de outubro – 21 de novembro e pertence ao Elemento: Água; \n E o valor da corrida é: ' + valor);
        break;
      case 'sagitario':
        alert('O periodo do seu Signo é: 22 de novembro – 21 de dezembro e pertence ao Elemento: Fogo; \n E o valor da corrida é: ' + valor);
        break;
      case 'capricornio':
        alert('O periodo do seu Signo é: 22 de dezembro – 19 de janeiro e pertence ao Elemento: Terra; \n E o valor da corrida é: ' + valor);
        break;
      case 'aquario':
        alert('O periodo do seu Signo é: 20 de janeiro – 18 de fevereiro e pertence ao Elemento: Ar; \n E o valor da corrida é: ' + valor);
        break;
      case 'peixes':
        alert('O periodo do seu Signo é: 19 de fevereiro – 20 de março e pertence ao Elemento: Água; \n E o valor da corrida é: ' + valor);
        break;
      default:
        alert("Signo não encontrado! \n Contudo o valor da corrida é: " + valor);
        break;
    }
  }

}