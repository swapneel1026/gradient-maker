# ColorPicker Component

A React-based color picker application that allows users to create and customize linear gradients with 2, 3, or 4 colors. The component also provides options to set gradient directions and preview the output in real time.

## Features

- **Gradient Customization:**
  - Choose the number of colors for the gradient (2, 3, or 4).
  - Pick individual colors using a color picker input.
  - Adjust gradient direction (e.g., to right, to left, to top, to bottom).
- **Live Preview:**
  - Displays the generated gradient as the background.
  - Shows a preview of the text color within the gradient.
- **Random Gradient Generator:**
  - Generates random colors for the gradient.
- **Code Export:**
  - Displays the CSS code for the generated gradient in a syntax-highlighted code block.


## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/color-picker.git
   cd color-picker
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open the app in your browser:
   ```
   http://localhost:3000
   ```

## Usage

### Available Options:

1. **Gradient Palette:**
   - Select the number of colors for the gradient (2, 3, or 4).

2. **Color Inputs:**
   - Pick colors for the gradient using the color picker.

3. **Gradient Direction:**
   - Choose the direction for the gradient: to right, to left, to top, or to bottom.

4. **Random Gradient:**
   - Generate a random gradient with two random colors.

5. **CSS Output:**
   - Copy the generated CSS code for the gradient.

## File Structure

```
.
├── src
│   ├── components
│   │   └── ColorPicker.jsx   # Main ColorPicker component
│   └── App.jsx              # App entry point
├── public
│   └── index.html           # HTML template
└── package.json             # Dependencies and scripts
```

## Dependencies

- **React:** Front-end library for building the UI.
- **randomcolor:** Generates random colors.
- **react-syntax-highlighter:** Displays syntax-highlighted code.
- **Tailwind CSS:** Styling for the application.

## Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the app for production.
- `npm run lint`: Lints the code.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

## Contributing

Contributions are welcome! Feel free to submit a pull request or open an issue for any bug fixes, improvements, or new features.

## Acknowledgments

- [randomcolor](https://github.com/davidmerfield/randomColor): For generating random colors.
- [react-syntax-highlighter](https://github.com/react-syntax-highlighter/react-syntax-highlighter): For syntax highlighting.
- [Tailwind CSS](https://tailwindcss.com/): For the design framework.

---

### Author

**Swapneel Shubham**  
[GitHub Profile](https://github.com/swapneel1026)


 
