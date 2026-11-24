# Entorns de desenvolupament · DAW

Web docent en HTML + CSS + JavaScript per organitzar la teoria del mòdul **M05: Entorns de desenvolupament**.

## Estructura

```text
entorns-desenvolupament/
├── index.html
├── ra1.html
├── ra2.html
├── ra3.html
├── img/
│   └── cicle-vida-scrum.png
├── css/
│   └── styles.css
├── js/
│   └── app.js
└── README.md
```

## Contingut actual

- Inici del mòdul.
- RA1: Desenvolupament de programari.
- RA2: Entorns de desenvolupament.
- RA3: Desenvolupament guiat per proves (TDD, JUnit 4 i 5, assertions, Eclipse i exemples pràctics).
- Espais preparats per a RA4, RA5 i RA6.

## Funcionalitats

- Disseny responsive.
- Navegació lateral.
- Cerca de continguts (`Ctrl/Cmd + K`).
- Mode clar/fosc recordat amb `localStorage`.
- Simulació visual del procés de compilació.
- Imatge integrada del cicle de vida de Scrum dins del RA1.
- Explicació ampliada dels paradigmes de programació amb exemples i comparativa.
- Apartat de comparació entre compiladors i intèrprets.
- Selecció de 4 tècniques/pràctiques àgils principals.
- Blocs desplegables.
- Checklist de repàs del RA1.
- Enllaços a recursos externs.
- Estils d'impressió.

## Publicació a GitHub Pages

1. Crea un repositori.
2. Copia aquests fitxers mantenint l'estructura de carpetes.
3. Fes `git add .`
4. Fes `git commit -m "Afegim teoria RA1"`
5. Fes `git push`
6. Activa GitHub Pages des de les opcions del repositori.

No necessita Node.js, npm ni cap servidor: és una web estàtica.

## Ampliació futura

Per afegir cada RA, es recomana mantenir:
- una pàgina HTML pròpia per RA;
- els mateixos estils;
- la mateixa navegació;
- una estructura de continguts basada en blocs curts, esquemes, taules, exemples i recursos.

## Font docent

El RA1 s'ha estructurat a partir de la presentació facilitada de **M05: Entorns de desenvolupament · UF1: Desenvolupament de programari**. S'han afegit alguns continguts d'ampliació clarament identificables dins la web (paradigmes, característiques de llenguatges, tècniques àgils i recursos externs).

- Redisseny visual professional amb fons blanc i estil de documentació tècnica.


## RA2 incorporat

S'ha afegit `ra2.html` amb teoria d'entorns de desenvolupament centrada en Eclipse: funcions de l'IDE, instal·lació i configuració, interfície, edició, depuració, plugins, exportació Runnable JAR i automatització. Inclou una simulació interactiva de seguiment de variables. La pàgina inicial i la navegació permeten accedir al RA2.


## RA3 incorporat

S'ha incorporat `ra3.html` i s'ha actualitzat la navegació i la pàgina d'inici per donar-hi accés. El contingut inclou TDD, proves unitàries i de regressió, JUnit, diferències entre JUnit 4 i JUnit 5, anotacions, assertions, creació i execució de proves a Eclipse 2025-06, exemples amb `MyNumber`, `Calculadora`, `Pila` i `Compte`, suites i proves d'aplicacions web.

Les imatges de la guia d'Eclipse són esquemes didàctics de la interfície, no captures reals de l'aplicació.
