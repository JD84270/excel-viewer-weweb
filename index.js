import * as XLSX from 'xlsx';

export default {
  props: {
    fileUrl: {
      type: 'string',
      required: true,
    },
  },
  async mounted() {
    const res = await fetch(this.fileUrl);
    const arrayBuffer = await res.arrayBuffer();
    const workbook = XLSX.read(arrayBuffer, { type: 'array' });
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    const html = XLSX.utils.sheet_to_html(sheet);
    this.$el.innerHTML = html;
  },
};
