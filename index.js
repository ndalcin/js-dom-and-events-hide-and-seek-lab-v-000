
function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('#nested .target')
}

function increaseRankBy(n){
  const rankedLists = document.querySelectorAll('ul.ranked-list')
  for (let i = 0; i < rankedLists.length; i++) {
    rankedLists[i].innerHTML = (parseInt(rankedLists[i].innerHtml) + n)
  }
}

function deepestChild(){
  let div = document.querySelector('div#grand-node')
  while (div) {
    if (div.children[0]){
      div = div.querySelector('div')
    }
    else {
      return div
    }
  }
}
