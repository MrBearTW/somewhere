package main

import (
	"fmt"
)

func add(i, j int) int {
	return i + j
}
func swap(i, j int) (int, int) {
	return j, i
}

func main() {
	//fmt.Println(add(1, 2))

	a := 8
	b := 7
	a, b = swap(a, b)
	fmt.Println(a, b)
	a, b = b, a
	fmt.Println(a, b)

}
