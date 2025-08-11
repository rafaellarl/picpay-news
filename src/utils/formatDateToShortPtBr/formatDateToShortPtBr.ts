const formatDateToShortPtBr = (dateStr: string): string => {
  const date = new Date(dateStr);

  const monthMap: Record<string, string> = {
    jan: 'Jan',
    fev: 'Fev',
    mar: 'Mar',
    abr: 'Abr',
    mai: 'Mai',
    jun: 'Jun',
    jul: 'Jul',
    ago: 'Ago',
    set: 'Set',
    out: 'Out',
    nov: 'Nov',
    dez: 'Dez',
  };

  const formatted = new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).format(date);

  const parts = formatted.split(' ');

  const day = parts[0];
  const rawMonth = parts[2].replace('.', '').toLowerCase();

  const month = monthMap[rawMonth] || rawMonth;

  const year = date.getFullYear();

  return `${month} ${day}, ${year}`;
};

export default formatDateToShortPtBr;
