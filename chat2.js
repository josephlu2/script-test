(() => {
    let t = document.currentScript,
      e = () => {
        let e = window.matchMedia('(min-width: 768px)'),
          i = document.createElement('div')
        i.setAttribute('id', 'dialoq')
        let d = i.style
        d.display = 'none'
        d.boxSizing = 'border-box'
        d.height = '80vh'
        d.position = 'fixed'
        d.bottom = '80px'
        d.right = '20px'
        d.zIndex = '9999'
        let a = document.createElement('iframe'),
          o = a.style
        o.boxSizing = 'borderBox'
        o.position = 'absolute'
        o.right = 0
        o.top = 0
        o.width = '100%'
        o.height = '100%'
        o.border = 1
        o.margin = 0
        o.padding = 0
        o.borderRadius = '10px'
        o.backgroundColor = 'white'
        o.borderWidth = '1px'
        o.boxShadow = '3px 2px 9px 1px rgba(181,181,181,0.4)'
        e.matches
          ? (d.width = '400px')
          : ((d.width = '100%'),
            (d.bottom = '0'),
            (d.right = '0'),
            (d.height = '100%'),
            (o.borderRadius = '0'),
            (o.border = 0))
        i.appendChild(a)
        /* let l = t.getAttribute('data-chatbot-id'),
          r = `https://dialoqai.com/chatbot/${l}` */
          let l = t.getAttribute('data-chatbot-id'),
          r = `http://localhost:3000/chat/645f0c178551cc33de9c993d`
        a.src = r
        document.body.appendChild(i)
      },
      i = () => {
        let t = document.createElement('div'),
          e = t.style
        e.display = 'block'
        e.position = 'fixed'
        e.bottom = '20px'
        e.right = '20px'
        e.zIndex = '9999'
        let i = document.createElement('button')
        i.setAttribute('id', 'chat-btn')
        let d = i.style
        d.backgroundColor = '#7ba5ea'
        d.color = 'white'
        d.width = '50px'
        d.height = '50px'
        d.borderRadius = '50%'
        d.borderWidth = '0px'
        t.appendChild(i)
        document.body.appendChild(t)
      }
    'complete' === document.readyState
      ? (i(), e())
      : document.addEventListener('readystatechange', () => {
          'complete' === document.readyState && (i(), e())
        })
    window.addEventListener('message', function (t) {
      'closeIframe' === t.data &&
        ((document.getElementById('dialoq').style.display = 'none'),
        (document.getElementById('chat-btn').innerHTML =
          "<img style='margin: 0 auto;' width='30px' height='30px' src='https://cdn.dialoqai.com/js/dialoq/images/chat.svg' />"))
    })
  })()