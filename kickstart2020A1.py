#Code for Round A 2020 - Kick Start 2020, Allocation

TInput = int(input())

def testNumbers(T):
    #creates an empty list to store the test numbers
    housesList = []
    #takes the input for all the tests
    for i in range(0, T):
        N_BInput = input()
        AInput = input()
        
        #splits the inputs between the spaces and makes a list
        N_B = N_BInput.split()
        A = AInput.split()

        #turns list components into integers instead of strings
        N_B = list(map(int, N_B))
        A = list(map(int, A))

        #sorts the 'prices' of the homes, lowest first
        A.sort()
        
        #A list containing the amount of houses that they can buy using the above inputs
        housesList.append(houses(N_B, A))
    return housesList

#This checks how many houses the person can buy
def houses(N_B, A):
    totalCost = 0
    ACounter = 0
    #Adds the prices of the houses until they run out of money
    for i in range(len(A)):
        totalCost = totalCost + A[i]
        if totalCost > N_B[1]:
            return ACounter
         
        ACounter = ACounter + 1
    return ACounter

#takes the housesList and makes it into a new list seperate from the function testNumbers(T)
endList = testNumbers(TInput)
for i in range(2):
    print("Case #" + str(i + 1) + ": " + str(endList[i]))



#What this program does/example

#Inputs:        Outputs:
#3
#4 100
#20 90 40 90    Case #1: 2 
#4 50           Case #2: 3 
#30 30 10 10    Case #3: 0 
#3 300
#999 999 999
