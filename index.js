/* 
id list

ticketType
single
return
outDepartureDate
outDepartureTime
outDepartureStation
outDestinationStation
inDepartureDate
inDepartureTime
inDepartureStation
inDestinationStation



*/
var conformationJson = {};
var output = "";

function selectTicketType() {
    document.getElementById("single").style.display = "block";
    if (document.getElementById("ticketType").value != "return") {
        document.getElementById("return").style.display = "none";
    }else{
        document.getElementById("return").style.display = "block";
    }

        
}

function getInputData(inputTag){
    conformationJson[inputTag.id] = inputTag.value;
    console.log(inputTag.value);
    console.log(conformationJson[inputTag.id]);
}

function processOrder(){
    output = "";
    processSingle();
    if (document.getElementById("ticketType").value == "return"){
        processReturn();
    }
    var myWindow = window.open('', '', 'height=500, width=500');
    myWindow.document.write('<html><head></head><title>Booking Confirmation</title>');
    myWindow.document.write('<body><h1>Booking Conformation</h1><br/><div>');
    myWindow.document.write(output);
    myWindow.document.write('</div></body></html>');
    myWindow.document.close();
    //setTimeout(() => {myWindow.print()},250);
}

function processSingle(){
    output += "<h2>Outbound</h2><br/><p>Date: " 
            + conformationJson["outDepartureDate"]
            + "<br/>Time: " + conformationJson["outDepartureTime"]
            + "<br/>Station: " + conformationJson["outDepartureStation"]
            + "<br/>Destination: " + conformationJson["outDestinationStation"]
            + "<br/>";
}

function processReturn(){
    output += "</div><div><h2>Inbound</h2><br/><p>Date: "
            + conformationJson["inDepartureDate"]
            + "<br/>Time: " + conformationJson["inDepartureTime"]
            + "<br/>Station: " + conformationJson["inDepartureStation"]
            + "<br/>Destination: " + conformationJson["inDestinationStation"]
            + "<br/>";
}