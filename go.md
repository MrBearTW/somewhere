2018/12/07 1,6

ubuntu-18.04.1

GO歷史漫畫  
https://goo.gl/jGcwXK

沒有物件導向  
強型別  
用大小寫來分別可否被存取  大寫可以被其他package取用  

Go at Google: Language Design in the Service of Software Engineering  
https://talks.golang.org/2012/splash.article
  
GVM  
管理GO版本工具  
https://github.com/moovweb/gvm  

  
安裝`gvm install go1.XX`  
看有哪一些`gvm list`  
用1.XX版的go`gvm use go1.XX`  
固定用1.XX版的go`gvm use go1.XX --default`  
看goroot gopath`go env`
  
Windows10 VScode調整  
```
"go.formatTool": "gofmt",
"go.goroot": "C:\\Go",
"go.gopath":"C:\\Users\\user\\go"
```  
  
套件(import進去的)都要放在gopath底下  
src/網域名稱/帳戶名稱/專案名稱  

用go get抓那一包東西到gopath路徑底下的src目錄，若是有main的話還會自動生成執行檔案 `go get github.com/go-training/drone-golang-example`
把`$GOAPTH/bin`也加入PATH，這樣之後依些執行黨也可以直接做使用  
`go run XXXX.go`
`go test`
`go install`
`go build`
``