##############################################################
# Q: Find the sum of all the multiples of 3 or 5 below 1000. #
##############################################################

import functools


def get_sum(arr):
    return functools.reduce(lambda x, y: x + y, arr)


def is_multiple(number):
    if number % 3 == 0 or number % 5 == 0:
        return True
    else:
        return False


def gen_multiples(max):
    multiples = []
    for x in range(1, max):
        if is_multiple(x):
            multiples.append(x)

    return multiples


def get_mult_sum(number):
    multiples = gen_multiples(number)
    sum = get_sum(multiples)
    return sum


sum = get_mult_sum(1000)
print(sum)  # 233168
