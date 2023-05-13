user_wins = False
attempts = 0
attempt_word = ""
import random
answer = random.randint(1,100)
#print(answer)

while user_wins != True:
    guess = input("Enter a number between 1 and 100 : ")
    try:
        guess_number = int(guess)
    except:
        print("Error: You need to enter a valid number!")
        quit()

    attempts += 1

    if guess_number == answer:
        user_wins = True
    elif guess_number > answer:
        print("The secret number is smaller!")
    else:
        print("The secret number is bigger!")

if attempts == 1:
    attempt_word = " attempt"
else: 
    attempt_word = " attempts"

print("You won !! You took " + str(attempts) + attempt_word)