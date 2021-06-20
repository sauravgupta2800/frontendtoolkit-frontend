export const FIELDS = [
  {
    key: "font-family",
    styleKey: "fontFamily",
    label: "Font Name",
    defaultValue: "verdana, sans-serif",
    options: [
      {
        key: 'courier, "courier new", monospace',
        label: "Courier",
      },
      {
        key: "georgia, serif",
        label: "Georgia",
      },
      {
        key: '"palatino linotype", palatino, serif',
        label: "Palatino",
      },
      {
        key: '"times new roman", times, serif',
        label: "Times New Roman",
      },
      {
        key: "arial, sans-serif",
        label: "Arial",
      },
      {
        key: "helvetica, sans-serif",
        label: "Helvetica",
      },
      {
        key: "impact, sans-serif",
        label: "Impact",
      },
      {
        key: '"lucida sans unicode", "lucida grande", sans-serif',
        label: "Lucida Sans",
      },
      {
        key: '"Tahoma", "Geneva", sans-serif',
        label: "Tahoma",
      },
      {
        key: '"trebuchet MS", sans-serif',
        label: "Trebuchet MS",
      },
      {
        key: '"Gill Sans", "Gill Sans MT", sans-serif',
        label: "Gill Sans",
      },
      {
        key: "verdana, sans-serif",
        label: "Verdana",
      },
    ],
  },
  {
    key: "color",
    styleKey: "color",
    label: "Font Color",
    defaultValue: "#121212",
  },
  {
    key: "font-size",
    styleKey: "fontSize",
    label: "Font Size",
    slider: true,
    defaultValue: "14px",
  },
  {
    key: "font-style",
    styleKey: "fontStyle",
    label: "Font Style",
    defaultValue: "normal",
    options: [
      { key: "normal", label: "Normal" },
      { key: "italic", label: "Italic" },
      { key: "oblique", label: "Oblique" },
    ],
  },
  {
    key: "font-weight",
    styleKey: "fontWeight",
    label: "Font Weight",
    defaultValue: "normal",
    options: [
      { key: "normal", label: "Normal" },
      { key: "bold", label: "Bold" },
    ],
  },
  {
    key: "font-variant",
    styleKey: "fontVariant",
    label: "Font Variant",
    defaultValue: "normal",
    options: [
      { key: "normal", label: "Normal" },
      { key: "small-caps", label: "Small Caps" },
    ],
  },
  {
    key: "text-align",
    styleKey: "fontAlign",
    label: "Text Align",
    defaultValue: "left",
    options: [
      { key: "left", label: "Left" },
      { key: "right", label: "Right" },
      { key: "center", label: "Center" },
      { key: "justify", label: "Justidy" },
    ],
  },
  {
    key: "letter-spacing",
    styleKey: "letterSpacing",
    label: "Letter Spacing",
    defaultValue: "0px",
    slider: true,
  },
  {
    key: "line-height",
    styleKey: "lineHeight",
    label: "Line Height",
    defaultValue: "20px",
    slider: true,
  },
  {
    key: "text-transform",
    styleKey: "textTransform",
    label: "Text transform",
    defaultValue: "normal",
    options: [
      { key: "normal", label: "Normal" },
      { key: "uppercase", label: "Uppercase" },
      { key: "lowercase", label: "Lowercase" },
      { key: "capitalize", label: "Capitalize" },
    ],
  },
];
