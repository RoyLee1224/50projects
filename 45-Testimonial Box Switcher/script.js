const testimonialsContainer = document.querySelector('.testimonials-container')
const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-image')
const userName = document.querySelector('.username')
const role = document.querySelector('.role')


const testimonials = [
    // {
    //     name: 'Elon Musk',
    //     position: 'CEO of Tesla and SpaceX',
    //     photo: 'https://sw.cool3c.com/user/29442/2022/ba18e9d7-32b6-4ecf-a2bc-de75839cc020.jpg?fit=max&w=1400&q=80',
    //     text:
    //       "When something is important enough, you do it even if the odds are not in your favor.",
    // },
    // {
    //   name: 'Jeff Bezos',
    //   position: 'Founder and Executive Chair of Amazon',
    //   photo:
    //     'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Jeff_Bezos_at_Amazon_Spheres_Grand_Opening_in_Seattle_-_2018_%2839074799225%29_%28cropped%29.jpg/800px-Jeff_Bezos_at_Amazon_Spheres_Grand_Opening_in_Seattle_-_2018_%2839074799225%29_%28cropped%29.jpg',
    //   text:
    //     "We are stubborn on vision. We are flexible on details….",
    // },
    // {
    //   name: 'Bernard Arnault',
    //   position: 'CEO and Chair of LVMH',
    //   photo: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bernard_Arnault_%283%29_-_2017_%28cropped%29.jpg',
    //   text:
    //     'Money is just a consequence. I always say to my team, don’t worry too much about profitability. If you do your job well, the profitability will come',
    // },
    // {
    //   name: 'Bill Gates',
    //   position: 'Co-founder of Microsoft Corp.',
    //   photo: 'https://www.abmedia.io/wp-content/uploads/2021/02/bill-gates-2.jpg',
    //   text:
    //     "Be nice to nerds. Chances are you’ll end up working for one.",
    // },
    // {
    //   name: 'Warren Buffett',
    //   position: 'CEO of Berkshire Hathaway',
    //   photo: 'https://pgfinnote.com/wp-content/uploads/warren-buffett.si_.jpg',
    //   text:
    //     "Be fearful when others are greedy. Be greedy when others are fearful.",
    // },
    // {
    //   name: 'Larry Page',
    //   position: 'Co-founder and Board Member of Alphabet',
    //   photo:
    //     'https://imageio.forbes.com/specials-images/imageserve/5c76bcaaa7ea43100043c836/0x0.jpg?format=jpg&crop=1795,1795,x227,y22,safe&height=416&width=416&fit=bounds',
    //   text:
    //     'If we were motivated by money, we would have sold the company a long time ago and ended up on a beach.',
    // },
    // {
    //   name: 'Sergey Brin',
    //   position: 'Co-founder and Board Member of Alphabet',
    //   photo: 'https://imageio.forbes.com/specials-images/imageserve/5c7d7c254bbe6f78090d831f/0x0.jpg?format=jpg&crop=2412,2414,x475,y168,safe&height=416&width=416&fit=bounds',
    //   text:
    //     'We saw that a thousand results weren’t necessarily as useful as 10 good ones.',
    // },
    {
      name: '魯迅',
      position: '作家',
      photo: 'https://images.twgreatdaily.com/images/image/85e/85ebd31b9c10676efa5c1dc27cc9e2b0.jpg',
      text:
        '網上95％的名言都是瞎掰的。',
    },
    {
      name: '魯迅',
      position: '作家',
      photo: 'https://i0.wp.com/www.fanily.tw/wp-content/uploads/2016/06/144b5f152b4000005736.jpg?fit=344%2C410&ssl=1',
      text:
        '我才沒說過這句話 = =',
    },
  ]

let idx = 1 

function updateTestimonial() {
    const {name,position,photo,text} = testimonials[idx]

    testimonial.innerHTML = text
    userImage.src = photo
    userName.innerHTML = name
    role.innerHTML = position

    idx++

    if(idx > testimonials.length-1){
        idx = 0
    }
}
setInterval(updateTestimonial,5000)