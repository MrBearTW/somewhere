package main

import (
	"fmt"
)

var name string
var num int
var (
	name2 string
	num2  int
)
var name3 string = "luna"
var num3 int = 20809

const (
	Monday = iota + 1
	Tuesday
	Wendesday
)

func main() {
	name = "xmas"
	num = 1225
	name2 = "newyear"
	num2 = 101
	fmt.Println(name)
	fmt.Println(num)
	fmt.Println(name2)
	fmt.Println(num2)
	fmt.Println(name3)
	fmt.Println(num3)
	name4 := "spring"
	num4 := 404
	fmt.Println(name4)
	fmt.Println(num4)
	fmt.Println(Monday)
	fmt.Println(Tuesday)
}
