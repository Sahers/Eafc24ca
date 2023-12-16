let c1 = document.getElementsByClassName("a")[0]
let c2 = document.getElementsByClassName("b")[0]
let c3 = document.getElementsByClassName("c")[0]
let c4 = document.getElementsByClassName("d")[0]
let c5 = document.getElementsByClassName("e")[0]
let c6 = document.getElementsByClassName("f")[0]
let c7 = document.getElementsByClassName("g")[0]
let c8 = document.getElementsByClassName("h")[0]
let c9 = document.getElementsByClassName("i")[0]
let c10 = document.getElementsByClassName("j")[0]
let c11 = document.getElementsByClassName("k")[0]
// end cards
let r1 = document.getElementById('r1')
let r2 = document.getElementById('r2')
let r3 = document.getElementById('r3')
let r4 = document.getElementById('r4')
let r5 = document.getElementById('r5')
let r6 = document.getElementById('r6')
let r7 = document.getElementById('r7')
let r8 = document.getElementById('r8')
let r9 = document.getElementById('r9')
let r10 = document.getElementById('r10')
let r11 = document.getElementById('r11')
// end ranks
let o1 = document.getElementById('ap')
let o2 = document.getElementById('bp')
let o3 = document.getElementById('cp')
let o4 = document.getElementById('dp')
let o5 = document.getElementById('ep')
let o6 = document.getElementById('fp')
let o7 = document.getElementById('gp')
let o8 = document.getElementById('hp')
let o9 = document.getElementById('ip')
let o10 = document.getElementById('jp')
let o11 = document.getElementById('kp')
// end ovrs
let ap = document.getElementById('aap')
let bp = document.getElementById('bap')
let cp = document.getElementById('cap')
let dp = document.getElementById('dap')
let ep = document.getElementById('eap')
let fp = document.getElementById('fap')
let gp = document.getElementById('gap')
let hp = document.getElementById('hap')
let ip = document.getElementById('iap')
let jp = document.getElementById('jap')
let ovrfinal, rankvr, ovvr, rankrem;
// end positions
//change ranks

let s = document.querySelectorAll('.rankk')

function color(ele, color, ccolor) {
  ele.style.background = `linear-gradient(${color},${ccolor})`
}
for (let i = 0; i < 11; i++) {
  s[i].addEventListener('change', function m(e) {
    if (e.target.value == 1) {
      color(e.target, "rgb(28,101,22)", "green")
    } else if (e.target.value == 2) {
      color(e.target, "rgb(24,51,113)", "blue")
    } else if (e.target.value == 3) {
      color(e.target, "rgb(77,22,124)", "purple")
    } else if (e.target.value == 4) {
      color(e.target, "rgb(136,22,20)", "red")
    } else if (e.target.value == 5) {
      color(e.target, "rgb(201,101,1)", "orange")
    } else if (e.target.value == 0) {
      color(e.target, "rgb(95,95,95)", "#414040")
    }
  })
}
// حدث عند الخروج من المربع تكون الخلفية شفافة
let m = [o1, o2, o3, o4, o5, o6, o7, o8, o9, o10, o11]
console.log(m[6])
for (let z = 0; z < 11; z++) {
  m[z].addEventListener('focus', function() {
    m[z].style.backgroundColor = 'white';
  })
  m[z].addEventListener('blur', function(e) {
    m[z].style.backgroundColor = 'transparent';
    m[z].style.borderStyle = 'none';
  })
}
// التشكيلات
let cards = [c1, c2, c3, c4, c5, c6, c7, c8, c9, c10]
let squad = document.getElementById('tac')

