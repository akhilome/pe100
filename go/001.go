/*
Q: Find the sum of all the multiples of 3 or 5 below 1000.
*/

package main

func getSum(numbers []int) int {
	sum := 0

	for _, number := range numbers {
		sum += number
	}
	return sum
}

func isMultiple(number int) bool {
	return number%3 == 0 || number%5 == 0 || false
}

func genMultiples(max int) []int {
	multiples := []int{}
	for i := 1; i < max; i++ {
		if isMultiple(i) {
			multiples = append(multiples, i)
		}
	}
	return multiples
}

func getMultSum(max int) int {
	multiples := genMultiples(max)
	sum := getSum(multiples)
	return sum
}

func main() {
	println(getMultSum(1000)) // 233168
}
