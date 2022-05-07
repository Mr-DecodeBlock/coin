const Web3 = require('web3');

window.onload = ()=>{
    let web3;
    let from;
   

    const connect = document.getElementById('connect')
    const content = document.getElementById('content')
    const miAddress = document.getElementById('miAddress')


    const send = document.getElementById('send')
    const address = document.getElementById('address')
    const cantidad = document.getElementById('cantidad')

    const conectar = async()=>{
        if(window.ethereum){
            try {
               await window.ethereum.request({method: 'eth_requestAccounts'})
               web3 = new Web3(window.ethereum)
               const cuenta = await web3.eth.getAccount()
               from = cuenta[0]

               content.style.display = 'initial'
               miAddress.innerHTML = from;
               connect.style.display = 'none'


            } catch (error) {
                alert('Conexión exitosa a metamask')
                
            }
        }else{
            alert('No tienes provedor Web3')
        }
    }
    const transaccion = (e)=>{
        e.preventDefault()
        let direccion = address.value
        let monto = cantidad.value

        if(monto <= 0){
            alert('La cantidad no es suficiente')
            return;
        }
        if(!web3.utils.isAddress(direccion)){
            alert('La direccion no es correcta')
            return;
        }
        web3.eth.sendTransaction({from: from, to: direccion, value: monto})
    }

    connect.onclick = conectar;
    send.onsubmit = transaccion;
}

export default metamask;