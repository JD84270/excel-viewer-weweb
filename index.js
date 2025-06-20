export default {
  props: {
    fileUrl: {
      type: 'string',
      required: true,
    },
  },
  async mounted() {
    if (!window.XLSX) {
      const script = document.createElement('script');
      script.src = 'https://cdn.sheetjs.com/xlsx-latest/package/dist/xlsx.full.min.js';
      document.head.appendChild(script);
      await new Promise(resolve => (script.onload = resolve));
    }

    const res = await fetch(this.fileUrl);
    const arrayBuffer = await res.arrayBuffer();
    const workbook = XLSX.read(arrayBuffer, { type: 'array' });
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    const html = XLSX.utils.sheet_to_html(sheet);
    this.$el.innerHTML = html;
  },
};

