let parser = new RSSParser()

parser.parseURL('https://blog.suphakit.net/atom.xml', function (err, feed) {
  if (err) throw err
  console.log(feed.title);
  let blog = document.querySelector('#katsuBlog')
})