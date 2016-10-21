function Web(){
	this.w=240;
	this.h=240;
	this.scale=1;	
	this.move();
}
Web.prototype.draw=function(gd){
	gd.save();
	gd.translate(this.x,this.y);
	gd.scale(this.scale,this.scale);
	gd.drawImage(JSON['web'],0,0,this.w,this.h,-this.w/2,-this.h/2,this.w,this.h);	
	gd.restore();	
}
Web.prototype.move=function(){
	var _this=this;
	setInterval(function(){
		_this.scale+=0.1;
		console.log(_this.scale);
		if(_this.scale>=1.5){
			_this.scale=1;
		}	
	},100);	
	

}
// JavaScript Document