/***类描述详见基类
 * tony
 * 2017-05-12
 */
var BaseHands = require('./../../FrameWorkMj/BaseData/BaseHands');
var util = require('util');

var ClientBaseHands = function(){
    BaseHands.call(); 
};

util.inherits(ClientBaseHands, BaseHands);

var pro = ClientBaseHands.prototype;

/***断线重连重新解析
 * serverInfo:服务器的数据
 */
pro.resetNet = function( serverInfo ){
    this.init( serverInfo );
};

/*** 初始化数据 */
pro.init = function( serverInfo ){
    
}; 