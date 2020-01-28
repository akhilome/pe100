##############################################################
# Q: Sum of Even Fibonacci Numbers                           #
##############################################################

from functools import reduce


def get_fibo_seq(max, start=1):
    fib_seq = [start]

    for _ in range(1, max):
        last_ent = fib_seq[-1]
        last_two = 1
        if len(fib_seq) > 1:
            last_two = fib_seq[-2]
        fib_seq.append(last_ent + last_two)
    return fib_seq


def is_even(num): return num % 2 == 0


def get_even(num_list): return list(filter(lambda x: is_even(x), num_list))


def get_sum(num_list): return reduce(lambda x, y: x + y, num_list)


def fibo_even_sum(n): return get_sum(get_even(get_fibo_seq(n)))


sum = fibo_even_sum(10)
print(sum)  # 44
