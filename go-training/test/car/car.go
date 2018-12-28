package car

import (
	"errors"
	"time"
)

// Car struct
type Car struct {
	Name  string
	Price float32
}

// SetName set car name
func (c *Car) SetName(name string) string {
	if name != "" {
		c.Name = name
	}

	time.Sleep(2 * time.Second)

	return c.Name
}

// New Object
func New(name string, price float32) (*Car, error) {
	if name == "" {
		return nil, errors.New("missing name")
	}

	return &Car{
		Name:  name,
		Price: price,
	}, nil
}
