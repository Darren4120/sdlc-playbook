# Mercedes-Benz Corporate Fonts Setup

## Current Setup
The website is currently using **fallback fonts** that match the Mercedes-Benz brand style:
- **Headlines**: PT Serif (resembles MB Corpo A Condensed - serif)
- **Body Text**: Open Sans (resembles MB Corpo S - sans-serif)
- **UI Elements**: Roboto (clean sans-serif)

## Using Official MB Corpo Fonts

If you have access to the licensed **Mercedes-Benz Corpo** fonts, follow these steps:

### 1. Add Font Files
Place your MB Corpo font files in a `fonts/` folder:
```
website/
├── fonts/
│   ├── MBCorpoACondensed-Regular.woff2
│   ├── MBCorpoACondensed-Bold.woff2
│   ├── MBCorpoS-Regular.woff2
│   ├── MBCorpoS-Bold.woff2
│   └── ...
├── index.html
├── styles.css
└── ...
```

### 2. Add @font-face Declarations
Add this to the **top of `styles.css`** (before the `:root` section):

```css
/* Mercedes-Benz Corpo A Condensed - For Headlines */
@font-face {
    font-family: 'Mercedes-Benz Corpo A Condensed';
    src: url('fonts/MBCorpoACondensed-Regular.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;
}

@font-face {
    font-family: 'Mercedes-Benz Corpo A Condensed';
    src: url('fonts/MBCorpoACondensed-Bold.woff2') format('woff2');
    font-weight: 700;
    font-style: normal;
}

/* Mercedes-Benz Corpo S - For Body Text */
@font-face {
    font-family: 'Mercedes-Benz Corpo S';
    src: url('fonts/MBCorpoS-Regular.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;
}

@font-face {
    font-family: 'Mercedes-Benz Corpo S';
    src: url('fonts/MBCorpoS-Bold.woff2') format('woff2');
    font-weight: 700;
    font-style: normal;
}
```

### 3. Update CSS Variables
In the `:root` section of `styles.css`, uncomment the MB Corpo font lines:

```css
/* Typography - Mercedes-Benz Official Fonts */
--font-heading: 'Mercedes-Benz Corpo A Condensed', 'PT Serif', 'Georgia', serif;
--font-body: 'Mercedes-Benz Corpo S', 'Open Sans', 'Helvetica Neue', sans-serif;
--font-text: 'Roboto', 'Arial', sans-serif;
```

### 4. Remove/Update Google Fonts Link
Once you have the official fonts, you can optionally remove the Google Fonts link from `index.html` or keep it as a fallback.

## Font Usage Guidelines

According to Mercedes-Benz brand guidelines:

- **Mercedes-Benz Corpo A Condensed** (serif)
  - Use exclusively for **headlines**
  - Creates strong, authoritative presence
  
- **Mercedes-Benz Corpo S** (sans-serif)
  - Use for **subheadlines, taglines, body copy, and all smaller text**
  - Clean, modern, highly readable

## Official MB Color
- **Digital Blue**: #008DFC (RGB: 0, 141, 252)
- **CMYK**: 100 | 0 | 0 | 0
- **Pantone**: Process Cyan C
- **RAL**: 240 50 40

## License Requirements
Mercedes-Benz Corpo fonts are proprietary and require proper licensing from Mercedes-Benz AG. Contact your organization's brand team or Mercedes-Benz licensing for access.
