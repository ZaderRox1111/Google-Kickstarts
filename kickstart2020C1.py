# This program determines how many [K, K-1, K-2, ..., 2, 1] subarrays are in a given list
#
# Ex:
# Input                     Output
# 3                         
# 12 3
# 1 2 3 7 9 3 2 1 8 3 2 1   Case #1: 2
# 4 2                       Case #2: 0
# 101 100 99 98             Case #3: 1
# 9 6
# 100 7 6 5 4 3 2 1 100

T = int(input())

def main():
    answers = []
    for _ in range(T):
        N_K = input()
        A = input()

        N_K = N_K.split()
        A = A.split()

        N_K = list(map(int, N_K))
        A = list(map(int, A))

        answers.append(checkK(N_K[1], A))
    return answers

def checkK(K, listA):
    counter = 0
    for i in range(len(listA)):
        if listA[i] == K:
            for j in range(K):
                if K-j == listA[i+j]:
                    if K-j == 1:
                        counter += 1
    return counter

finalAnswers = main()
for i in range(T):
    print(f"Case #{i + 1}: " + str(finalAnswers[i]))
