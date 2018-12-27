package main

import (
	"fmt"
)

func checkValue(s int) {
	switch s {
	/*
		case 0:
			fallthrough
		case 1:
			fmt.Println("check value is", s)
	*/
	case 0, 1:
		fmt.Println("check value is", s)
	}
}

func main() {
	checkValue(0)
	checkValue(1)
}
