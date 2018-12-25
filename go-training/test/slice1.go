package main

import (
	"fmt"
)

//pass slice as function argument
func modify(fff []string) {
	fff[1] = "c"
	fmt.Println("modify fff", fff)
}

func main() {
	fff := []string{"a", "b"}
	fmt.Println("before fff:", fff)
	modify(fff)
	fmt.Println("after fff:", fff)
}
