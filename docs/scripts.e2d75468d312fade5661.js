export class AnimateHeartCanvas{constructor(t,i,e=150,a=50,n=350,o){this.isPlaying=!0,this.mouseX=0,this.mouseY=0,this.configFrame={width:1200,height:300,bgColor:o},this.configHeart={timeLine:0,timeInit:(new Date).getTime(),movement:1,x:50,y:50,width:200,height:200,countHeart:e||150,sizeMin:isNaN(a)?50:a,sizeMax:isNaN(n)?350:n,colorSaturate:100,colorLight:60,hMin:isNaN(t)?330:t,hMax:isNaN(i)?350:i,minOpacity:20,maxOpacity:100,opacityGrowth:5,heartRangeMin:0,heartRangeMax:.3,gravityMin:1,gravityMax:9.8,flowDirection:1},this.heartBuffer=[],this.init(),window.onresize=()=>{this.configFrame.height=2*innerHeight,this.configFrame.width=2*innerWidth;let t=document.getElementById("heartLayer");this.updateFrameAttribute(t)}}play(){this.isPlaying||(this.isPlaying=!0,this.draw())}stop(){this.isPlaying=!1}moveDown(){this.configHeart.flowDirection=-1}moveUp(){this.configHeart.flowDirection=1}speedUp(){}speedDown(){}destroy(){this.isPlaying=!1,document.getElementById("heartLayer").remove(),console.log("\u52a8\u753b\u5df2\u505c\u6b62")}updateFrameAttribute(t){t.setAttribute("id","heartLayer"),t.setAttribute("width",this.configFrame.width),t.setAttribute("height",this.configFrame.height),t.style.width=this.configFrame.width/2+"px",t.style.height=this.configFrame.height/2+"px",t.style.zIndex="-3",t.style.userSelect="none",t.style.position="fixed",t.style.top="0",t.style.left="0"}init(){this.configFrame.height=2*innerHeight,this.configFrame.width=2*innerWidth;let t=document.createElement("canvas");this.updateFrameAttribute(t),document.documentElement.append(t),this.configHeart.timeLine=0;for(let t=0;t<this.configHeart.countHeart;t++){let i=randomInt(this.configHeart.sizeMin,this.configHeart.sizeMax),e=randomInt(0,this.configFrame.width),a=randomInt(this.configFrame.height*(1-this.configHeart.heartRangeMax),this.configFrame.height*(1-this.configHeart.heartRangeMin));this.heartBuffer.push({id:t,gravity:randomFloat(this.configHeart.gravityMin,this.configHeart.gravityMax),opacity:0,opacityFinal:randomInt(this.configHeart.minOpacity,this.configHeart.maxOpacity),timeInit:randomInt(1,500),x:e,y:a,originalX:e,originalY:a,width:i,height:i,colorH:randomInt(this.configHeart.hMin,this.configHeart.hMax)})}this.draw(),document.documentElement.addEventListener("mousemove",t=>{this.mouseX=t.x,this.mouseY=t.y})}isMouseIsCloseToBox(t){return Math.sqrt(Math.pow(Math.abs(t.position.x/2-this.mouseX),2)+Math.pow(Math.abs(t.position.y/2-this.mouseY),2))<100}draw(){this.configHeart.timeLine=this.configHeart.timeLine+1;let t=document.getElementById("heartLayer").getContext("2d");t.clearRect(0,0,this.configFrame.width,this.configFrame.height),this.configFrame.bgColor&&(t.fillStyle=this.configFrame.bgColor,t.fillRect(0,0,this.configFrame.width,this.configFrame.height)),this.heartBuffer.forEach(t=>{t.y<-t.height&&(t.y=t.originalY,t.timeInit=this.configHeart.timeLine,t.opacity=0);let i=this.configHeart.timeLine-t.timeInit;t.opacity=i>0?t.opacity*((this.configHeart.timeLine-t.timeInit)/100):0,t.opacity>=t.opacityFinal&&(t.opacity=t.opacityFinal);let e=.5*t.gravity*(this.configHeart.timeLine-t.timeInit)/300*this.configHeart.flowDirection;t.y=t.y-e,this.drawHeart(t.x,t.y,t.width/2,t.height/2,`hsl(${t.colorH} ${this.configHeart.colorSaturate}% ${this.configHeart.colorLight}% / ${t.opacity}%)`),t.opacity=t.opacity+this.configHeart.opacityGrowth}),this.isPlaying&&window.requestAnimationFrame(()=>{this.draw()})}drawHeart(t,i,e,a,n){let o=document.getElementById("heartLayer").getContext("2d");o.save(),o.beginPath();let r=.3*a;o.moveTo(t,i+r),o.bezierCurveTo(t,i,t-e/2,i,t-e/2,i+r),o.bezierCurveTo(t-e/2,i+(a+r)/2,t,i+(a+r)/1.4,t,i+a),o.bezierCurveTo(t,i+(a+r)/1.8,t+e/2,i+(a+r)/2,t+e/2,i+r),o.bezierCurveTo(t+e/2,i,t,i,t,i+r),o.closePath(),o.fillStyle=n,o.fill(),o.restore()}}function randomDirection(){return Math.random()>.5?1:-1}function randomInt(t,i){return Number((Math.random()*(i-t)+t).toFixed(0))}function randomFloat(t,i){return Number(Math.random()*(i-t)+t)}