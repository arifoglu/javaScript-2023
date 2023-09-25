window.onload = function(){

    let tabs = document.querySelectorAll("ul#onglet li");
    // console.log(tabs);
    
    let panels = document.querySelectorAll("#page div");
    // console.log(panels);

  tabs.forEach(function(tab){
    // console.log(tab); // 3 li comes

   tab.onclick = function(){
   //  console.log(tab);

    tabs.forEach(function(tabSub,index){
        if(tab === tabSub)
        {
            tabSub.classList.add("onglet_actif");
            // console.log(tabSub);
            panels[index].classList.add("txt_onglet_actif");
            panels[index].classList.remove("txt_onglet_invisible")
        }
        else
        {
            tabSub.classList.remove("onglet_actif");
            // console.log(tabSub)
            panels[index].classList.remove("txt_onglet_actif");
            panels[index].classList.add("txt_onglet_invisible")
        };
    })
   };

  })




















}