# Tailor the portfolio to your real CV and certificates

Keep the current dark "kinetic glass" look. Replace every placeholder with your actual details from the uploaded CV and the six Google/Coursera certificates, then do a polish pass for phones and tablets.

## Who the site presents you as

Intellegent Kutlwano Mavimbela — Financial Management Administrator (N6), Gauteng.
Headline focus: Sage Pastel v19, Draftworx, SARS eFiling, VAT/Tax, CIPC compliance, payroll and labour statutory work — now paired with Google AI Essentials skills.

## Section by section

**Hero + About** — your name, "Financial & Compliance Administrator", and your CV summary rewritten for the web. Location Gauteng, Code 10 driver's licence (valid).

**Skills** — from your CV, grouped:
- Accounting systems: Sage Pastel v19, Draftworx, MS Excel
- Taxation: SARS eFiling, VAT201, EMP201/501 reconciliations, tax status management
- Statutory compliance: CIPC registrations, Beneficial Ownership filings, annual returns
- Payroll & labour: Sage Pastel Payroll 2019, UIF declarations, COIDA/ROE
- AI tools: prompting, AI-assisted productivity, responsible AI use
- Soft skills: accuracy under volume, unsupervised delivery, client communication

**Projects → three work highlights** (built from your real duties, no invented clients):
1. Full-cycle VAT & tax processing — VAT201, EMP201/501, annual financial statements in Draftworx
2. CIPC company compliance — registrations, Beneficial Ownership registers, annual returns
3. Payroll & labour compliance — Sage Pastel Payroll, UIF declarations, COIDA ROE renewals

Each keeps the card style with the tools used. The current generated tech images get replaced with finance/compliance-appropriate visuals.

**Experience** — ManalaSnail Accountants, Hatfield (2024–present) and Tradeway Promotions, Bryanston (2022–2023), with your bullet points.

**Education** — N6 Financial Management, Central Johannesburg College (2019–2021); National Senior Certificate, Prestigious Aureate High School (2018).

**Certifications** — Google AI Essentials Professional Certificate (5-course specialization, Sep 2026) as the headline, with the five courses listed beneath: Introduction to AI, Maximize Productivity With AI Tools, Discover the Art of Prompting, Use AI Responsibly, Stay Ahead of the AI Curve. Each links to its Coursera verification page so employers can confirm it.

**Contact** — email Kutlwanomawela1@gmail.com, phone 081 458 3735 and 084 757 2130, location Gauteng. No GitHub or LinkedIn buttons, since you don't have those.

**CV download** — your uploaded resume PDF becomes the download, so employers get your real document.

## Responsive, navigation and polish pass

- Check and fix every section at phone, tablet and desktop widths: single-column stacking, readable headline sizes, no clipped or overflowing text, tap targets big enough for thumbs.
- Navigation: the sticky top bar collapses into a menu button on phones, with links to About, Skills, Work, Experience, Education, Certifications and Contact that scroll smoothly and highlight the section you're in.
- Email, phone and CV buttons work as direct tap actions on mobile.
- Verify the finished pages by loading them at phone, tablet and desktop sizes and reviewing screenshots before handing over.

## Technical notes

- Content edits live in `src/routes/index.tsx`; head() title/description updated to the finance-admin positioning.
- Uploaded resume served via a Lovable asset pointer; the previously generated placeholder CV PDF is removed.
- Certificate PDFs published as verifiable downloads linked from the certification cards.
- Three new project images generated to replace the developer-themed ones.
- Responsive work uses the grid + `min-w-0` + `shrink-0` header pattern and existing design tokens; no new colour system.
- Reference (Grace Pule) left off the public site — "available on request" is safer.
