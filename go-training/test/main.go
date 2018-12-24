package main

import (
	"fmt"
	//1  "./helloworld"
	//2  bar "./helloworld"
	_ "./he"
	_ "./helloworld"
)

func main() {
	//1  fmt.Println(hello.Helloworld())
	//2  fmt.Println(bar.Helloworld())
	fmt.Println("Helloworld")
}
