async function getAddressByCep() {
  const cep = document.getElementById('cep').value
  try {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    const data = await response.json()
    console.log(data)
    document.getElementById('rua').value = data.logradouro
    document.getElementById('bairro').value = data.bairro
    document.getElementById('cidade').value = data.localidade
  } catch {
    console.log(error)
  }
}

async function getWeather() {
  const lat = document.getElementById('latitude').value
  const long = document.getElementById('longitude').value
  try {
    const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=temperature_2m`)
    const data = await response.json()
    console.log(data)
    document.getElementById('resposta').innerHTML = ""
    for( let index = 0; index < data.hourly.temperature_2m.length; index ++) {
      document.getElementById('resposta').innerHTML += `<div>${data.hourly.time[index]} - ${data.hourly.temperature_2m[index]}`
    }
  } catch {
    alert(error)
  }
}