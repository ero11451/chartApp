const socket = io.connect('/https://stormy-escarpment-09477.herokuapp.com/');
socket.on("connect",function(){
   
   socket.emit("createMessage",{
      from:"ero osamuyi",
      to:"erosamuyi@gamil.com",  
      mesasage:"this is aa messaeg form the user to the serve"
   })
   socket.on("newmessage",function(res){
      console.log(res) 
   })
})
socket.on("disconnect",function(){
   console.log("this user is disconnected  to the serve yy na")
})

