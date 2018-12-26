package main

import (
	"fmt"
)

//pass slice as function argument

//直接取那個位置出來修改 但不建議這樣寫

/*
func addValue(fff *[]string) {
	*fff = append(*fff, "c")
	fmt.Println("append fff", fff)
}

func main() {
	fff := []string{"a", "b"}
	fmt.Println("before fff:", fff)
	addValue(&fff)
	fmt.Println("after fff:", fff)
}
*/

// 另一種寫法

func addValue(fff []string) []string {
	fff = append(fff, "c")
	fmt.Println("append fff", fff)
	return fff
}

func main() {
	fff := []string{"a", "b"}
	fmt.Println("before fff:", fff)
	fff = addValue(fff)
	fmt.Println("after fff:", fff)
}
