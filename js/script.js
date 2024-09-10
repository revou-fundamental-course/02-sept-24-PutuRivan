const LuasSegitiga = (event) => {
    event.preventDefault()
    const alas = document.getElementById('Alas Segitiga').value
    const tinggi = document.getElementById('Tinggi Segitiga').value
    const output = document.getElementById('output')
    const a = document.getElementById('alas')
    const t = document.getElementById('tinggi')
    const L = document.getElementById('hasilLuas')
    const luas = 1 / 2 * alas * tinggi
    output.style.display = 'block'
    a.innerHTML = alas
    t.innerHTML = tinggi
    L.innerHTML = luas
}

const KelilingSegitiga = (event) => {
    event.preventDefault()
    const S1 = Number(document.getElementById('S1').value)
    const S2 = Number(document.getElementById('S2').value)
    const S3 = Number(document.getElementById('S3').value)

    const output = document.getElementById('outputs')
    const K = document.getElementById('K')
    const SS1 = document.getElementById('SS1')
    const SS2 = document.getElementById('SS2')
    const SS3 = document.getElementById('SS3')
    output.style.display = 'block'
    const keliling = S1 + S2 + S3
    K.innerHTML = keliling
    SS1.innerHTML = S1
    SS2.innerHTML = S2
    SS3.innerHTML = S3
    console.log(typeof(keliling))
    console.log(typeof(S1))
    console.log(typeof(S2))
    console.log(typeof(S3))
}

const reset = document.getElementById('reset')
reset.addEventListener('click', () => {
    const output = document.getElementById('output')
    const outputs = document.getElementById('outputs')
    output.style.display = 'none'
    outputs.style.display = 'none'
})