function chplaces(a1, b1, a2, b2, a3, b3, a4, b4, a5, b5, a6, b6, a7, b7, a8, b8, a9, b9, a10, b10) {
  c1.style.gridColumn = `${a1} / span 1`
  c1.style.gridRow = `${b1} / span 1`
  c2.style.gridColumn = `${a2} / span 1`
  c2.style.gridRow = `${b2} / span 1`
  c3.style.gridColumn = `${a3} / span 1`
  c3.style.gridRow = `${b3} / span 1`
  c4.style.gridColumn = `${a4} / span 1`
  c4.style.gridRow = `${b4} / span 1`
  c5.style.gridColumn = `${a5} / span 1`
  c5.style.gridRow = `${b5} / span 1`
  c6.style.gridColumn = `${a6} / span 1`
  c6.style.gridRow = `${b6} / span 1`
  c7.style.gridColumn = `${a7} / span 1`
  c7.style.gridRow = `${b7} / span 1`
  c8.style.gridColumn = `${a8} / span 1`
  c8.style.gridRow = `${b8} / span 1`
  c9.style.gridColumn = `${a9} / span 1`
  c9.style.gridRow = `${b9} / span 1`
  c10.style.gridColumn = `${a10} / span 1`
  c10.style.gridRow = `${b10} / span 1`
}

