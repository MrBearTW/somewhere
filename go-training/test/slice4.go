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
	bbb := fff[:1]
	fmt.Println("bbb:", bbb)
	s1 := append(bbb, "c")
	fmt.Println("fff:", fff)
	fmt.Println("s1:", s1)
	s2 := append(bbb, "d")
	fmt.Println("fff:", fff)
	fmt.Println("s2:", s2)
	fmt.Println("s1:", s1)
	s3 := append(bbb, "e", "f")
	fmt.Println("fff:", fff) //超過原本的容量，就會複製一份到新的位置
	fmt.Println("s3:", s3)
}
