const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2500)

function getData() {
  header.innerHTML =
    '<img src=" https://files.soundon.fm/1601380848736-bce0f26a-745c-4266-aee1-6d4df3479752.jpeg" alt="" />'
  title.innerHTML = '| Profile'
  excerpt.innerHTML =
    '晦澀金融投資知識直白講，重要海內外時事輕鬆談；不管老司機還是菜雞，散戶們都進來取暖，也在這裡找到樂趣。'
  profile_img.innerHTML =
    '<img src="https://cc.tvbs.com.tw/img/upload/2022/02/18/20220218103337-bcaff24c.jpg" alt="" />'
  name.innerHTML = 'MK H'
  date.innerHTML = 'Apr 20, 2022'

  animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'))
  animated_bg_texts.forEach((bg) => bg.classList.remove('animated-bg-text'))
}
