"""
    When starting the game, a secret number between 1 and 100 is generated.
    The game asks the user to enter a number.
    The game will tell the user if the secret number is bigger or smaller than the guess.
    As long as the user doesn't find the secret number, the game continues.
    As soon as the user finds the secret number, the game stops and tells the user how many attempts it took to win. Make sure to use the right wording (attempt or attempts)
    In case the user enters anything else than a number, the game should tell that to the user and quit gracefully.
"""

user_input = False
essais = 0
mot_essais = ""
import random
random_number = random.randint(0, 100)
#print(random_number)

   
while int(user_input) != random_number:
    user_input = input("Enter a number : ")
    try:
      user_guess = int(user_input)
    except:
      print("You need to enter a valid number !")
      quit()
    essais +=1
    if int(user_input) > random_number:
      print("smaller")
    elif int(user_input) < random_number:
      print("bigger")
    else:
       if essais == 1:
        mot_essais = " essai"
       else:
        mot_essais = " essais"
print("ok, you win in " + str(essais) + mot_essais)

# REUSSI à MA MANIERE - POSSIBILITé D'INDENTER UN IF/ELSE DANS UN IF/ELSE


    


 



    


