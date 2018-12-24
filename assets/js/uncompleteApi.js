<script>



    //存储收藏夹信息
    function Save() {
      var reqId = "1";
      var reqType = "Save";
      var name = //【获取收藏夹name】
		var description = //【收藏夹description】
		var publicStatus = //【收藏夹publicStatus】
		var userId = //【获取userId】
		
		var objParam =
      {
        "reqId": reqId,
        "reqType": reqType,
        "reqParam":
        {
          "name": name,
          "description": description
        },
        "reqUserInfo":
        {
          "userId": userId
        }
      };

      $.ajax
        ({
          url: "http://120.79.191.240:8089/rssbackend/api/v1/collection",
          data: JSON.stringify(objParam),
          datatype: "json",
          type: "POST",
          contentType: "application/json",
          success: function (objResult) {
            alert("保存成功！");
          },
          error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert(XMLHttpRequest.status);
          }
        });
    }

    //为收藏夹添加文章
    function AddEntry() {
      var reqId = "1";
      var reqType = "AddEntry";
      var collectionId = //【收藏夹Id】;
		var entryId = //【文章id】
		
		var objParam =
      {
        "reqId": reqId,
        "reqType": reqType,
        "reqParam":
        {
          "collectionId": collectionId,
          "entryId": entryId
        }
      };

      $.ajax
        ({
          url: "http://120.79.191.240:8089/rssbackend/api/v1/collection/addEnrty",
          data: JSON.stringify(objParam),
          datatype: "json",
          type: "POST",
          contentType: "application/json",
          success: function (objResult) {
            //将HTML中type收藏夹下内容清空
          },
          error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert(XMLHttpRequest.status);
          }
        });
    }

    //更改收藏夹公开状态
    function ChangeStatus() {
      var reqId = "1";
      var reqType = "ChangeStatus";
      var collectionId = //【收藏夹Id】;
		var status = //【更改后status（0，1，2）】
		
		var objParam =
      {
        "reqId": reqId,
        "reqType": reqType,
        "reqParam":
        {
          "collectionId": collectionId,
          "publicStatus": status
        }
      };

      $.ajax
        ({
          url: "http://120.79.191.240:8089/rssbackend/api/v1/collection/changeStatus",
          data: JSON.stringify(objParam),
          datatype: "json",
          type: "POST",
          contentType: "application/json",
          success: function (objResult) {
            //修改HTML中该文件的状态为status
          },
          error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert(XMLHttpRequest.status);
          }
        });
    }

    //DONE: 更新收藏夹信息（name, publicStatus）
    function Update() {
      var reqId = "1";
      var reqType = "Update";
      var name = document.getElementById("edit-title").value;//【收藏夹名字】
      var status = curStatus//【更改后status（0，1，2）】

      var objParam =
      {
        "reqId": reqId,
        "reqType": reqType,
        "reqParam":
        {
          "name": name,
          "publicStatus": status
        }
      };

      $.ajax
        ({
          url: "http://120.79.191.240:8089/rssbackend/api/v1/collection/update",
          data: JSON.stringify(objParam),
          datatype: "json",
          type: "POST",
          contentType: "application/json",
          success: function (objResult) {
            //更改收藏夹内容
            document.getElementById("collection-name") = objResult.resResult.curData.name;
            document.getElementById("collection-status") = objResult.resResult.curData.publicStatus;
          },
          error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert(XMLHttpRequest.status);
          }
        });
    }



    // 获取组内所有公开的收藏夹信息
    function ListGroupPublic() {
      var reqId = "1";
      var reqType = "ListGroupPublic";
      var device = "pc";
      var groupId = //【组id】
		  var pageSize = 10000; 	//一页有多少项，根据网页显示效果决定
      var pageNum = 1			//页码，从1开始，本来设计为分页读取，但为方便直接一次性读完所有收藏夹

      var objParam =
      {
        "reqId": reqId,
        "reqType": reqType,
        "reqParam":
        {
          "groupId": groupId,
          "device": device
        },
        "reqPageInfo":
        {
          "pageSize": pageSize,
          "pageNum": pageNum
        }
      };

      $.ajax
        ({
          url: "http://120.79.191.240:8089/rssbackend/api/v1/collection/groupPublic",
          data: JSON.stringify(objParam),
          datatype: "json",
          type: "POST",
          contentType: "application/json",
          success: function (objResult) {
            //显示所有组公开收藏夹信息
          },
          error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert(XMLHttpRequest.status);
          }
        });
    }

    // 获取用户publicStatus的收藏夹
    function List() {
      var reqId = "1";
      var reqType = "List";
      var userId = //【获取userId】
		var device = "pc";
      var pageSize = 10000; 	//一页有多少项，根据网页显示效果决定
      var pageNum = 1			//页码，从1开始，本来设计为分页读取，但为方便直接一次性读完所有收藏夹

      var objParam =
      {
        "reqId": reqId,
        "reqType": reqType,
        "reqParam":
        {
          "groupId": groupId,
          "device": device
        },
        "reqPageInfo":
        {
          "pageSize": pageSize,
          "pageNum": pageNum
        }
      };

      $.ajax
        ({
          url: "http://120.79.191.240:8089/rssbackend/api/v1/collection/list",
          data: JSON.stringify(objParam),
          datatype: "json",
          type: "POST",
          contentType: "application/json",
          success: function (objResult) {
            //显示用户公开收藏夹信息
          },
          error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert(XMLHttpRequest.status);
          }
        });
    }

    // 清空一个收藏夹
    function Clear() {
      var reqId = "1";
      var reqType = "Clear";
      var userId = //【获取userId】
		var collectionId = //【获取收藏夹id】
		
		var objParam =
      {
        "reqId": reqId,
        "reqType": reqType,
        "reqParam":
        {
          "collectionId": collectionId
        }
      };

      $.ajax
        ({
          url: "http://120.79.191.240:8089/rssbackend/api/v1/collection/clear",
          data: JSON.stringify(objParam),
          datatype: "json",
          type: "POST",
          contentType: "application/json",
          success: function (objResult) {
            //从HTML中删除此收藏夹的内容
          },
          error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert(XMLHttpRequest.status);
          }
        });
    }

    //TODO: 删除收藏夹
    function Delete() {
      var reqId = "1";
      var reqType = "Delete";
      var userId = //【获取userId】
      var collectionId = //【获取收藏夹id】

      var objParam =
      {
        "reqId": reqId,
        "reqType": reqType,
        "reqParam":
        {
          "collectionId": collectionId
        }
      };

      $.ajax
        ({
          url: "http://120.79.191.240:8089/rssbackend/api/v1/collection/delete",
          data: JSON.stringify(objParam),
          datatype: "json",
          type: "POST",
          contentType: "application/json",
          success: function (objResult) {
            //从HTML中删除此收藏夹,获取默认收藏夹的文章进行显示
            var objDefault =
            {
              "reqId": reqId,
              "reqType": reqType,
              "reqParam":
              {
                "collectionId": ""//默认收藏夹
              }
            };
            //TODO: 实现ListCollection()接口
            ListCollection(objDefault);
          },
          error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert(XMLHttpRequest.status);
          }
        });
    }



    // 删除文章
    function RemoveEntry() {
      var reqId = "1";
      var reqType = "RemoveEntry";
      var entryId = //【要删除的文章id】
		
		var objParam =
      {
        "reqId": reqId,
        "reqType": reqType,
        "reqParam":
        {
          "entryId": entryId
        }
      };

      $.ajax
        ({
          url: "http://120.79.191.240:8089/rssbackend/api/v1/collection/removeEntry",
          data: JSON.stringify(objParam),
          datatype: "json",
          type: "POST",
          contentType: "application/json",
          success: function (objResult) {
            //从HTML中删除文章项
          },
          error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert(XMLHttpRequest.status);
          }
        });
    }

    // 移动文章到另一个收藏夹
    function MoveEntry() {
      var reqId = "1";
      var reqType = "MoveEntry";
      var userId = //【获取userId】
		var entryId = //【文章id】
		var targetId = //【目标文件夹id】
		
		var objParam =
      {
        "reqId": reqId,
        "reqType": reqType,
        "reqParam":
        {
          "entryId": entryId,
          "targetId": targetId,

        }
      };

      $.ajax
        ({
          url: "http://120.79.191.240:8089/rssbackend/api/v1/collection/moveEntry",
          data: JSON.stringify(objParam),
          datatype: "json",
          type: "POST",
          contentType: "application/json",
          success: function (objResult) {
            //将文章移动到另一个收藏夹显示
          },
          error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert(XMLHttpRequest.status);
          }
        });
    }

  </script>