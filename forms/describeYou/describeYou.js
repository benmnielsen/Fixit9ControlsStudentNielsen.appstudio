rdoTraits.onclick=function(){
  let userChoice = $("input[name=rdoTraits]:checked").prop("value")
    lblTraits.value = `I would agree that you are a ${userChoice} person too!`
}

btnTraits.onclick=function(){
  ChangeForm(favExercises)
}
