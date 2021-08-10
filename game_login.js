function addUser()
{
    player1_input=document.getElementById("player1_name_input").value;
    player2_input=document.getElementById("player2_name_input").value;
    
    localStorage.setItem("player1_name", player1_input);
    localStorage.setItem("player2_name", player2_input);

    window.location="game_page.html"
}