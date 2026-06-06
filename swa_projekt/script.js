function vykresliKarty(data, containerId, options = {}) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = "";

    data.forEach(item => {
        const karta = document.createElement("div");
        karta.className = options.trida || "card luxury-card";

        let tlacitkoHTML = "";
        if (options.tlacitko) {
            if (item.url) {
                tlacitkoHTML = `<a href="${item.url}" class="btn-small">${options.tlacitko}</a>`;
            } else {
                tlacitkoHTML = `<button class="btn-small">${options.tlacitko}</button>`;
            }
        }

        karta.innerHTML = `
            ${item.badge ? `<div class="card-badge">${item.badge}</div>` : ""}
            <h3>${item.nazev || item.pozice || item.jmeno}</h3>
            <p>${item.kratkyPopis || item.popis || item.text}</p>
            ${item.puvodniCena ? `<span class="old-price">${item.puvodniCena}</span>` : ""}
            ${item.cena ? `<span class="price">${options.prefixCena || "od"} ${item.cena}</span>` : ""}
            ${item.info ? `<span class="price">${item.info}</span>` : ""}
            ${item.hvezdy ? `<div class="stars">${item.hvezdy}</div>` : ""}
            ${tlacitkoHTML}
        `;

        container.appendChild(karta);
    });
}

vykresliKarty(zajezdy,           "katalog-zajezdu",             { tlacitko: "Více informací" });
vykresliKarty(evropskeZajezdy,   "katalog-evropskych-zajezdu",   { tlacitko: "Více informací" });
vykresliKarty(lastMinuteZajezdy, "katalog-lastminute-zajezdu",   { tlacitko: "Více informací", prefixCena: "akce" });
vykresliKarty(recenzeData,       "seznam-recenzi");
vykresliKarty(karieraData,       "kariera-container",            { tlacitko: "Odpovědět" });