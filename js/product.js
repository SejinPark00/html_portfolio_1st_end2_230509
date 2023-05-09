$(function(){
    $.ajax({
        url:"./js/product1.json",
        dataType:"json",
        success : function(data){
            if(data.length > 0){
                for (var i in data){
                    $(".box").eq(i).append('<a href="sub.html">' + "<img src='img/" + data[i].url + "'/>" + '</a>');
                    $(".box").eq(i).append('<p><a href="sub.html">' + data[i].title + "</a></p>");
                    $(".box").eq(i).append('<h5><a href="sub.html">' + data[i].price + "</a></h5>");
                }
            }
        }
    });
});

$(function(){
    $.ajax({
        url:"./js/product2.json",
        dataType:"json",
        success : function(data){
            if(data.length > 0){
                for (var i in data){
                    $(".salebox").eq(i).append('<a href="sub.html">' + "<img src='img/" + data[i].url + "'/>" + '</a>');
                    $(".salebox").eq(i).append('<p><a href="sub.html">' + data[i].title + "</a></p>");
                    $(".salebox").eq(i).append('<h5><a href="sub.html">' + "<span>"+data[i].percent+"</span>" + data[i].sale_price + "</a></h5>");
                    $(".salebox").eq(i).append('<h6><a href="sub.html">' + data[i].price + "</a></h6>");
                }
            }
        }
    });
});

$(function(){
    $.ajax({
        url:"./js/product3.json",
        dataType:"json",
        success : function(data){
            if(data.length > 0){
                for (var i in data){
                    $(".salebox2").eq(i).append('<a href="sub.html">' + "<img src='img/" + data[i].url + "'/>" + '</a>');
                    $(".salebox2").eq(i).append('<p><a href="sub.html">' + data[i].title + "</a></p>");
                    $(".salebox2").eq(i).append('<h5><a href="sub.html">' + "<span>"+data[i].percent+"</span>" + data[i].sale_price + "</a></h5>");
                    $(".salebox2").eq(i).append('<h6><a href="sub.html">' + data[i].price + "</a></h6>");
                    // review random count
                    var count = Math.floor(Math.random()*100);
                    $(".salebox2").eq(i).append('<h4><a href="sub.html">' + "<img src='img/" + data[i].icon + "'/>" + "후기" + count + "</a></h4>")
                }
            }
        }
    });
});