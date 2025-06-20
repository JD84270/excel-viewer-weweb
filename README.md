# WeWeb Excel Viewer Plugin

This plugin allows you to view `.xlsx` files in your WeWeb application using the SheetJS (XLSX) library.

## 📥 Props
- `fileUrl` (string): The signed URL of the Excel file to display.

## 🚀 How to use
1. Add this plugin to your WeWeb project using "Add custom plugin from GitHub".
2. Bind the `fileUrl` prop to your signed Supabase file URL (e.g. `documentActif`).
3. The first sheet of the Excel file will be displayed as an HTML table.

## 📚 Dependencies
- Uses `xlsx` from SheetJS.
