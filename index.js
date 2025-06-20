export default {
  props: {
    fileUrl: {
      type: 'string',
      required: true,
    },
  },
  data() {
    return {
      htmlTable: '',
    };
  },
  async mounted() {
    if (!window.XLSX) {
      const script = document.createElement('script');
      script.src = 'https://cdn.sheetjs.com/xlsx-latest/package/dist/xlsx.full.min.js';
      document.head.appendChild(script);
      await new Promise(resolve => (script.onload = resolve));
    }

    try {
      const res = await fetch(this.fileUrl);
      const arrayBuffer = await res.arrayBuffer();
      const workbook = XLSX.read(arrayBuffer, { type: 'array' });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      this.htmlTable = XLSX.utils.sheet_to_html(sheet);
    } catch (error) {
      this.htmlTable = `<p>Erreur lors du chargement du fichier Excel.</p>`;
    }
  },
  render(h) {
    return h('div', {
      domProps: {
        innerHTML: this.htmlTable,
      },
    });
  },
};


