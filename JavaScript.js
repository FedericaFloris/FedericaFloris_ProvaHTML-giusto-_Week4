function Salva() {
    let key = document.getElementById("").value; //il testo che metto nell input lo metto nella key
    let value = document.getElementById("storageValue").value; //il testo che metto nell input lo metto nel value
    storage.setItem(key, value);
}