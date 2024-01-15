$(document).ready(function () {
    Control.Init();
});

let Selector = {
    inputSisi: "#sisi",
    hslLuas: "#luas",
    hslKeliling: "#keliling",
    btnHitung: "#btn-hitung",
    btnReset: "#btn-reset"
}

let Control = {
    Init: function () {
        Control.Event();
    },
    Hitung: function () {
        let sisi = $(Selector.inputSisi).val();
        let luas = sisi * sisi;
        let keliling = 4 * sisi;
        $(Selector.hslLuas).val(luas);
        $(Selector.hslKeliling).val(keliling);
    },
    Event: function () {
        $(Selector.btnHitung).off("click").on("click", function (event) {
            event.preventDefault();
            Control.Hitung();
        });
        $(Selector.btnReset).off("click").on("click", function (event) {
            event.preventDefault();
            $(Selector.inputSisi).val("");
            $(Selector.hslLuas).val("");
            $(Selector.hslKeliling).val("");
        });
    }
}