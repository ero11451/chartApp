var socket = io.connect(window.location.hostname);
socket.on("connect",function(){
   // kdlk
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

