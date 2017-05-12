/***类描述详见基类
 * tony
 * 2017-05-12
 */
var BaseFuZis = require('./../../FrameWorkMj/BaseData/BaseFuZis');
var util = require('util');

var ClientBaseFuZis = function(){
    BaseFuZis.call(); 
};

util.inherits(ClientBaseFuZis, BaseFuZis);

var pro = ClientBaseFuZis.prototype;

/***断线重连重新解析
 * serverInfo:服务器的数据
 */
pro.resetNet = function( serverInfo ){
    this.init( serverInfo );
};

/*** 初始化数据 */
pro.init = function( serverInfo ){
    
}; 