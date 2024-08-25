var posts=["2024/08/25/OpenRoadsDesigner常用键入命令/","2024/08/25/PicGo和Github搭建图床/","2024/08/25/安知鱼主题应用注意/","2024/08/25/摄影-拍摄月亮/","2024/08/25/使用github和Zeabur发布网站/","2024/08/25/摄影-星河拍摄/","2024/08/25/星轨拍摄/","2024/08/24/使用hexo和安知鱼搭建个人博客/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };