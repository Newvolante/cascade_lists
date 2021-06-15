(function() {
    console.warn('Script linked correctly to web page');

    let firstField = document.getElementById('first_select_field');
    let secondField = document.getElementById('second_select_field');
    
    let super_pro = {
        heavyBag: '40 kg cheap model',
        gloves: 'Cheap training gloves',
        bands: 'Cheap boxing bands'
    }

    let leone_1947 = {
        heavyBag: '50 kg professional heavy bag',
        gloves: 'Intermediate sparring gloves',
        bands: 'Semi-elastic boxing bands',
        other: 'Reflex ball'
    }

    // first field event listener
    firstField.addEventListener('change', function() {
        let brand = getBrand(this.value);
        let option = '';
        for (let key in brand) {
            option += '<option value=" + key + ">' + brand[key] + '</option>';
        }
        secondField.innerHTML = option;
    });

    // returns a brand
    function getBrand(brand) {
        return (brand === "super_pro") ? super_pro : leone_1947;
    }
})();