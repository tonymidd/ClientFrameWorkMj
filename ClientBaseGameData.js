
/****客户端游戏数据 */

var BaseGameData = require('./../FrameWorkMj/BaseGameData');
var ClientBaseGameData = function(){

};

var pro = ClientBaseGameData.prototype;

/***玩家总人数 
 * 因为有可能是两个人 、三个人、四个人的游戏
*/
pro.getPlayerCnt = function(){
    //必须子类自己重写
};

/*** 断线重连 */
pro.resetData = function(){
    //必须子类自己重写
};

/*** 游戏短名 */
pro.getGameName = function(){
    //必须子类自己重写
};