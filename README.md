# Tip Calculator (Angular)
Μια μικρή, responsive εφαρμογή υπολογισμού φιλοδωρήματος (Tip Calculator) φτιαγμένη με **Angular** και **SCSS**.

## Περιγραφή
Ο χρήστης μπορεί να υπολογίσει:
- το φιλοδώρημα (tip) ανά άτομο
- το συνολικό ποσό ανά άτομο
όταν μοιράζεται ένας λογαριασμός.

---

## Τεχνολογίες που χρησιμοποιήθηκαν
- Angular
- TypeScript
- SCSS
- HTML5

---

## Δομή φακέλων
src/
├── app/
│   ├── components/
│   │   ├── tip-form/
│   │   │   ├── tip-form.component.ts
│   │   │   ├── tip-form.component.html
│   │   │   └── tip-form.component.scss
│   │   └── result/
│   │       ├── result.component.ts
│   │       ├── result.component.html
│   │       └── result.component.scss
│   ├── services/
│   │   └── tip-calculator.service.ts
│   ├── app.component.ts
│   ├── app.component.html
│   ├── app.component.scss
│   └── app.module.ts
├── index.html
├── main.ts
└── styles.scss

---

## Τοπική εκτέλεση
1. Κλωνοποιήστε το repository
2. Εκτελέστε npm install για να εγκαταστήσετε τις εξαρτήσεις.
3. Τρέξτε την εφαρμογή με ng serve --open ή εναλλακτικά με npm start.
4. Ανοίξτε το πρόγραμμα περιήγησης στη διεύθυνση: http://localhost:4200/