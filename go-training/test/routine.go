package main

import (
	"fmt"
	"time"
)

func do(i int) {
	fmt.Println(i)
}

func main() {
	go do(1)
	go do(2)
	go do(3)

	msg := "Have a good day"
	/*
		go func(input string) {
			fmt.Println(input)
		}(msg)
			//  go run -race .\routine.go 不會有問題
	*/

	go func() {
		fmt.Println(msg)
	}()
	//  go run -race .\routine.go 會有問題

	msg = "Have a good time"
	time.Sleep(1 * time.Second)
}
