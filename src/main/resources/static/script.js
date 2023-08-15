
var stompClient = null

function connect(){
  alert('connect');
  let socket = new SockJs("/server1")
  stompClient = Stomp.over(socket)
  stompClient.connect({},function(frame){
    console.log("Connected: "+frame)
  })
}

$(document).ready((e)=>{
  $("#login").click(()=>{
    let name = $("#name-value").val()
    localStorage.setItem("name",name)
    connect()
  })
})
