<script>



    //�洢�ղؼ���Ϣ
    function Save() {
      var reqId = "1";
      var reqType = "Save";
      var name = //����ȡ�ղؼ�name��
		var description = //���ղؼ�description��
		var publicStatus = //���ղؼ�publicStatus��
		var userId = //����ȡuserId��
		
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
            alert("����ɹ���");
          },
          error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert(XMLHttpRequest.status);
          }
        });
    }

    //Ϊ�ղؼ��������
    function AddEntry() {
      var reqId = "1";
      var reqType = "AddEntry";
      var collectionId = //���ղؼ�Id��;
		var entryId = //������id��
		
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
            //��HTML��type�ղؼ����������
          },
          error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert(XMLHttpRequest.status);
          }
        });
    }

    //�����ղؼй���״̬
    function ChangeStatus() {
      var reqId = "1";
      var reqType = "ChangeStatus";
      var collectionId = //���ղؼ�Id��;
		var status = //�����ĺ�status��0��1��2����
		
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
            //�޸�HTML�и��ļ���״̬Ϊstatus
          },
          error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert(XMLHttpRequest.status);
          }
        });
    }

    //DONE: �����ղؼ���Ϣ��name, publicStatus��
    function Update() {
      var reqId = "1";
      var reqType = "Update";
      var name = document.getElementById("edit-title").value;//���ղؼ����֡�
      var status = curStatus//�����ĺ�status��0��1��2����

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
            //�����ղؼ�����
            document.getElementById("collection-name") = objResult.resResult.curData.name;
            document.getElementById("collection-status") = objResult.resResult.curData.publicStatus;
          },
          error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert(XMLHttpRequest.status);
          }
        });
    }



    // ��ȡ�������й������ղؼ���Ϣ
    function ListGroupPublic() {
      var reqId = "1";
      var reqType = "ListGroupPublic";
      var device = "pc";
      var groupId = //����id��
		  var pageSize = 10000; 	//һҳ�ж����������ҳ��ʾЧ������
      var pageNum = 1			//ҳ�룬��1��ʼ���������Ϊ��ҳ��ȡ����Ϊ����ֱ��һ���Զ��������ղؼ�

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
            //��ʾ�����鹫���ղؼ���Ϣ
          },
          error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert(XMLHttpRequest.status);
          }
        });
    }

    // ��ȡ�û�publicStatus���ղؼ�
    function List() {
      var reqId = "1";
      var reqType = "List";
      var userId = //����ȡuserId��
		var device = "pc";
      var pageSize = 10000; 	//һҳ�ж����������ҳ��ʾЧ������
      var pageNum = 1			//ҳ�룬��1��ʼ���������Ϊ��ҳ��ȡ����Ϊ����ֱ��һ���Զ��������ղؼ�

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
            //��ʾ�û������ղؼ���Ϣ
          },
          error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert(XMLHttpRequest.status);
          }
        });
    }

    // ���һ���ղؼ�
    function Clear() {
      var reqId = "1";
      var reqType = "Clear";
      var userId = //����ȡuserId��
		var collectionId = //����ȡ�ղؼ�id��
		
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
            //��HTML��ɾ�����ղؼе�����
          },
          error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert(XMLHttpRequest.status);
          }
        });
    }

    //TODO: ɾ���ղؼ�
    function Delete() {
      var reqId = "1";
      var reqType = "Delete";
      var userId = //����ȡuserId��
      var collectionId = //����ȡ�ղؼ�id��

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
            //��HTML��ɾ�����ղؼ�,��ȡĬ���ղؼе����½�����ʾ
            var objDefault =
            {
              "reqId": reqId,
              "reqType": reqType,
              "reqParam":
              {
                "collectionId": ""//Ĭ���ղؼ�
              }
            };
            //TODO: ʵ��ListCollection()�ӿ�
            ListCollection(objDefault);
          },
          error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert(XMLHttpRequest.status);
          }
        });
    }



    // ɾ������
    function RemoveEntry() {
      var reqId = "1";
      var reqType = "RemoveEntry";
      var entryId = //��Ҫɾ��������id��
		
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
            //��HTML��ɾ��������
          },
          error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert(XMLHttpRequest.status);
          }
        });
    }

    // �ƶ����µ���һ���ղؼ�
    function MoveEntry() {
      var reqId = "1";
      var reqType = "MoveEntry";
      var userId = //����ȡuserId��
		var entryId = //������id��
		var targetId = //��Ŀ���ļ���id��
		
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
            //�������ƶ�����һ���ղؼ���ʾ
          },
          error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert(XMLHttpRequest.status);
          }
        });
    }

  </script>