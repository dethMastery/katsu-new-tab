let parser = new RSSParser()

parser.parseURL('https://blog.suphakit.net/atom.xml', function (err, feed) {
  if (err) throw err
  console.log(feed.title);
  let blog = document.querySelector('#katsuBlog')

  let header = document.createElement("h2")
  header.innerText = feed.title
  let lineBreak = document.createElement('br')

  let hList = document.createElement('ul')

  blog.appendChild(header)
  blog.appendChild(lineBreak)
  blog.appendChild(hList)

  for (let i=0; i<4; i++) {
    let link = document.createElement('a')
    link.setAttribute('href', feed.items[i].link)
    let list = document.createElement('li')
    list.innerText = feed.items[i].title
    link.appendChild(list)
    hList.appendChild(link)
  }

  blog.appendChild(document.createElement('br'))

  let link_container = document.createElement('div')
  link_container.setAttribute('class', 'linkContainer')
  let see_more = document.createElement('a')
  see_more.setAttribute('href', 'https://blog.suphakit.net')
  see_more.setAttribute('class', 'seeMore')
  see_more.innerText = 'See More >>'
  link_container.appendChild(see_more)
  blog.appendChild(link_container)
})