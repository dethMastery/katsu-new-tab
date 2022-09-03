let parser = new RSSParser({
  customFields: {
    item: [
      ['media:content', 'mediaContent'],
      ['dc:creator', 'aAuthor'],
    ]
  }
})

parser.parseURL('https://blog.suphakit.net/atom.xml', function (err, feed) {
  if (err) throw err
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
    link.innerText = feed.items[i].title
    list.appendChild(link)
    hList.appendChild(list)
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

parser.parseURL('https://katsuragi.detzz.in.th/api/rss/index.php', function(err, feed) {
  if (err) throw err

  let content = document.querySelector("#katsu-wav")

  let head = document.createElement('h2')
  let hList = document.createElement('ul')
  head.innerText = 'katsuragi.wav Released'

  content.appendChild(head)
  content.appendChild(document.createElement('br'))
  content.appendChild(hList)
  
  for (let i=0; i<4; i++) {
    let link = document.createElement('a')
    let list = document.createElement('li')

    link.setAttribute('href', feed.items[i].link)
    link.innerText = feed.items[i].author + ' - ' + feed.items[i].title
    list.appendChild(link)
    hList.appendChild(list)
  }

  content.appendChild(document.createElement('br'))

  let link_container = document.createElement('div')
  let see_more = document.createElement('a')

  link_container.setAttribute('class', 'linkContainer')
  see_more.setAttribute('href', 'https://katsuragi.detzz.in.th/#released')
  see_more.setAttribute('class', 'seeMore')
  see_more.innerText = 'See More >>'
  link_container.appendChild(see_more)
  content.appendChild(link_container)
})

parser.parseURL('https://rss.nytimes.com/services/xml/rss/nyt/Technology.xml', function(err, feed) {
  if (err) throw err

  console.log(feed.title)

  let news = document.querySelector('#news')

  let container = document.createElement('div')

  container.setAttribute('class', 'container')

  news.appendChild(container)

  for(let i=0; i<3; i++) {
    let card = document.createElement('div')

    let imgContain = document.createElement('div')
    let img = document.createElement('img')

    let dataContain = document.createElement('div')
    let indexTitle = document.createElement('h2')
    let desp = document.createElement('span')

    let linkContainer = document.createElement('div')
    let readmore = document.createElement('a')
    
    imgContain.setAttribute('class', 'imgContainer')
    dataContain.setAttribute('class', 'textContainer')

    card.setAttribute('class', 'newsCard')
    img.setAttribute('src', feed.items[i].mediaContent.$.url)
    indexTitle.innerText = feed.items[i].title
    desp.setAttribute('class', 'detail')
    desp.innerText = feed.items[i].description + ' - ' + feed.items[i].aAuthor

    imgContain.appendChild(img)
    dataContain.appendChild(indexTitle)
    dataContain.appendChild(desp)
    
    card.appendChild(imgContain)
    card.appendChild(dataContain)
    container.appendChild(card)
  }
})