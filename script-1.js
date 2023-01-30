const gifts = [
    "hoodie", "moon-light", "perfumes", "watch", "studio-light"
];

 const participants = [
    "Alex", "Bob", "Carl", "Dell", "Emily"
 ];

//  const santArray = [
//     "Santa-Alex", "Santa-John", "Santa-Lisa", "Santa-Sam"
//  ]

 const getRandomElement = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)]
 }

 const init = () => {
    const childElement = document.getElementById("diff-child")
    const santaElement = document.getElementById("diff-santa")
    const giftItems = document.getElementById("gifte")

    const child = getRandomElement(participants)
    const santa = getRandomElement(participants.filter(element => element !== child)) 
    const giftItem = getRandomElement(gifts)

    console.log(`${santa} is to give ${giftItem} to ${child}` )

   //  childElement.innerHTML = ""
    childElement.textContent = child
   //  santaElement.innerHTML = ""
    santaElement.textContent = santa

    
   giftItems.textContent = ""
   const img = document.createElement("img")
   img.src = `./gift-folder/${giftItem}.png`
   // img.alt = giftItem
   img.width = "300"
   img.height ="300"
   giftItems.appendChild(img)
 }

 init()