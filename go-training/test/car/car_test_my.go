package car

import (
	"testing"
)

func TestNew(t *testing.T) {
	c, err := New("", 100)
	if err != nil {
		t.Fatal("got errors", err)
	}
	if c == nil {
		t.Error("car should be nil")
	}
}

func TestCar_SetName(t *testing.T) {
	type args struct {
		name string
	}
	tests := []struct {
		name string
		c    *Car
		args args
		want string
	}{
		// TODO: Add test cases.
	}
	for _, tt := range tests {
		tt := tt
		t.Run(tt.name, func(t *testing.T) {
			t.Parallel()
			if got := tt.c.SetName(tt.args.name); got != tt.want {
				t.Errorf("Car.SetName() = %v, want %v", got, tt.want)
			}
		})
	}
}
