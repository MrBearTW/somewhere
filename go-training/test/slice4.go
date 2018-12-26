package main

import (
	"fmt"
)

//pass slice as function argument
func addValue(fff []string) {
	fff = append(fff, "c")
	fmt.Println("append fff", fff)
}

func main() {
	fff := []string{"a", "b"}
	fmt.Println("before fff:", fff)
	addValue(fff)
	fmt.Println("after fff:", fff)
}
