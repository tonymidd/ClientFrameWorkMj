/***类描述详见基类
 * tony
 * 2017-05-12
 */

var BaseSingleData = require('./../FrameWorkMj/BaseSingleData');

var util = require('util');

var ClientBaseSingleData = function( serverData ){
    BaseSingleData.call(); 
}; 

util.inherits(BaseSingleData, ClientBaseSingleData);

var pro = ClientBaseSingleData.prototype;

/***
 * 初始化
 */
pro.init = function(){
    //由子类自己实现
};

module.exports = ClientBaseSingleData;