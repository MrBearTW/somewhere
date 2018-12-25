package main

import (
	"fmt"
)

func main() {
	fff := func() string {
		return "hohoho"
	}
	fmt.Println(fff())

	fff2 := func() {
		fmt.Println("hehehe")
	}
	fff2()

	func() {
		fmt.Println("hahaha")
	}()

	//在背景執行？
	go func(i, j int) {
		fmt.Println(i + j)
	}(1, 2)
}
