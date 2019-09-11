import Mock from 'mockjs'
Mock.mock('/pagination','post',function(options){
    var {page,pageSize,total} = JSON.parse(options.body)
    // let arr=Mock.mock({
    //     "list|"totals:[
    //         {
    //              "id|+1":1,"desc":'XXX',"link":'http://baidu.com' ,"pic":'http://XXX.jpg'
    //         }
    //     ]
    // }).list.splice((page-1)*pageSize,page*pageSize)
    const option = {}
    option['list|' + total ] = [{
        "id|+1":1,"desc":'XXX',"link":'http://baidu.com' ,"pic":'http://XXX.jpg'
    }]
    let arr= Mock.mock(option).list.splice((page-1)*pageSize,page*pageSize)
    return {
        "status":200,
        "page":page,
        "pageSize":pageSize,
        "list":arr
    }
})