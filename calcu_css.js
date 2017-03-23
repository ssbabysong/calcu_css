function calcu_ave(comment){
	var d1=parseInt(comment.data1);
	var d2=parseInt(comment.data2);
	var d3=parseInt(comment.data3);
	var d4=parseInt(comment.data4);
	var d5=parseInt(comment.data5);
	var ave=(d1+d2+d3+d4+d5)/5;
	return ave;
}
function calcu_dx(comment){
	var ave=(d1+d2+d3+d4+d5)/5;
	var d1=parseInt(comment.data1)-ave;
	var d2=parseInt(comment.data2)-ave;
	var d3=parseInt(comment.data3)-ave;
	var d4=parseInt(comment.data4)-ave;
	var d5=parseInt(comment.data5)-ave;
	
	var dx=(d1*d1+d2*d2+d3*d3+d4*d4+d5*d5)/4;
	return dx;
}
export.calcu_dx = calcu_dx;
export.calcu_ave = calcu_ave;