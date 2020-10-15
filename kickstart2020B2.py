#This code takes the maximum coefficient (maximum days multiplier) of each bus route, progressively
#starting from the final day of the journey, moving down until there are no more bus routes needed.
#
# ex:
#bus routes (every # days)= [5, 9], final day = 100
#coefficient_2 = 100 // 9
#coefficient_1 = (coefficient_2 * 9) // 5
#
#another example:
#input          output
#3                  
#3 10
#3 7 2          Case#1: 6
#4 100          Case#2: 99
#11 10 5 50     Case#3: 1
#1 1
#1

T = int(input())

def main():
    answers = []
    #repeats this for as many T (tests) there are, then adds each answer to the ^answers list
    for i in range(T):
        N_D = input()
        X = input()

        N_D = N_D.split()
        X = X.split()

        N_D = list(map(int, N_D))
        X = list(map(int, X))
        
        #calculates the original coefficient
        c = N_D[1] // X[-1]
        if (N_D[0] != 1):
            for j in range(0, len(X)-1):
                c = (c * X[-1-j]) // X[-2-j]
        answers.append(c * X[0])
    return answers

finalAnswers = main()
for i in range(T):
    print(f"Case#{i + 1}: " + str(finalAnswers[i]))
