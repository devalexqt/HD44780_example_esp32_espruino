// LCD 16x2
//http://www.espruino.com/HD44780

//connection
/*
LCD	Function	Espruino
1 VSS	GND	GND
2 VDD	VCC	Bat (5V)
3 VO	Contrast	GND or variable resistor
4 RS	RS	A0
5 RW	RW	GND
6 E	EN	A1
7 D0	D0	-
8 D1	D1	-
9 D2	D2	-
10 D3	D3	-
11 D4	D4	C0
12 D5	D5	C1
13 D6	D6	C2
14 D7	D7	C3
15 A	LED +	Bat
16 K	LED -	GND (5V)
*/

//                                     rs,en,d4,d5,d6,d7
//var lcd = require("HD44780").connect(A0,A1,C0,C1,C2,C3);
var lcd = require("HD44780").connect(D22,D23,D5,D18,D19,D21);

//lcd.print("Hello World!");

 lcd.clear();
 lcd.setCursor(0,0);
 lcd.print("12.023V 19.135A");
 lcd.setCursor(0,1);
 lcd.print("Power: 12.156W");

