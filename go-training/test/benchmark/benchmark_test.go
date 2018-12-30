package main

func TestPrint01(t *testing.T) {
	if print01(100) != "100" {
		t.Fatal("error")
	}
}
func TestPrint02(t *testing.T) {
	if print01(int64(100)) != "100" {
		t.Fatal("error")
	}
}
func TestPrint03(t *testing.T) {
	if print01(100) != "100" {
		t.Fatal("error")
	}
}
