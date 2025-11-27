const input = document.getElementById("input")


function reverse_String(str){
    return str.split("").reverse().join("")
}



function check(){
    const value = input.value
    // if value === input.value[-1::]
    let reversed_string = ""
    for (let i =value.length-1;i >= 0;i--){
        reversed_string += value[i]
    }
    if (value === reversed_string){
        alert("IT  IS  A  P A L I N D R O M E")
    } else {
        alert("NOT A PALINDROME")
    }
    // return reversed_string

    // const reverse = reverse_String(value)

    // if (value === reverse){
    //     alert("IT  IS  A  P A L I N D R O M E")
    // } else {
    //     alert("NOT A PALINDROME")
    // }

    input.value = ""
}