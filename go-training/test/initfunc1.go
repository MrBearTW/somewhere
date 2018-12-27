package main

import (
	_ "./initfuncaaa"
	_ "./initfuncbbb"
	"fmt"
)

func init() {
	fmt.Println("init 1")
}

func init() {
	fmt.Println("init 2")
}
func main() {
	fmt.Println("run main")
}
