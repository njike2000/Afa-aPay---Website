# Strapi Inhalte Erstellen - Vollständige Anleitung

Diese Anleitung zeigt dir Schritt für Schritt, wie du Blogartikel, Testimonials und Anwendungsfälle in Strapi erstellst.

## 🚀 Voraussetzungen

1. **Strapi läuft** auf `http://localhost:1337`
2. **Admin-Konto erstellt** und angemeldet
3. **Content Types erstellt** (siehe CONTENT_TYPES_SETUP.md)

---

## 📝 1. BLOGARTIKEL ERSTELLEN

### Schritt 1: Zur Blog-Artikel-Seite navigieren

1. Öffne `http://localhost:1337/admin`
2. Klicke auf **"Content Manager"** im linken Menü
3. Wähle **"Blog Articles"** aus der Liste

### Schritt 2: Neuen Artikel erstellen

1. Klicke auf den Button **"Create new entry"** (oben rechts)
2. Du siehst das Formular mit allen Feldern

### Schritt 3: Felder ausfüllen

#### **Englischer Artikel:**

| Feld | Wert | Beschreibung |
|------|------|-------------|
| **title** | "How to Reduce Payment Fraud by 90%" | Der Titel des Artikels |
| **slug** | "how-to-reduce-payment-fraud" | URL-freundlicher Name (automatisch generiert) |
| **excerpt** | "Learn the top strategies businesses are using to eliminate payment fraud and protect their revenue." | Kurze Zusammenfassung |
| **content** | Siehe unten | Der vollständige Artikel-Text |
| **author** | "Sarah Johnson" | Name des Autors |
| **date** | "2025-01-10" | Veröffentlichungsdatum |
| **category** | "Security" | Kategorie (z.B. Security, Compliance, Business) |
| **language** | "en" | Sprache: **en** für Englisch |
| **featured** | ✓ (aktiviert) | Artikel auf Startseite anzeigen? |

#### **Inhaltsbeispiel für das "content" Feld:**

```
# Wie man Zahlungsbetrug um 90% reduziert

Zahlungsbetrug kostet Unternehmen jährlich Millionen. Hier sind die Top-Strategien, um Betrug zu eliminieren:

## 1. Escrow-Schutz für alle Transaktionen

Verwende Escrow-Systeme, um Zahlungen zu schützen, bis beide Parteien zufrieden sind.

## 2. Digitale Verträge implementieren

Automatisch generierte, rechtlich bindende Verträge für jede Transaktion.

## 3. Transaktionsmuster überwachen

Erkenne verdächtige Muster durch KI-gestützte Analyse.

## 4. Trust Scores verwenden

Verifiziere Parteien durch Reputationssysteme und Trust Scores.

## 5. Mehrschicht-Authentifizierung

Implementiere 2FA und biometrische Authentifizierung.

## Ergebnisse

Unternehmen, die diese Strategien implementieren, sehen:
- 90% Reduktion von Betrugsfällen
- 95% Kundenzufriedenheit
- 50% schnellere Transaktionen
```

### Schritt 4: Speichern und Veröffentlichen

1. Klicke **"Save"** (oben rechts)
2. Klicke **"Publish"** (oben rechts)
3. Bestätige die Veröffentlichung

### Schritt 5: Französischen Artikel erstellen

Wiederhole Schritte 1-4 mit diesen Änderungen:

| Feld | Wert |
|------|------|
| **title** | "Comment réduire la fraude aux paiements de 90%" |
| **slug** | "comment-reduire-fraude-paiements" |
| **excerpt** | "Découvrez les meilleures stratégies pour éliminer la fraude aux paiements." |
| **content** | [Französische Version des Inhalts] |
| **author** | "Sarah Johnson" |
| **language** | "fr" |

---

## 💬 2. TESTIMONIALS ERSTELLEN

### Schritt 1: Zur Testimonials-Seite navigieren

1. Klicke auf **"Content Manager"**
2. Wähle **"Testimonials"** aus der Liste

### Schritt 2: Neues Testimonial erstellen

1. Klicke **"Create new entry"**
2. Fülle die Felder aus

### Schritt 3: Felder ausfüllen

#### **Englisches Testimonial:**

