
        
var pinCode=prompt("Enter Your Pin Code");

if (pinCode==123){
    var withdraw=prompt("1:Withdraw 2:Bank Transfer 3:Balance Inq 4:Quit");
    if (withdraw==1){
        var withdrawAmount=prompt("1:500 2:1000 3:1500 4:Other ")
    }
    else if (withdraw==2){
       var transferAmount = prompt("raashi traansaphar karane ke lie khaata sankhya darj karen")
        prompt("is khaate mein raashi sthaanaantarit karane ke lie raashi darj karen  "+transferAmount)
        alert("aapakee raashi hastaantarit kar dee gaee hai")        
    }
    else if(withdraw==3){
        alert("aapake paas 75000 rupaye hain")
    }
    else if (withdraw==4){
        alert("hamaare ATM ka upayog karane ke lie dhanyavaad")
    }
    if(withdrawAmount==1){
        alert("aapake khaate se 500 rupe nikal gae hain")
    }
    else if (withdrawAmount==2){
        alert("aapake khaate se 1000 rupe nikal gae hain")
    }
    else if (withdrawAmount==3){
    alert("aapake khaate se 1500 rupe nikal gae hain")
    
}
    else if (withdrawAmount==4){
        var customAmount =prompt("vah raashi darj karen jo aap chaahate hain")
    }
    if (withdrawAmount==4){
        alert("aapake khaate se  " +customAmount+ " rupe nikal gae hain")
    }
}
else{
    alert("krpaya sahee paasavard darj karen")
}
