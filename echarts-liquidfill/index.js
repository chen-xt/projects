
var energy = echarts.init(document.getElementById('energy'));

$(document).ready(function(){
    data = 0.5;
    liquid(energy, data);
});


// 水球图
function liquid(dom, data){
    var color;
    if(data<0.5){
        // 红色
        color = ['#e83442','#ff576d']; 
    }
    else{
        // 绿色
        color = ['#01b90f','#00d41e'];
    }
	var option = {
		series: [{
			type: 'liquidFill',
			data: [data, data-0.05],
			color: ['rgba(255,255,255,.3)'], //波浪的颜色
			radius: '90%',
			outline: {
				show: false,
			},
			backgroundStyle: {
               // 线性渐变颜色
               color: new echarts.graphic.LinearGradient(
                    0, 1, 0, 0, [
                        { offset: 0, color: color[0] },
                        { offset: 1, color: color[1] }
                    ]
                )
			},
            label: {
				color: '#fff',
				fontSize: 35,
                align: 'center',
                fontWeight: 'normal'
			}
		}]
	};
	dom.setOption(option);
}

