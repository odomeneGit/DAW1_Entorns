(() => {
  const line = document.getElementById('debugLine');
  const status = document.getElementById('debugStatus');
  const value = document.getElementById('debugValue');
  const next = document.getElementById('debugNext');
  const reset = document.getElementById('debugReset');
  if (!line || !status || !value || !next || !reset) return;
  const steps = [
    {line:'String titol = "Projector no funciona";',status:'Línia 1 · assignació',value:'"Projector no funciona"'},
    {line:'String aula = "Info 4";',status:'Línia 2 · assignació',value:'titol = "Projector no funciona"'},
    {line:'String prioritat = "Alta";',status:'Línia 3 · assignació',value:'aula = "Info 4" · prioritat = "Alta"'},
    {line:'System.out.println(titol);',status:'Breakpoint · execució aturada',value:'titol = "Projector no funciona"'},
    {line:'System.out.println(aula);',status:'Pas següent',value:'aula = "Info 4"'},
    {line:'System.out.println(prioritat);',status:'Última instrucció',value:'prioritat = "Alta"'},
    {line:'Programa finalitzat.',status:'Execució finalitzada',value:'Les variables ja no són locals actives de la sessió'}
  ];
  let index = -1;
  function render(){
    if(index < 0){line.textContent='String titol = "Projector no funciona";';status.textContent='Preparat';value.textContent='Sense assignar';next.textContent='▶ Següent pas';return;}
    const s=steps[index]; line.textContent=s.line; status.textContent=s.status; value.textContent=s.value;
    next.textContent=index===steps.length-1?'✓ Finalitzat':'▶ Següent pas';
  }
  next.addEventListener('click',()=>{if(index<steps.length-1){index++;render();}else{index=-1;render();}});
  reset.addEventListener('click',()=>{index=-1;render();});
})();
