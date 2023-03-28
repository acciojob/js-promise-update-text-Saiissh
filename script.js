var prom=new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve('Hello, world!');
  },1000);
})

function onpass(data){

    document.getElementById('output').innerText=data;
}

prom.then(onpass).catch(error);