TInput = int(input())

alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',' ']

def finalCheck():
    answersList = []
    for i in range(TInput):

        N = int(input())

        NameList = []
        for i in range(N):
            NameInput = input()
            NameList.append(NameInput)

        checkedCounterList = []
        for i in range(N):
            checkName(NameList[i])
            checkedCounterList.append(checkName(NameList[i]))

        answer = max(checkedCounterList)
        answersList.append(answer[1])
    return answersList


def checkName(name):
    counter = 0
    for i in range(len(alphabet)):
        if (name.find(alphabet[i]) != -1):
            counter = counter + 1
    return counter, name

answer = finalCheck()
for i in range(TInput):
    print("Case #" + str(i + 1) + ": " + answer[i])
