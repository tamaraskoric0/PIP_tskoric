describe('KANAAN', () => {
    it('Ucitavanje pocetne stranice', async () => {
        await browser.url('https://kanaan.hr/');
        const elem = await $('.span6 menu tc');
    });

   it('Ucitavanje stranice Proizvodi', async () => {
       await browser.url('https://kanaan.hr/');
       const elem = await $('#menu-item-314');
       await elem.click();
       const h1 = await $('h1');
       await expect(h1).toHaveText('Proizvodi');
   });

   it('Ucitavanje stranice O Kanaanu', async () => {
    await browser.url('https://kanaan.hr/');
    const elem = await $('#menu-item-68');
    await elem.click();
    const h1 = await $('h1');
    await expect(h1).toHaveText('O Kanaanu');
    });

    it('Ucitavanje stranice Novosti', async () => {
        await browser.url('https://kanaan.hr/');
        const elem = await $('#menu-item-625');
        await elem.click();
        const h1 = await $('h1');
        await expect(h1).toHaveText('Novosti');
        });

    it('Ucitavanje stranice Kontakt', async () => {
        await browser.url('https://kanaan.hr/novosti/');
        const elem = await $('#menu-item-67');
        await elem.click();
        const h1 = await $('h1');
        await expect(h1).toHaveText('Kontakt');
        });
})