| Feld | Wert | Beschreibung |
|------|------|-------------|
| **name** | "John Doe" | Name der Person |
| **company** | "TechStart Inc" | Unternehmensname |
| **position** | "CEO" | Position/Titel |
| **quote** | "Afa'a Pay transformed how we handle payments. We've reduced fraud by 95% and increased customer trust significantly." | Das Zitat |
| **rating** | "5" | Bewertung 1-5 Sterne |
| **language** | "en" | Sprache: **en** |
| **image** | [Optional] | Profilbild (hochladen) |

### Schritt 4: Speichern und Veröffentlichen

1. Klicke **"Save"**
2. Klicke **"Publish"**

### Schritt 5: Weitere Testimonials hinzufügen

Erstelle mindestens 3-5 Testimonials mit verschiedenen Personen:

**Testimonial 2 (Englisch):**
- Name: "Maria Garcia"
- Company: "E-commerce Store"
- Position: "Founder"
- Quote: "As an online seller, Afa'a Pay gives me peace of mind. My customers feel safe, and I get paid securely."
- Rating: 5

**Testimonial 3 (Englisch):**
- Name: "Ahmed Hassan"
- Company: "Import/Export Business"
- Position: "Operations Manager"
- Quote: "The mediation system resolved our dispute in 48 hours. Professional, fair, and transparent."
- Rating: 5

### Schritt 6: Französische Testimonials

Wiederhole mit französischen Versionen:

**Testimonial 1 (Französisch):**
- Name: "Jean Dupont"
- Company: "TechStart France"
- Position: "Directeur Général"
- Quote: "Afa'a Pay a transformé notre façon de gérer les paiements. Nous avons réduit la fraude de 95%."
- Language: **fr**

---

## 🎯 3. ANWENDUNGSFÄLLE ERSTELLEN

### Schritt 1: Zur Use Cases-Seite navigieren

1. Klicke auf **"Content Manager"**
2. Wähle **"Use Cases"** aus der Liste

### Schritt 2: Neuen Anwendungsfall erstellen

1. Klicke **"Create new entry"**
2. Fülle die Felder aus

### Schritt 3: Felder ausfüllen

#### **Anwendungsfall 1: E-Commerce (Englisch)**

| Feld | Wert |
|------|------|
| **title** | "E-Commerce Store Owner" |
| **slug** | "ecommerce-store-owner" |
| **description** | "How online sellers use Afa'a Pay to accept payments safely and build customer trust" |
| **segment** | "smes" |
| **language** | "en" |
| **benefits** | (JSON Array - siehe unten) |
| **results** | "Increased sales by 40%, reduced chargebacks by 95%, improved customer retention by 60%" |

#### **Benefits (JSON Format):**

```json
[
  "Accept payments from customers worldwide",
  "Automatic escrow protection for every sale",
  "Dispute resolution in 24-72 hours",
  "Build trust score for better payment terms",
  "Multiple payment methods (MTN, Orange, PayPal, Card)",
  "Real-time sales analytics and reporting"
]
```

#### **Anwendungsfall 2: Einzelperson/C2C (Englisch)**

| Feld | Wert |
|------|------|
| **title** | "Individual Seller (C2C)" |
| **slug** | "individual-seller-c2c" |
| **description** | "How individuals safely sell items online and get paid securely" |
| **segment** | "individuals" |
| **language** | "en" |
| **benefits** | (JSON Array) |
| **results** | "Sell with confidence, 99.9% transaction success rate, average resolution time 48 hours" |

```json
[
  "Sell items safely on social media",
  "Escrow protection until buyer confirms",
  "Fair dispute resolution system",
  "Build reputation through trust scores",
  "Easy payment collection via payment links",
  "No technical knowledge required"
]
```

#### **Anwendungsfall 3: Großunternehmen (Englisch)**

| Feld | Wert |
|------|------|
| **title** | "Enterprise Payment Infrastructure" |
| **slug** | "enterprise-payment-infrastructure" |
| **description** | "How large corporations manage complex payment operations with Afa'a Pay" |
| **segment** | "enterprises" |
| **language** | "en" |
| **benefits** | (JSON Array) |
| **results** | "Reduced payment processing costs by 35%, improved cash flow by 50%, 99.99% uptime" |

```json
[
  "Payment facilitator for multiple payment methods",
  "API integration for existing systems",
  "Real-time settlement and reporting",
  "Advanced fraud detection and prevention",
  "Dedicated account management",
  "SLA guarantees and 24/7 support"
]
```

### Schritt 4: Speichern und Veröffentlichen

