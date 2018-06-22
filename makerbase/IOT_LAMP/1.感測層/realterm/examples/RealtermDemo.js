// Simple demo of a JScript controlling Realterm
// This is run from the windows commandline by the windows scripting host.
// It is the modern version of a batch file, and a better way to do it.
// Javascript and VBScript can also be embedded into html pages

// There are lots of tools. A nice simple editor/ide is Adersoft JsEdit (free demo)
// You should download:
// - Latest version of the Microsoft scripting host
// - Microsoft script debugger
// - Windows Scripting help file
// - an editor eg Adersoft JsEdit
//

var RT = new ActiveXObject("realterm.realtermintf");
RT.caption="Windows Scripting Host Demo";
RT.HalfDuplex=1;
RT.baud=57600;
RT.FlowControl=2; //2=RTS/CTS
RT.Port=1;
RT.PortOpen=1;
RT.LinefeedIsNewline=1;
RT.SelectTabSheet("I2C");

RT.PutString("G1"); 
RT.NewlineTerminal();
WScript.Sleep(500);

RT.PutString("SB20DP SB302P"); 
RT.NewlineTerminal();
WScript.Sleep(500);
RT.PutString("SB20DP SB302P"); 
//RT.PutChar(10); //LF
RT.NewlineTerminal();

WScript.Echo("Realterm will close when you click OK");

RT.Close();


