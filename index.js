
document.addEventListener('keydown',check_message);
function check_message(e){ // this function is triggered everytime a key is pressed
    let message = document.getElementById('message').value;
    let button = document.getElementById('send');
   
    if(e.code == "Enter"){
      send_message();
    }
    else if(message.length >= 5){
      button.style.opacity = 0.85;
    }
    else{
      button.style.opacity = 0.45;
    }
  
}
function send_message(){
   let button = document.getElementById('send');
   let message = document.getElementById('message').value;
   if(message.length >= 5){
      document.getElementById('chat_container').scrollTop = 1000;
      document.getElementById('message').value = "";
      button.style.opacity = 0.45;
      button.style.animation = "button_pulse 0.5s ease-in-out";
      create_user_message(message);
      
      setTimeout(()=>{ //reset the button animation so it can be use again
          button.style.animation = "";
      },500);
      
      setTimeout(()=>{// calls the loading function
          add_loading_message();
      },500);
      
      setTimeout(() =>{ 
          create_bot_message(message);
      },10000);
    }
    else{
        return;
    }
}
function create_user_message(message){ //this function creates a new message bubble for the user's input
    let chat_container = document.getElementById('chat_container'); // initialize the chat container
    let user_row = document.createElement('div');// creates a div for the user row
    user_row.className = "user_row"; // specify the class name for css styling and tagging
    let user_bubble = document.createElement('div'); // creates a user chat bubble from scratch
    user_bubble.id = "user_bubble"; //add tag to the user bubble for styling
    let text = document.createElement('p'); // creates a paragraph tag where the user text is located
    text.innerText = message; // adds message to the bubble
    user_bubble.appendChild(text);
    user_row.appendChild(user_bubble);
    chat_container.appendChild(user_row);
    chat_container.scrollTop = 1000;// this allows the content to scroll up automatically
}

function create_bot_message(message){ //this function creates a new message bubble for the AI
    let chat_container = document.getElementById('chat_container');
    chat_container.removeChild(document.getElementById('loading')); // this line removoes the loading dialogue
    let bot_row = document.createElement('div');
    bot_row.className = "bot_row";
    let bot_bubble = document.createElement('div');
    bot_bubble.id = "bot_bubble";
    let text = document.createElement('p');
    text.innerText = message; 
    bot_bubble.appendChild(text);
    bot_row.appendChild(bot_bubble);
    chat_container.appendChild(bot_row);
    chat_container.scrollTop = 1000; // this allows the content to scroll up automatically
}
function add_loading_message(){//this function create a loading dialogue for the AI response
    let chat_container = document.getElementById('chat_container');
    let bot_row = document.createElement('div');
    bot_row.className = "bot_row";
    bot_row.id = "loading";
    let bot_bubble = document.createElement('div');
    bot_bubble.id = "bot_bubble";
    let circle01 = document.createElement('div');
    let circle02 = document.createElement('div');
    let circle03 = document.createElement('div');
    circle01.id = "circle_load";
    circle02.id = "circle_load";
    circle03.id = "circle_load";
    circle01.style.animation = "blink_loading 2s ease-in-out 0s infinite";
    circle02.style.animation = "blink_loading 2s ease-in-out 0.5s infinite";
    circle03.style.animation = "blink_loading 2s ease-in-out 1s infinite";

    bot_bubble.appendChild(circle01);
    bot_bubble.appendChild(circle02);
    bot_bubble.appendChild(circle03);
    bot_row.appendChild(bot_bubble);
    chat_container.appendChild(bot_row);
    chat_container.scrollTop = 1000;
}