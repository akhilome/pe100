/*
Q: Sum of Even Fibonacci Numbers
*/

package main

func getFiboSeq(max int) []int {
	fibSeq := []int{1}

	for i := 1; i < max; i++ {
		lastEnt := fibSeq[len(fibSeq)-1]
		lastTwo := 1
		if len(fibSeq) > 1 {
			lastTwo = fibSeq[len(fibSeq)-2]
		}
		fibSeq = append(fibSeq, lastEnt+lastTwo)
	}

	return fibSeq
}

func isEven(num int) bool {
	return num%2 == 0
}

func getEven(numArr []int) []int {
	evens := []int{}

	for _, num := range numArr {
		if isEven(num) {
			evens = append(evens, num)
		}
	}

	return evens
}

func getSum(numbers []int) int {
	sum := 0

	for _, number := range numbers {
		sum += number
	}
	return sum
}

func fiboEvenSum(n int) int {
	return getSum(getEven(getFiboSeq(n)))
}

func main() {
	println(fiboEvenSum(10))
}
