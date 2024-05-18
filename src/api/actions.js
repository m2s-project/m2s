export const  save =(state)=>window.api.save(state)
export const  close =(state)=>window.api.close(state)
export const  print =(state)=>window.api.print(state)
export const  minimize =()=>window.api.minimize()
export const  maximize =()=>window.api.maximize()
export const  db =(channel)=>window.api.db(channel)
    
// export function receive() {

//     console.log("receive");
//     window.api.receive("fromMain", (data) => 
//         console.log(`Received ${data} from main process`)
//     );
// }

// function send(data) {
//     window.api.send("toMain", data);
// }
// export const receive =window.api.receive("fromMain", (data) => {
//     console.log(`Received ${data} from main process`);
// });
// export const send =window.api.send("toMain", "some data");