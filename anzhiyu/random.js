var posts=["2024/08/18/hello-world/","2024/08/24/使用hexo和安知鱼搭建个人博客/","2024/08/25/使用github和Zeabur发布网站/","2024/08/25/安知鱼主题应用注意/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };