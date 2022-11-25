const mutationObserver = new MutationObserver(entries => {
   console.log(entries);
})
const parent = document.querySelector(".parent")

mutationObserver.observe(parent, {
  subtree: true,
  characterData: true,
  characterDataOldValue: true,
  // attributes: true,
  // attributeOldValue:true,
})
// mutationObserver.disconnect()
// parent.id = "New Id"
// parent.children[0].remove()
// setTimeout(() => {
//   parent.appendChild(document.createElement("div"))
  
// },100)