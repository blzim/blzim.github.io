function randomlinks(){
    var myrandom=Math.round(Math.random()*9)
    var links=new Array()
	links[0]="linux000.html"
	links[1]="linux001.html"
	links[2]="linux002.html"
	links[3]="linux003.html"
	links[4]="linux004.html"
	links[5]="linux005.html"
	links[6]="linux006.html"
	links[7]="linux007.html"
	links[8]="linux008.html"
	links[9]="linux009.html"
	links[10]="linux010.html"
    window.location=links[myrandom]
}