1. Klicke **"Save"**
2. Klicke **"Publish"**

### Schritt 5: Französische Anwendungsfälle

Wiederhole mit französischen Versionen:

**Anwendungsfall 1 (Französisch):**
- Title: "Propriétaire de Boutique E-Commerce"
- Slug: "proprietaire-boutique-ecommerce"
- Description: "Comment les vendeurs en ligne utilisent Afa'a Pay pour accepter les paiements en toute sécurité"
- Segment: "smes"
- Language: **fr**
- Benefits: (Französische Version)

---

## 📊 Übersicht: Inhalte nach Sprache

### Englisch (en)
- ✅ 3-5 Blog-Artikel
- ✅ 3-5 Testimonials
- ✅ 5 Anwendungsfälle (für jeden Segment)

### Französisch (fr)
- ✅ 3-5 Blog-Artikel (Übersetzungen)
- ✅ 3-5 Testimonials (Übersetzungen)
- ✅ 5 Anwendungsfälle (Übersetzungen)

---

## 🔍 Überprüfung: Inhalte testen

### In Strapi Admin Panel

1. **Content Manager** → Wähle jeden Content Type
2. Überprüfe, dass alle Inhalte veröffentlicht sind (Status: "Published")
3. Überprüfe, dass die Sprachen korrekt gesetzt sind

### In der React-Anwendung

1. Starte die React-App: `pnpm dev`
2. Gehe zur Blog-Seite: `http://localhost:3000/blog`
3. Wechsle die Sprache (EN/FR) - Inhalte sollten sich ändern
4. Überprüfe, dass Testimonials und Use Cases laden

### API-Test

```bash
# Alle Blog-Artikel (Englisch)
curl "http://localhost:1337/api/blog-articles?filters[language][$eq]=en"

# Alle Testimonials (Französisch)
curl "http://localhost:1337/api/testimonials?filters[language][$eq]=fr"

# Use Cases für SMEs (Englisch)
curl "http://localhost:1337/api/use-cases?filters[segment][$eq]=smes&filters[language][$eq]=en"
```

---

## 💡 Tipps & Best Practices

### 1. **Slug-Konvention**
- Verwende nur Kleinbuchstaben
- Verwende Bindestriche statt Unterstriche
- Beispiel: `how-to-reduce-fraud` ✅, `How_To_Reduce_Fraud` ❌

### 2. **Mehrsprachige Inhalte**
- Erstelle zuerst englische Inhalte
- Übersetze dann ins Französische
- Verwende die gleichen Slugs für beide Versionen

### 3. **Content Struktur**
- Verwende Markdown für Blog-Artikel
- Nutze Überschriften (# H1, ## H2, ### H3)
- Formatiere Listen mit - oder *

### 4. **Bilder hinzufügen**
- Klicke auf "Media" Feld
- Lade Bilder hoch (JPG, PNG, WebP)
- Verwende optimierte Bilder (max 2MB)

### 5. **Veröffentlichungsstatus**
- **Draft**: Nicht öffentlich sichtbar
- **Published**: Öffentlich in der API verfügbar

---

## 🚀 Nächste Schritte

1. ✅ Erstelle Blog-Artikel (EN + FR)
2. ✅ Erstelle Testimonials (EN + FR)
3. ✅ Erstelle Anwendungsfälle (EN + FR)
4. ✅ Teste die Inhalte in der React-App
5. ✅ Veröffentliche die cms-version auf GitHub
6. ✅ Deploye auf Manus

---

## ❓ Häufig gestellte Fragen

**F: Wie ändere ich einen veröffentlichten Artikel?**
A: Klicke auf den Artikel, bearbeite die Felder, klicke "Save" und dann "Publish".

**F: Kann ich Inhalte löschen?**
A: Ja, klicke auf den Artikel und dann auf das Mülleimer-Symbol oben rechts.

**F: Wie filtere ich nach Sprache?**
A: In der React-App wird automatisch nach der ausgewählten Sprache gefiltert. In der API verwende: `?filters[language][$eq]=en`

**F: Können mehrere Personen gleichzeitig Inhalte erstellen?**
A: Ja, Strapi unterstützt mehrere Benutzer. Gehe zu Settings → Users, um weitere Benutzer hinzuzufügen.

**F: Wie sichere ich meine Inhalte?**
A: Strapi speichert Inhalte in der Datenbank. Für Backups verwende: `pnpm strapi export`
