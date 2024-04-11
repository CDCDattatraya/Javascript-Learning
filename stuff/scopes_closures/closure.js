// closures - 

// example 

const bark1 = dog => {
    const say = `${dog} barked!`
    console.log(say)
  }
  
  bark1(`dog1`)

// using closure

const bark = dog => {
    const say = `${dog} barked!`
    return () => console.log(say) //dosent not print
  }

  const makedogBark = bark(`dog2`)

makedogBark()

//scope of the inner function returned from bark() also includes the scope of a parent function