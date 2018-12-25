package main

import (
	"fmt"
	"strings"
)

/*
func getUserListSQL(username, email string, sex int) string {
	sql := "select +from user"
	where := []string{}

	if username != "" {
		where = append(where, fmt.Sprintf("username = '%s'", username))
	}
	if email != "" {
		where = append(where, fmt.Sprintf("email = '%s'", email))
	}
	if sex != 0 {
		where = append(where, fmt.Sprintf("sex = '%d'", sex))
	}

	return sql + "where" + strings.Join(where, "or")
}
*/

type searchOpts struct {
	username string
	email    string
	sex      int
}

func getUserListOptsSQL(opts searchOpts) string {
	sql := "select + from user "
	where := []string{}

	if opts.username != "" {
		where = append(where, fmt.Sprintf("username = '%s'", opts.username))
	}
	if opts.email != "" {
		where = append(where, fmt.Sprintf("email = '%s'", opts.email))
	}
	if opts.sex != 0 {
		where = append(where, fmt.Sprintf("sex = '%d'", opts.sex))
	}

	return sql + "where " + strings.Join(where, " or ")
}

func main() {
	/*
		fmt.Println(getUserListSQL("xmas", "", 0))
		fmt.Println(getUserListSQL("xmas", "xmas@xman,.com", 1))
	*/

	fmt.Println(getUserListOptsSQL(searchOpts{
		username: "John",
	}))

	fmt.Println(getUserListOptsSQL(searchOpts{
		username: "John",
		email:    "cena@mail.com",
		sex:      2,
	}))
	fmt.Println(getUserListOptsSQL(searchOpts{
		sex: 2,
	}))
}
