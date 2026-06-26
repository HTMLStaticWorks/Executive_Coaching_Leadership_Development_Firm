# Aurelius | Executive Coaching & Leadership Development Firm Website Template

A premium, corporate-grade HTML5/CSS3 template engineered for elite Executive Coaching firms, board-level leadership consultancies, succession planners, and enterprise advisory organizations.

---

## 💎 Design System & Palette

### Light Mode
*   **Primary Accent:** `#0F172A` (Executive Navy)
*   **Secondary Tone:** `#334155` (Slate)
*   **Highlight Accent:** `#C59D5F` (Executive Gold)
*   **Interaction Highlight:** `#2563EB` (Leadership Blue)
*   **Background:** `#F8FAFC`
*   **Surface:** `#FFFFFF`
*   **Text Primary:** `#0F172A`
*   **Text Secondary:** `#475569`

### Dark Mode
*   **Background:** `#020617`
*   **Surface:** `#0B1120`
*   **Glass Elements:** `rgba(255,255,255,0.06)`
*   **Primary Accent:** `#D4AF6A` (Refinement Gold)
*   **Secondary Accent:** `#60A5FA` (Advisory Blue)
*   **Text Primary:** `#F8FAFC`
*   **Text Secondary:** `#CBD5E1`

---

## 🛠️ Technology Stack & Dependencies

1.  **Layout/Grid Framework:** Bootstrap 5 (Layout and Grid systems only to secure responsiveness).
2.  **Typography Fonts:**
    *   **Headings:** *Playfair Display* (Google Fonts)
    *   **Body Copy:** *Inter* (Google Fonts)
3.  **Animations:** GSAP 3.x + GSAP ScrollTrigger CDN (Calm, premium reveals, counts, and zooms).
4.  **Themes:** Vanilla JS system storing preferences inside localStorage to prevent unstyled layout flickering.

---

## 📂 File Architecture

```
/executive-coaching-leadership-firm/
├── index.html                  # Home Page (C-Suite focus)
├── home-2.html                 # Home Page (Business/Board alignment focus)
├── services.html               # Service pillar listings
├── service-details.html        # General service deep dive
├── executive-coaching.html     # C-Suite Coaching details
├── leadership-development.html  # Officer pipelines details
├── team-effectiveness.html     # Alignment summit details
├── succession-planning.html    # Succession risk mapping details
├── 360-assessment.html         # Diagnostic metrics & Hogans
├── methodology.html            # Timeline consulting methodologies
├── case-studies.html           # Outcomes grid index
├── case-study-details.html     # Meridian Logistics case details
├── blog.html                   # Whitepapers & insights index
├── blog-details.html           # CEO succession derailers whitepaper
├── contact.html                # Offices & Secure consultations form
├── login.html                  # Administrative client portal login
├── signup.html                 # Pre-approved portal registration
├── 404.html                    # Custom archive/error coordination page
│
├── assets/
│   ├── css/
│   │   ├── bootstrap.min.css   # Clean grid structure
│   │   ├── style.css           # Principal custom design properties
│   │   ├── dark.css            # Dark mode variables & style overrides
│   │   └── animations.css      # CSS hover keyframe motions
│   │
│   ├── js/
│   │   ├── main.js             # General interactive logic
│   │   ├── theme-toggle.js     # Light/dark mode persistent logic
│   │   └── animations.js       # GSAP triggers and counters
│   │
│   └── images/                 # Unsplash photography targets
└── README.md
```

---

## 🚀 Performance & Readability Standards

*   **Zero Overflow:** Viewport constraints validated at 320px, 375px, 768px, 1024px, 1440px, and ultra-wide screens.
*   **Contrast Rigor:** Highly readable font weights and background-text pairings maintained across light and dark theme mappings.
*   **Absolute Privacy:** Mock databases, login workflows, and client inquiry inputs perform custom client-side validation prior to sending data.
