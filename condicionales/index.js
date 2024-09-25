const temperatura = prompt("Podrias indicarme la temperatura?")

if (temperatura > 30) {
    alert("Hace mucho calor")
}
else if (temperatura > 18) {
    alert("Hace una temperatura agradable")
}
else if (temperatura > 5) {
    alert("Hace frio")
}
else {
    alert("Hace mucho frio")
}