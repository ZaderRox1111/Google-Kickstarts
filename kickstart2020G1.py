T = int(input())

def main():
    answers = []
    for i in range(T):
        text = input().upper()

        count = check_for_fragments(text)
        answers.append(count)

    return answers


def check_for_fragments(text):
    k = -1
    s = -1
    kicks = []
    starts = []
    while True:
        k = text.find('KICK', k+1)
        if k == -1:
            break
        kicks.append(k)
    while True:
        s = text.find('START', s+1)
        if s == -1:
            break
        starts.append(s)

    counter = 0
    for start_i in starts:
        for kick_i in kicks:
            if kick_i < start_i:
                counter += 1

    return counter


answers = main()
for i in range(T):
    print(f"Case #{i + 1}: {answers[i]}")
