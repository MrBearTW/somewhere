package main

import (
	"fmt"
	"sync"
	"time"
)

func do(i int, wg *sync.WaitGroup) {
	fmt.Printf("start job: %d\n", i)
	time.Sleep(1 * time.Second)
	fmt.Printf("end job: %d\n", i)
	wg.Done()
}

func main() {
	wg := sync.WaitGroup{}
	wg.Add(3)
	go do(1, &wg)
	go do(2, &wg)
	go do(3, &wg)

	wg.Wait()
	fmt.Println("Done")

	//time.Sleep(2 * time.Second)
}
