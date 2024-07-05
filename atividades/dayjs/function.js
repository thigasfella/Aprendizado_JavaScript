const dayjs = require('dayjs')
const dateAnniversary = () => {
    const anniversary = dayjs('2004-08-22', 'YYYY-MM-DD')
    const now = dayjs();
    const diffYear = now.diff(anniversary, 'year',)
    const diffMonth = now.diff(anniversary, 'month',)
    const diffDay = now.diff(anniversary, 'day',)
    const nextAnniversary = anniversary.add(diffYear + 1, 'year')

    console.log(`A diferença de anos entre ${now.format('DD-MM-YYYY')} e ${anniversary.format('DD-MM-YYYY')} é: ${diffYear}`);
    console.log(`A diferença de meses entre ${now.format('DD-MM-YYYY')} e ${anniversary.format('DD-MM-YYYY')} é: ${diffMonth}`);
    console.log(`A diferença de dias entre ${now.format('DD-MM-YYYY')} e ${anniversary.format('DD-MM-YYYY')} é: ${diffDay}`);
    console.log(`O próximo aniversário é em: ${nextAnniversary}`);
}

module.exports = dateAnniversary;