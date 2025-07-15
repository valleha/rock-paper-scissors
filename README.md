This project is part of The Odin Project. 
The task is to write a program that lets you play "rock paper scissors".
The game will be played in the console.
 
 Step 1: Write logic to get computer choice:
 Math.random() outputs random number between 0 and 1
 Multiply output by thirty and round down to integer
 This outputs an integer between 1 and 30
 Return Rock if output between 1 and 10
 Return Paper if output between 11 and 20
 Return Scissors if output between 21 and 30

 Step 2: Write logic to get user choice:
 (Under the assumptiokn that the user input will always be one of the three choices.)
 Get user input through prompt()
 Return user input

 Step 3: Declare winner and player scores:
 Define variables humanScore and computerScore and set to 0
 Define playround function that compares computer choice and human choice
    If choice equal its a tie no score output
    If human choice rock and computer paper, output plus one to computerScore
    If human choice rock and computer scissors, output plus one to humanScore
    If human choice paper and computer scissors, output plus one to computerScores
    if human choice paper and computer rock, output plus one humanScore
    if human choice scissors and computer rock, output plus one to computerScore 
    if human choice scissors and computer paper, output plus one to humanScore
    It also prints a string to the console declaring the winner.
Return current score "The score is " + humanScore + " to " computerScore



