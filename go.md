# 2019/07/30 Golang Taipei Gathering #43
Julian Chu  
在德國求生存的.Net Developer, 去年意外的開始了Go的探索旅程  
Refactoring in Goland for beginner  

測試金字塔  
End to end  
Intergration  
Unit  

書 [單元測試的藝術](https://www.books.com.tw/products/0010765689)  

# 2019/06/18  

https://speakerdeck.com/rueian/scaling-offline-database-usage-on-gcp-at-dcard  
  
Epoll  
https://slides.com/jalex-chang/epoll-websocket-go?fbclid=IwAR1iubc8S9xwlZR1uQXZbkOKuLVkrbbv2KeWRz8QtaAiFqMejNv2N9-ddPA#/  
1G記憶體管理1M個Socket  

2019/05/28   
LUA SCRIPT
REDIS NIGNX 可搭配使用
REDIS 單持行緒 原子性
Redis終究不是用來處理que

街口發紅包PPT
https://speakerdeck.com/chenyunchen/redis-lua-script-with-red-envelope-and-message-queue?slide=2

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
`go test .`  
`go install`在bin底下建立執行檔  
`go build`在當下目錄建立執行檔  
`go build -o XXX .`建立檔名為XXX的執行檔  

go讀套件的順序
vendor -> GOPATH/src -> GOROOT/src 
`go get -v ./...`
用vendor可以固定套件版本  

在func內直接宣告變數  
第一次宣告要用`:=`  
這種宣告方是有區域性，只能在func中使用  

遇到會自動+1的變數可以設定為iota  

slice  

超過兩種情況建議用switch  
只有兩種要第一種做完就return，接著才用else去處理  

init是在main執行之前才去執行，不管放在程式碼哪裡
  
用套件做測試
https://github.com/stretchr/testify
要安裝`go get github.com/stretchr/testify`  

`go test -v`  
只跑一個func的測試`go test -run=XXXX -v`XXX是跑要測試的func名稱  
跑全部的測試使用Jenkins Drone  
  
平行測試  

CRTL + SHIFT + P
genarate unit tests for function

benchmark
`-v -bench=. .`
`-v -bench=. -run=none -benchmem .`

驗證程式碼品質
golangci
go-critic.github.io

routine
-race檢查會不會有狀況
`go run -race XXX.go`

flag套件通常是寫給自用的時候才用


再來一次 19 20 25(VScode按可以，comandline不行)


2019/2/27  
GO電子書  
https://github.com/astaxie/build-web-application-with-golang/blob/master/zh-tw/preface.md  


Bo-Yi Wu  Youtrbe
有docker  
https://www.youtube.com/user/appleboy48/playlists  
  
