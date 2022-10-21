function buscaCEP() {
    const cepDigitado = document.getElementById('cep').value
    const url = "https://viacep.com.br/ws/"+cepDigitado+"/json/"

    const req = new XMLHttpRequest()
    req.open('GET', url, true)
    req.onload = () => {
      const respostaAPI = JSON.parse(req.response)

      if("erro" in respostaAPI){
        alert('CEP inválido!')
        return
      }
    console.log(respostaAPI)

      document.getElementById('logradouro').value = respostaAPI.logradouro
      document.getElementById('municipio').value = respostaAPI.localidade
      document.getElementById('bairro').value = respostaAPI.bairro
      document.getElementById('uf').value = respostaAPI.uf
    }
    req.send()
  }

function achaCEP(){
    const uf = document.getElementById('estado').value
    const cidade = document.getElementById('cidade').value
    const rua = document.getElementById('rua').value
    const url1 = "https://viacep.com.br/ws/"+uf+"/"+cidade+"/"+rua+"/json/"

    const req1 = new XMLHttpRequest()
    req1.open('GET', url1, true)
    req1.onload = () => {
      const resposta = JSON.parse(req1.response)
      for(var i in resposta){
        const h1 = document.createElement('h1')
        h1.innerHTML = resposta[i].cep 
        console.log(resposta[i].cep)
        //document.appendChild(h1)
        var j = document.getElementById('ceps1')
        j.appendChild(h1)

        const h2 = document.createElement('h2')
        h2.innerHTML = resposta[i].logradouro
        console.log(resposta[i].logradouro)
        //document.appendChild(h1)
        var h = document.getElementById('ceps2')
        h.appendChild(h2)

        const h3 = document.createElement('h3')
        h3.innerHTML = resposta[i].bairro
        console.log(resposta[i].bairro)
        //document.appendChild(h1)
        var k = document.getElementById('ceps3')
        k.appendChild(h3)

        var ib = document.createElement('input')
        ib.value = resposta[i].bairro
        var coluna = document.getElementById('c1')
        coluna.appendChild(ib)

        var il = document.createElement('input')
        il.value = resposta[i].logradouro
        var coluna1 = document.getElementById('c2')
        coluna1.appendChild(il)

        var ic = document.createElement('input')
        ic.value = resposta[i].cep
        var coluna2 = document.getElementById('c3')
        coluna2.appendChild(ic)
      }
      console.log(resposta)
      
    }
    req1.send()
  }
