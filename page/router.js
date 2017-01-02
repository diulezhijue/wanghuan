/**
 * 这里是接口范例，可根据需求进行修改
 * 可在当前项目文件夹下直接新建 html文件，向对应接口发送请求
使用方法：
1. npm install -g server-mock
2. cd pagination
3. mock start
4. js 分页 http://localhost:8080 测试 index.html， 模板分页 在 http://localhost:8080/comments 测试

 */


/**
 * 发送 GET 请求， 无参数
 * GET /getComments
 * 返回响应数据
 */
app.get('/getComments', function(req, res) {

	var comments = [],
    pageIdx = req.query.page || 1,
    pageSize = 5;
  for (var i = 0; i < pageSize; i++) {
    comments.push('评论' + ((pageIdx-1)*pageSize +i ));
  }
  res.send(comments);
});






/**
 * 页面路由，从模板渲染页面渲染页面,
 * htttp://localhost:8080/comments
 * 支持 ejs, jade 模板
 */
app.get('/comments', function(req, res) {
  var comments = [],
    pageIdx = req.query.page || 1,
    pageSize = 5,
    totalLen = 88;
  for (var i = 0; i < pageSize; i++) {
    comments.push('评论' + ((pageIdx-1)*pageSize +i ));
  }

  var data = {
    comments: comments,
    pagination: {
      pageIdx: pageIdx,
      pageSize: pageSize,
      totalLen: totalLen
    }
  }
	console.log(data.pagination.pageIdx)

  res.render('comments', data);
});