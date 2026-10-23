(() => {
  const target=document.getElementById('features');
  if(!target || document.getElementById('multi-server')) return;
  const section=document.createElement('section');
  section.id='multi-server';section.className='shell multi-server-v2';
  section.setAttribute('aria-labelledby','multi-server-heading');
  const heading=document.createElement('div');heading.className='ms-head';
  heading.innerHTML='<div><p class="ms-eyebrow">MULTI-SERVER V2.0 · LIVE</p><h2 id="multi-server-heading">Две страны.<br><span class="gradient-text">Одна панель.</span></h2></div><p class="ms-subtitle">Два VPS в одной защищённой Telegram Mini App: системные ресурсы, переключение серверов и проверка свежести метрик.</p>';
  section.appendChild(heading);
  const grid=document.createElement('div');grid.className='ms-grid';
  const nodes=[
    {country:'🇳🇱',code:'NL-01',cls:'nl',where:'NETHERLANDS',kind:'Основной VPS',text:'CPU, RAM, диск, сеть и службы; история 24 часа, Smart Memory Monitoring, VPN Client Manager.',chips:['CPU / RAM / DISK','24H HISTORY','SMART MEMORY','SERVICE HEALTH'],foot:'VPN CLIENT MANAGER · ACTIVE'},
    {country:'🇺🇸',code:'US-01',cls:'us',where:'UNITED STATES',kind:'FirstByte VPS',text:'Удалённый мониторинг CPU, RAM, диска, swap, нагрузки и uptime; сбор каждые 5 минут, индикация устаревших данных.',chips:['CPU / RAM / DISK','SWAP / LOAD','UPTIME','5-MIN COLLECTION'],foot:'VPN USER MANAGEMENT · PLANNED'}
  ];
  nodes.forEach((node,i)=>{
    const card=document.createElement('article');card.className='ms-card '+node.cls;
    card.innerHTML='<div class="ms-cardtop"><span class="ms-flag" role="img">'+node.country+'</span><span class="ms-live">LIVE MONITORING</span></div><span class="ms-overline">0'+(i+1)+' / '+node.where+'</span><h3>'+node.code+' <small>'+node.kind+'</small></h3><p>'+node.text+'</p><div class="ms-chips">'+node.chips.map(t=>'<span>'+t+'</span>').join('')+'</div><div class="ms-foot"><span>'+node.foot+'</span><span aria-hidden="true">↗</span></div>';
    grid.appendChild(card);
  });
  section.appendChild(grid);
  const pipeline=document.createElement('div');pipeline.className='ms-pipeline';
  pipeline.textContent='🇺🇸 US-01  →  Защищённый SSH-сбор  →  🇳🇱 NL-01  →  Telegram-signed API  →  Mini App v2.0';
  section.appendChild(pipeline);
  const note=document.createElement('p');note.className='ms-footnote';
  note.textContent='LIVE подтверждено 5/5 Telegram-проверками. Управление VPN-клиентами доступно на NL-01; US-01 пока только read-only мониторинг. Системные метрики не доказывают доступность VPN извне; публичная страница не содержит частных данных.';
  section.appendChild(note);
  target.parentNode.insertBefore(section,target);
  const nav=document.querySelector('.nav-links');
  if(nav){const link=document.createElement('a');link.href='#multi-server';link.textContent='🇳🇱 🇺🇸 Серверы';nav.prepend(link);}
  const badge=document.querySelector('.miniapp-live');
  if(badge)badge.textContent='● LIVE · v2.0';
  const old=document.querySelector('.miniapp-gallery-count');
  if(old)old.textContent='7 исторических экранов · v0.7';
  const meta=document.querySelector('meta[name="description"]');
  if(meta)meta.content='VPS Control Center v2.0: мониторинг двух VPS в Нидерландах и США через Telegram Mini App, Smart Memory и управление VPN на основном сервере.';
})();