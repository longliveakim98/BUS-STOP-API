const result = document.getElementById('result');
const inputBox = document.getElementById('input-box');

    async function fetchBus(inputBox){
        const resp = await fetch(`https://arrivelah2.busrouter.sg/?id=${inputBox}`);
        const data = await resp.json();
        const services = data.services;
        result.innerHTML=''
        for (const service of services) {
            const busNo = service.no;
            const durationMs = service.next.duration_ms;
            const arrivalTimeMinutes = Math.ceil(durationMs / 60000); // Convert milliseconds to minutes   
            if(arrivalTimeMinutes<1){
                result.innerHTML = `<p class="text-white"><strong>Bus No : </strong>${busNo} , <strong>Duration : </strong>Arriving...</p>`;
            } else{       
            result.innerHTML += `<p class="text-white"><strong>Bus No : </strong>${busNo} , <strong>Duration : </strong>${arrivalTimeMinutes} mins</p>`;
        }
        }
    } 
    
    
    