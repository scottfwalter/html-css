const template = document.getElementById('list-item-template')
const list = document.getElementById('list')
const button = document.getElementById('add-item')
let itemCount = list.children.length

button.addEventListener('click', () => {
  const item = template.content.cloneNode(true)
  itemCount++
  item.querySelector('.title').innerText = `Item ${itemCount}: `
  item.querySelector('.content').innerText = `Content ${itemCount}`
  list.append(item)
})