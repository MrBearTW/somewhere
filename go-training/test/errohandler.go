package main

import (
	"errors"
	"fmt"
)

type errUserNameExist struct {
	UserName string
}

func (e errUserNameExist) Error() string {
	return fmt.Sprintf("username %s already exist", e.UserName)
}

func isErrUserNameExist(err error) bool {
	_, ok := err.(errUserNameExist)
	return ok
}

func checkUserNameExist(username string) (bool, error) {
	if username == "aaa" {
		return true, errUserNameExist{UserName: username}
	}

	if username == "bbb" {
		return true, errors.New("bbb exist")
	}
	return false, nil
}

/*
func checkUserNameExist(username string) (bool, error) {
	if username == "aaa" {
		return true, fmt.Errorf("username %s already exist", username)
	}
	if username == "bbb" {
		//return true, errors.New(fmt.Sprintf("username %s already exist", username))
		return true, errors.New("username XXX already exist")
	}
	return false, nil
}
*/
func main() {
	if _, err := checkUserNameExist("aaa"); err != nil {
		if isErrUserNameExist(err) {
			fmt.Println(err)
		}
	}

	if _, err := checkUserNameExist("bbb"); err != nil {
		if isErrUserNameExist(err) {
			fmt.Println(err)
		} else {
			fmt.Println("isErrUserNameExist is false")
		}
	}
}