function pos(p1, p2, p3, p4, p5, p6, p7, p8, p9, p10) {
  ap.innerHTML = p1;
  bp.innerHTML = p2;
  cp.innerHTML = p3;
  dp.innerHTML = p4;
  ep.innerHTML = p5;
  fp.innerHTML = p6;
  gp.innerHTML = p7;
  hp.innerHTML = p8;
  ip.innerHTML = p9;
  jp.innerHTML = p10;
}
squad.addEventListener('change', function() {
  if (squad.value == "4-3-3 A") {
    chplaces(1, 1, 3, 1, 5, 1, 3, 2, 2, 3, 4, 3, 1, 5, 2, 5, 4, 5, 5, 5)
    pos("LW", "ST", "RW", "CAM", "CM", "CM", "LB", "CB", "CB", "RB")
  } else if (squad.value == "4-4-2 sdh") {
    chplaces(2, 1, 4, 1, 1, 3, 2, 3, 4, 3, 5, 3, 1, 5, 2, 5, 4, 5, 5, 5)
    pos("ST", "ST", "LM", "CM", "CM", "RM", "LB", "CB", "CB", "RB")
  } else if (squad.value == "3-4-3 sdh") {
    chplaces(1, 1, 3, 1, 5, 1, 1, 3, 2, 3, 4, 3, 5, 3, 2, 5, 3, 5, 4, 5)
    pos("LW", "ST", "RW", "LM", "CM", "CM", "RM", "CB", "CB", "CB")
  } else if (squad.value == "4-2-3-1 deqa") {
    chplaces(3, 1, 2, 2, 4, 2, 3, 3, 2, 4, 4, 4, 1, 5, 2, 5, 4, 5, 5, 5)
    pos("ST", "CAM", "CAM", "CAM", "CDM", "CDM", "LB", "CB", "CB", "RB")
  } else if (squad.value == "4-1-4-1") {
    chplaces(3, 1, 1, 2, 2, 2, 4, 2, 5, 2, 3, 3, 1, 5, 2, 5, 4, 5, 5, 5)
    pos("ST", "LM", "CM", "CM", "RM", "CDM", "LB", "CB", "CB", "RB")
  } else if (squad.value == "5-2-2-1") {
    chplaces(1, 1, 3, 1, 5, 1, 2, 3, 4, 3, 1, 4, 5, 4, 2, 6, 3, 6, 4, 6)
    pos("LW", "ST", "RW", "CM", "CM", "LWB", "RWB", "CB", "CB", "CB")
  } else if (squad.value == "4-1-2-1-2 deqa") {
    chplaces(2, 1, 4, 1, 3, 2, 2, 3, 4, 3, 3, 4, 1, 5, 2, 5, 4, 5, 5, 5)
    pos("ST", "ST", "CAM", "CM", "CM", "CDM", "LB", "CB", "CB", "CB", "RB")
  } else if (squad.value == "4-5-1") {
    chplaces(3, 1, 2, 2, 4, 2, 1, 3, 5, 3, 3, 4, 1, 5, 2, 5, 4, 5, 5, 5)
    pos("ST", "CAM", 'CAM', 'LM', 'RM', 'CM', 'LB', 'CB', 'CB', 'RB')
  } else if (squad.value == "4-2-2-2") {
    chplaces(2, 1, 4, 1, 1, 2, 5, 2, 2, 3, 4, 3, 1, 5, 2, 5, 4, 5, 5, 5)
    pos('ST', 'ST', 'CAM', 'CAM', 'CDM', 'CDM', 'LB', 'CB', 'CB', 'RB')
  } else if (squad.value == "4-3-3") {
    chplaces(1, 1, 3, 1, 5, 1, 2, 3, 3, 3, 4, 3, 1, 5, 2, 5, 4, 5, 5, 5)
    pos("LW", "ST", "RW", "CM", "CM", "CM", "LB", "CB", "CB", "RB")
  } else if (squad.value == "5-4-1") {
    chplaces(3, 1, 4, 2, 1, 3, 5, 3, 2, 4, 1, 5, 5, 5, 2, 6, 3, 6, 4, 6)
    pos("ST", "CAM", "LM", "RM", "CDM", "LWB", "RWB", "CB", "CB", 'CB')
  } else if (squad.value == "5-2-1-2") {
    chplaces(2, 1, 4, 1, 3, 2, 2, 3, 4, 3, 1, 4, 5, 4, 2, 5, 3, 5, 4, 5)
    pos("ST", "ST", "CAM", "CM", "CM", "LWB", "RWB", "CB", "CB", 'CB')
  } else if (squad.value == "4-5-1 sdh") {
    chplaces(3, 1, 1, 3, 5, 3, 2, 4, 3, 4, 4, 4, 1, 5, 2, 5, 4, 5, 5, 5)
    pos("ST", "LM", "RM", "CM", "CM", "CM", "LB", "CB", "CB", "RB")
  } else if (squad.value == "3-5-1-1") {
    chplaces(2, 1, 4, 2, 1, 3, 3, 3, 5, 3, 2, 4, 4, 4, 2, 5, 3, 5, 4, 5)
    pos('ST', 'CF', 'LM', 'CM', 'RM', 'CDM', 'CDM', 'CB', 'CB', 'CB')
  } else if (squad.value == "4-1-2-1-2 areda") {
    chplaces(2, 1, 4, 1, 3, 2, 1, 3, 5, 3, 3, 4, 1, 5, 2, 5, 4, 5, 5, 5)
    pos("ST", "ST", "CAM", "LM", "RM", "CDM", "LB", "CB", "CB", "CB", "RB")
  } else if (squad.value == "4-3-3 hfadh") {
    chplaces(1, 1, 3, 1, 5, 1, 2, 3, 4, 3, 3, 4, 1, 5, 2, 5, 4, 5, 5, 5)
    pos("LW", "ST", "RW", "CM", "CM", "CDM", "LB", "CB", "CB", "RB")
  } else if (squad.value == "3-5-2") {
    chplaces(2, 1, 4, 1, 3, 2, 1, 3, 5, 3, 2, 4, 4, 4, 2, 5, 3, 5, 4, 5)
    pos("ST", 'ST', 'CAM', 'LM', 'RM', 'CDM', 'CDM', 'CB', 'CB', 'CB')
  } else if (squad.value == "4-3-3 def") {
    chplaces(1, 1, 3, 1, 5, 1, 3, 3, 2, 4, 4, 4, 1, 5, 2, 5, 4, 5, 5, 5)
    pos("LW", "ST", "RW", "CM", "CDM", "CDM", "LB", "CB", "CB", "RB")
  } else if (squad.value == "5-3-2") {
    chplaces(2, 1, 4, 1, 1, 3, 3, 3, 5, 3, 1, 4, 5, 4, 2, 5, 3, 5, 4, 5)
    pos("ST", "ST", "CM", "CM", "CM", "LWB", "RWB", "CB", "CB", 'CB')
  } else if (squad.value == "4-2-3-1") {
    chplaces(3, 1, 3, 2, 1, 3, 5, 3, 2, 4, 4, 4, 1, 5, 2, 5, 4, 5, 5, 5)
    pos('ST', 'CAM', 'LM', 'RM', 'CDM', 'CDM', 'LB', 'CB', 'CB', 'RB')
  } else if (squad.value == "4-4-2 hfadh") {
    chplaces(2, 1, 4, 1, 1, 3, 5, 3, 2, 4, 4, 4, 1, 5, 2, 5, 4, 5, 5, 5)
    pos("ST", "ST", "LM", "RM", "CDM", "CDM", "LB", "CB", "CB", "RB")
  } else if (squad.value == "4-3-1-2") {
    chplaces(2, 1, 4, 1, 3, 2, 1, 3, 3, 3, 5, 3, 1, 5, 2, 5, 4, 5, 5, 5)
    pos('ST', 'ST', 'CAM', 'CM', 'CM', 'CM', 'LB', 'CB', 'CB', 'RB')
  } else if (squad.value == "4-4-1-1") {
    chplaces(3, 1, 3, 2, 1, 3, 2, 3, 4, 3, 5, 3, 1, 5, 2, 5, 4, 5, 5, 5)
    pos("ST", "CF", "LM", "CM", "CM", "RM", "LB", "CB", "CB", "RB")
  } else if (squad.value == "3-4-1-2") {
    chplaces(2, 1, 4, 1, 3, 2, 1, 3, 5, 3, 2, 4, 4, 4, 2, 5, 3, 5, 4, 5)
    pos('ST', 'ST', 'CAM', 'LM', 'RM', 'CM', 'CM', 'CB', 'CB', 'CB')
  } else if (squad.value == "3-4-3 dia") {
    chplaces(1, 1, 3, 1, 5, 1, 4, 2, 1, 3, 5, 3, 2, 4, 2, 5, 3, 5, 4, 5)
    pos('LW', 'ST', 'RW', 'CAM', 'LM', 'RM', 'CDM', 'CB', 'CB', 'CB')
  } else if (squad.value == "4-3-3 cf") {
    chplaces(1, 1, 5, 1, 3, 2, 2, 3, 4, 3, 3, 4, 1, 5, 2, 5, 4, 5, 5, 5)
    pos("LW", "RW", "CF", "CM", "CM", "CDM", "LB", "CB", "CB", "RB")

  } else if (squad.value == "4-2-4") {
    chplaces(2, 1, 4, 1, 1, 2, 5, 2, 2, 3, 4, 3, 1, 5, 2, 5, 4, 5, 5, 5)
    pos("ST", "ST", "LW", "RW", "CM", "CM", "LB", "CB", "CB", "RB")
  }
})
//حساب الأوفر
let ovrout = document.querySelector('#ovr')
let overss = [o1, o2, o3, o4, o5, o6, o7, o8, o9, o10, o11]
let btn = document.getElementById('calc')
let ovrre = document.getElementById('ovrremain')
let rankre = document.getElementById('rankremain')
let rem = document.getElementById('rem')
btn.addEventListener('click', function() {
  
  let n1 = +o1.value - r1.value
  let n2 = +o2.value - r2.value
  let n3 = +o3.value - r3.value
  let n4 = +o4.value - r4.value
  let n5 = +o5.value - r5.value
  let n6 = +o6.value - r6.value
  let n7 = +o7.value - r7.value
  let n8 = +o8.value - r8.value
  let n9 = +o9.value - r9.value
  let n10 = +o10.value - r10.value
  let n11 = +o11.value - r11.value
  let totalovr = (n1 + n2 + n3 + n4 + n5 + n6 + n7 + n8 + n9 + n10 + n11)
  let ovrp = Math.ceil(totalovr / 11)
  let totalrank = (+r1.value + +r2.value + +r3.value + +r4.value + +r5.value + +r6.value + +r7.value + +r8.value + +r9.value + +r10.value + +r11.value)
  let rankp = Math.ceil(totalrank / 11)
  let ovr = ovrp + rankp
  let remaino = (totalovr - 1) % 11
  let ovrremain = 11 - remaino
  let remainr = (totalrank - 1) % 11
  let rankremain = 11 - remainr
  ovrfinal = ovr
  rankvr = totalrank
  ovvr = ovrremain
  if (totalrank == 0) {
    rankremain = 1;
  }
  rankrem = rankremain
  let ok = true
  for (let i = 0; i < 11; i++) {
    if (overss[i].value < 0 || overss[i].value.length == 0) {
      ok = false;
      break;
    }
  }
  if (ok) {
    rem.style.display = 'block'
    ovrout.innerHTML = `الأوفر هو ${ovr}`
    ovrre.innerHTML = `تبقى ${ovrremain} أوفر على الأوفر القادم`
    if (rankp < 5) {
      rankre.innerHTML = `تبقى ${rankremain} رانك على الأوفر القادم`
    } else {
      rankre.innerHTML = `توقف تطوير الرانكات
  <br>
  فكر في رفع أوفر لاعبيك الأساسي`
    }
  } else {
    rem.style.display = 'none'
    ovrout.innerHTML = "هناك خانة فارغة أو طاقة خطأ"
    ovrre.innerHTML = ''
    rankre.innerHTML = ''
  }
})
//night mode
let nilight = document.querySelector('i')
let lo = document.querySelectorAll('img')[0]
let lo2 = document.querySelectorAll('img')[2]
let head = document.getElementsByClassName('head')[0]
let r = document.querySelector(':root')
let remainbg = document.getElementById('rem')
nilight.addEventListener('click', function() {
  if (nilight.classList.contains('fa-moon')) {
    nilight.classList.remove('fa-moon')
    nilight.classList.add('fa-sun')
    lo.src = 'night.png'
    lo2.src = 'night.png'
    remainbg.style.setProperty('background-image', "url('remainnight.jpg')")
    r.style.setProperty('--main-color', '#1d1a29')
    r.style.setProperty('--logo-color', '#18191a')
    r.style.setProperty('--text-color', 'white')
    r.style.setProperty('--input-color', '#4d3c77')
    r.style.setProperty('--sechead-color', 'black')
    r.style.setProperty('--squad-color', '#1d1a29')
  } else {
    nilight.classList.add('fa-moon')
    nilight.classList.remove('fa-sun')
    lo.src = 'light.png'
    lo2.src = 'light.png'
    remainbg.style.setProperty('background-image', "url('remainlight.jpg')")
    r.style.setProperty('--main-color', '#56D4BC')
    r.style.setProperty('--logo-color', '#2B97FF')
    r.style.setProperty('--text-color', 'black')
    r.style.setProperty('--input-color', 'white')
    r.style.setProperty('--sechead-color', 'white')
    r.style.setProperty('--input-color', 'white')
    r.style.setProperty('--squad-color', '#56d4bc')
  }
})
// الأعمال
let webbtn = document.getElementsByClassName('web-btn')
webbtn[0].addEventListener('click', function(e) {
  e.target.innerHTML = 'جار التحميل'
  setTimeout(function() {
    location.href = "https://sahers.github.io/fifas/"
  }, 2000)
})
webbtn[1].addEventListener('click', function(e) {
  e.target.innerHTML = 'جار التحميل'
  setTimeout(function() {
    location.href = "https://sahers.github.io/fifas-en/"
  }, 2000)
})
//أوفر باقي على أوفر مكتوب
let ovrremainr = document.getElementById('ovre')
let quest = document.getElementById('quesovr')
let btnsovr1 = document.getElementById('yes')
let btnsovr2 = document.getElementById('no')
let ansss = document.getElementsByClassName('anns')[0]
btnsovr1.addEventListener('click', function() {
  ovrremainr.style.setProperty('display', 'none')
  setTimeout(function() {
    ansss.style.setProperty('display', 'block')
  }, 1500)
})
let ouvr = document.getElementById('ovrz')
let btnouvr = document.getElementById('calcul')
let anss = document.getElementById('ans')
let ansso = document.getElementById('ans1')
let anssr = document.getElementById('ans2')
btnouvr.addEventListener('click', function() {
  if (ouvr.value < ovrfinal) {
    anss.innerHTML = '😂عاوز ترجع ضعيف ولا ايه'
    console.log(156)
  }
  if (ouvr.value <= 0) {
    anss.innerHTML = '☺عاوز تبقى ضعيف ماشي،لكن مش للدرجاتي '
    console.log(256)
  }
  else if (ouvr.value == ovrfinal) {
    ans.innerHTML = '😊ما أنت فيه فعلا '
    console.log(356)
  } else if (ouvr.value > ovrfinal) {
    anss.innerHTML = ''
    anss.appendChild(ansso)
    anss.appendChild(anssr)
    let dif = ouvr.value - (ovrfinal + 1)
    let total = rankrem + (dif * 11)
    let maxi = Math.ceil((45 - rankvr) / 11)
    if (maxi < 0) { maxi = 0 }
    let maxior = ovrfinal + maxi
    if ((total + rankvr) > 45) {
      anssr.innerHTML = `لن تستطيع الوصول بالرانكات وحدها لهذا الأوفر <br>
      أقصى أوفر يمكنك الوصول إليه بالرانكات هو ${maxior}`
    } else {
      anssr.innerHTML = `
تبقى ${total} رانك على هذا الأوفر`
    }
    let totalo = ovvr + (dif * 11)
    ansso.innerHTML = `تبقى ${totalo} أوفر لاعب على الأوفر القادم`
  }
})
btnsovr2.addEventListener('click', function() {
  ovrremainr.innerHTML = `حسنًا، نتمنى أن يفيدكم الموقع 😍`
})
// connect email js
let send = document.getElementById('send')
let namer = document.getElementById('name')
let emailer = document.getElementById('email')
let mess = document.getElementById('message')
let err = document.getElementById('err')
let form = document.getElementsByClassName('form')[0]
let conus = document.getElementsByClassName('contact-us')[0]
form.addEventListener('submit', function(e) {
  e.preventDefault();
  let istrue = true
  if (namer.value.length == 0 || !isNaN(namer.value)) {
    err.style.setProperty('display', 'block')
    istrue = false
  } else {
    istrue = true
    err.style.setProperty('display', 'none')
  }
  if (istrue) {
    let details = {
      from_name: namer.value,
      email: emailer.value,
      message: mess.value
    }
    //these IDs from the previous steps
    emailjs.send('service_vmkkfq7', 'Form_calc', details)
      .then(function() {
        namer.value = ''
        emailer.value = ''
        mess.value = ''
        conus.innerHTML = `<h2 style='text-align:center;'>📩تم إرسال الرسالة بنجاح</h2>`
      }, function(error) {
        err.innerHTML = 'هناك مشكلة في الإرسال'
      });

  }

})
// button up
let up = document.getElementsByClassName('btn')[0]
let upti = false
window.addEventListener('scroll',function(){
  if(scrollY > 1000){
    up.style.animationName = 'up'
    up.style.opacity = '1'
    upti = true
  }else{
    up.style.opacity = '0'
    if(upti){
      up.style.animationName = 'down'
    }
  }
})
up.addEventListener('click',function(){
  scrollTo(0,0)
}) 