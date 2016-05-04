
/**
 * 处理后端接口返回ID不统一问题（字符串类型ID, 数字类型ID都可能存在） 
 * indexOf是一个强类型匹配的方法
 * 例：['1', '2'].indexOf(1)  会返回-1而不是0
 */
if(!Array.prototype.indexOfId) {
	Array.prototype.indexOfId = function(id) {
		let i,
				v,
				len = this.length;

		for (i = 0; i < len; i++) {
			v = this[i];
			if(v == id) {
				return i;
			}
		}

		return -1;
	}
}