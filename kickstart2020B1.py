T = int(input())

def main():
    answers = []
    for i in range(T):
        N = int(input())
        HInput = input()

        H = HInput.split()
        H = list(map(int, H))

        answers.append(heightCheck(T,N,H))
    return answers

def heightCheck(T,N,H):
    counter = 0
    for i in range(0, len(H) - 1):
        if i != 0 or i != -1:
            if H[i] > H[i - 1] and H[i] > H[i + 1]:
                counter = counter + 1
    return counter

finalAnswers = main()
for i in range(T):
    print(f"Case #{i + 1}: " + str(finalAnswers[i]))
